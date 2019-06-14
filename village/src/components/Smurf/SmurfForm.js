import React, { Component } from 'react';

export class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: '',
			errors: {}
		};
	}

	addSmurf = event => {
		event.preventDefault();
		this.setState({
			name: '',
			age: '',
			height: ''
		});
	};

	validateInput = ({ name, age, height }) => {
		let errors = {};

		if (name.trim() === '') {
			errors.name = 'Name is required';
		}

		if (height.trim() === '') {
			errors.email = 'Height is required';
		}

		if (age.trim() === '') {
			errors.age = 'Age is required';
		}

		this.setState(() => ({
			name: '',
			age: '',
			height: '',
			errors: {}
		}));

		return errors;
	};

	handleInputChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		this.setState(() => ({ [field]: value }));
	};

	render() {
		const { name, age, height } = this.state;

		return (
			<div>
				<form onSubmit={this.addSmurf}>
					<div>
						<input onChange={this.handleInputChange} placeholder="Name" value={name} name="name" />
					</div>

					<div>
						<input onChange={this.handleInputChange} placeholder="age" value={age} name="age" />
					</div>

					<div>
						<input onChange={this.handleInputChange} placeholder="height" value={height} name="height" />
					</div>

					<button type="submit">Add to the village</button>
				</form>
			</div>
		);
	}
}
