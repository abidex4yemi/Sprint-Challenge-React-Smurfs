import React from 'react';
import styled from 'styled-components';

const SmurfStyled = styled.div`
	font-size: 1.6rem;
	margin-bottom: 2rem;
	min-width: 300px;
	min-height: 100px;
	max-width: 100px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	padding: 1rem;

	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}

	h3,
	p {
		margin-bottom: 1.5rem;
	}
`;

export const Smurf = props => {
	const { name, age, height } = props;
	return (
		<SmurfStyled>
			<h3>{name}</h3>
			<p>
				<strong>{height} tall</strong>
			</p>
			<p>{age} smurf years old</p>
		</SmurfStyled>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};
