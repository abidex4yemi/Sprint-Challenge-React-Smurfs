import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Smurfs } from '../../Smurf/Smurfs';
import { NavBar } from '../../layout/NavBar';

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	font-size: 1.5rem;

	h1 {
		margin: 4rem;
		text-align: center;
	}
`;

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

export const AllSmurf = props => {
	const { smurfs } = props;

	return (
		<React.Fragment>
			<NavBar navLinkArray={navLinkArray} />
			<main>
				<ContainerStyles>
					<h1>Smurf Village</h1>
					<Smurfs smurfs={smurfs} {...props} />
				</ContainerStyles>
			</main>
		</React.Fragment>
	);
};

Smurfs.propTypes = {
	smurfs: PropTypes.array.isRequired
};
