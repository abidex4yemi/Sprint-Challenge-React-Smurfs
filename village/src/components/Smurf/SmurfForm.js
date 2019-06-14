import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const InputStyled = styled.input`
	width: 100%;
	font-size: 1.5rem;
	padding: 0.5rem;
	border: 0;
	border: 1px solid #656e78;
	outline: 0;
	box-sizing: border-box;
	border-radius: 5px;
	transition: 0.2s;

	&.is-invalid {
		border-color: #dc3545;
	}

	&:focus {
		border: 1px solid #01deff;
	}
`;

const ButtonStyled = styled.button`
	color: #fff;
	background: #002a32;
	font-size: 1.2em;
	border: 0;
	border-radius: 5px;
	border: 1px solid #002a32;
	height: 40px;
	width: 100%;
	cursor: pointer;
	transition: 0.2s;
	text-shadow: 1px 6px 33px #000000;
	outline: 0;

	&:hover {
		background: #00d6d6;
		color: #002a32;
	}
`;

const InputContainer = styled.div`margin-bottom: 1rem;`;

const ErrorStyle = styled.small`
	color: #dc3545;
	font-size: 1.5rem;
`;

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
					<InputContainer>
						<InputStyled onChange={this.handleInputChange} placeholder="Name" value={name} name="name" />
						<ErrorStyle>{errors.name || ''}</ErrorStyle>
					</InputContainer>

					<InputContainer>
						<InputStyled onChange={this.handleInputChange} placeholder="age" value={age} name="age" />
						<ErrorStyle>{errors.age || ''}</ErrorStyle>
					</InputContainer>

					<InputContainer>
						<InputStyled onChange={this.handleInputChange} placeholder="height" value={height} name="height" />
						<ErrorStyle>{errors.height || ''}</ErrorStyle>
					</InputContainer>

					<ButtonStyled type="submit" onClick={this.addSmurf}>
						Add to the village
					</ButtonStyled>
				</form>
			</div>
		);
	}
}
