import React, { Component } from 'react';

export class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: ''
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
