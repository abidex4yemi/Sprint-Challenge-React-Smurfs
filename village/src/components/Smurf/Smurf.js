import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SmurfStyled = styled.div`
	font-size: 1.6rem;
	margin-bottom: 2rem;
	min-width: 300px;
	min-height: 100px;
	max-width: 100px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	padding: 1rem;
	color: #656e78;

	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}

	h3,
	p {
		margin-bottom: 1.5rem;
	}

	h3 {
		color: rgba(16, 16, 16, 1);
	}
`;

const ActionsContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;

	div {
		width: 50%;
	}

	div a,
	button {
		width: 40%;
		cursor: pointer;
		font-size: 1.8rem;
		outline: 0;
		display: block;
	}

	div a {
		border: 0;
		height: 40px;
		color: #201c29;
		border: 1px solid #ffc107;
		text-decoration: none;
		text-align: center;
		line-height: 2;
		transition: 0.2s;
		display: block;
		width: auto;

		&:hover {
			background: #ffc107;
			color: #fff;
		}
	}

	button.delete {
		border: 1px solid #dc3545;

		&:hover {
			background: #dc3545;
			color: #fff;
		}
	}
`;

export const Smurf = props => {
	const { name, age, height, id, deleteFriend } = props;

	return (
		<SmurfStyled>
			<h3>{name}</h3>
			<p>
				<strong>{height} tall</strong>
			</p>
			<p>{age} smurf years old</p>

			<ActionsContainerStyled>
				<div>
					<Link to={`/smurf/${id}/edit`} className="edit">
						Edit
					</Link>
				</div>
				<button
					type="button"
					className="delete"
					onClick={evt => {
						evt.preventDefault();
						deleteFriend(id);
					}}
				>
					Delete
				</button>
			</ActionsContainerStyled>
		</SmurfStyled>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};
