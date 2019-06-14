import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { Route, Switch } from 'react-router-dom';
import { AllSmurf } from './components/pages/SmurfPages/AllSmurf';
import { SingleSmurf } from './components/pages/SmurfPages/SingleSmurf';
import { SmurfForm } from './components/pages/SmurfPages/SmurfForm';

// Smurf page page routes data
const routeDetails = [
	{
		id: uuid(),
		path: '/',
		ComponentToRender: AllSmurf
	},
	{
		id: uuid(),
		path: '/smurf/add',
		ComponentToRender: SmurfForm
	},
	{
		id: uuid(),
		path: '/smurf/:id',
		ComponentToRender: SingleSmurf
	},
	{
		id: uuid(),
		path: '/smurf/:id/edit',
		ComponentToRender: SmurfForm
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

	updateSmurfsList = data => {
		this.setState(() => ({
			smurfs: data
		}));
	};

	deleteFriend = id => {
		this.setState(prevState => {
			const smurf = prevState.smurfs.find(smurf => smurf.id === id);
			if (smurf) {
				const url = `${this.baseURL}/smurfs/${smurf.id}`;
				axios
					.delete(url)
					.then(res => {
						this.setState(() => ({ smurfs: res.data }));
					})
					.catch(err => err)
					.finally(err => err);
			}
		});
	};

	render() {
		const { smurfs } = this.state;

		return (
			<Switch>
				{routeDetails.map(({ path, id, ComponentToRender }) => {
					return (
						<Route
							key={id}
							exact
							path={path}
							render={props => (
								<ComponentToRender
									{...props}
									smurfs={smurfs}
									updateSmurfsList={this.updateSmurfsList}
									deleteFriend={this.deleteFriend}
								/>
							)}
						/>
					);
				})}
			</Switch>
		);
	}
}
