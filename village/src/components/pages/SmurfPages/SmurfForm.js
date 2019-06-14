import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import uuid from 'uuid';
import { NavBar } from '../../layout/NavBar';

const navLinkArray = [
	{
		id: uuid(),
		to: '/',
		linkText: 'Smurfs'
	},
	{
		id: uuid(),
		to: '/smurf/add',
		linkText: 'Add Smurf'
	}
];

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	font-size: 1.5rem;
`;

const Content = styled.div`
	width: 300px;
	margin: 100px auto;

	h2 {
		text-align: center;
		margin-bottom: 20px;
		font-size: 3rem;
	}
`;

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
			errors: {},
			editMode: false,
			smurfID: null
		};
		this.baseURL = 'http://localhost:3333';
	}

	componentDidMount() {
		// populate form input if edit mode is true
		// Note: editMode is turned on if
		// url path: /smurf/<id>/edit
		// and form input will be populated with friend data
		this.populateFormInput();
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
						height: '',
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

	updateSmurf = evt => {
		evt.preventDefault();
		const { name, height, age, smurfID } = this.state;

		const url = `${this.baseURL}/smurfs/${smurfID}`;

		// update smurf data
		const updatedSmurf = {
			name,
			height,
			age
		};

		axios
			.put(url, updatedSmurf)
			.then(res => {
				this.setState(() => ({
					name: '',
					age: '',
					height: '',
					editMode: false,
					smurfID: null,
					errors: {}
				}));

				this.props.updateSmurfsList(res.data);
				this.props.history.push('/');
			})
			.catch(err => err)
			.finally(err => err);
	};

	populateFormInput = () => {
		const { id } = this.props.match.params;
		const findSmurfById = this.props.smurfs.find(smurf => `${smurf.id}` === id);

		if (typeof findSmurfById !== 'undefined') {
			const { name, height, age } = findSmurfById;

			this.setState(prevState => ({
				editMode: !prevState.editMode,
				smurfID: id,
				name,
				height,
				age,
				errors: {}
			}));
		}
	};

	render() {
		const { name, age, height, errors, editMode } = this.state;

		return (
			<React.Fragment>
				<NavBar navLinkArray={navLinkArray} />
				<main>
					<ContainerStyles>
						<Content>
							{editMode ? <h2>Edit Smurfs info</h2> : <h2>Add New Smurfs</h2>}

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

									{editMode ? (
										<ButtonStyled type="submit" onClick={this.updateSmurf}>
											Update Smurf
										</ButtonStyled>
									) : (
										<ButtonStyled type="submit" onClick={this.addSmurf}>
											Add to the village
										</ButtonStyled>
									)}
								</form>
							</div>
						</Content>
					</ContainerStyles>
				</main>
			</React.Fragment>
		);
	}
}
