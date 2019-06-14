import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { Route } from 'react-router-dom';
import { AllSmurf } from './components/pages/SmurfPages/AllSmurf';
import { SingleSmurf } from './components/pages/SmurfPages/SingleSmurf';
import { AddSmurf } from './components/pages/SmurfPages/AddSmurf';

// Smurf page page routes data
const routeDetails = [
	{
		id: uuid(),
		path: '/',
		ComponentToRender: AllSmurf
	},
	{
		id: uuid(),
		path: '/smurf/:id',
		ComponentToRender: SingleSmurf
	},
	{
		id: uuid(),
		path: '/smurf/add',
		ComponentToRender: AddSmurf
	}
];

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
		this.baseURL = 'http://localhost:3333';
	}

	componentDidMount() {
		const url = `${this.baseURL}/smurfs`;
		this.getAllSmurfData(url);
	}

	getAllSmurfData = url => {
		axios
			.get(url)
			.then(res => {
				this.setState(() => ({ smurfs: res.data }));
			})
			.catch(err => err)
			.finally(err => err);
	};

	render() {
		const { smurfs } = this.state;

		return (
			<React.Fragment>
				{routeDetails.map(({ path, id, ComponentToRender }) => {
					return (
						<Route key={id} exact path={path} render={props => <ComponentToRender {...props} smurfs={smurfs} />} />
					);
				})}
			</React.Fragment>
		);
	}
}
