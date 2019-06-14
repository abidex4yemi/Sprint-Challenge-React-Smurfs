import React, { Component } from 'react';
import axios from 'axios';

export class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: '',
			errors: {}
		};
		this.baseURL = 'http://localhost:3333';
	}

	addSmurf = event => {
		event.preventDefault();
		const url = `${this.baseURL}/smurfs`;

		const { name, age, height } = this.state;
		const errors = this.validateInput({ name, age, height });

		if (!Object.keys(errors).length) {
			const newSmurf = {
				name: name,
				age: parseInt(age, 10),
				height: height
			};

			axios
				.post(url, newSmurf)
				.then(res => {
					this.setState(() => ({
						name: '',
						age: '',
						email: '',
						errors: {}
					}));

					this.props.updateSmurfsList(res.data);
					this.props.history.push('/');
				})
				.catch(err => err)
				.finally(err => err);
		}
	};

	validateInput = ({ name, age, height }) => {
		let errors = {};

		if (name.trim() === '') {
			errors.name = 'Name is required';
		}

		if (height.trim() === '') {
			errors.height = 'Height is required';
		}

		if (age.trim() === '') {
			errors.age = 'Age is required';
		}

		this.setState(prevState => ({
			...prevState,
			errors
		}));

		return errors;
	};

	handleInputChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		this.setState(() => ({ [field]: value }));
	};

	render() {
		const { name, age, height, errors } = this.state;

		return (
			<div>
				<form onSubmit={this.addSmurf}>
					<div>
						<input onChange={this.handleInputChange} placeholder="Name" value={name} name="name" />
						<small>{errors.name || ''}</small>
					</div>

					<div>
						<input onChange={this.handleInputChange} placeholder="age" value={age} name="age" />
						<small>{errors.age || ''}</small>
					</div>

					<div>
						<input onChange={this.handleInputChange} placeholder="height" value={height} name="height" />
						<small>{errors.height || ''}</small>
					</div>

					<button type="submit" onClick={this.addSmurf}>
						Add to the village
					</button>
				</form>
			</div>
		);
	}
}
