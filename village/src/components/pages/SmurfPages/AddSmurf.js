import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { SmurfForm } from '../../Smurf/SmurfForm';
import { NavBar } from '../../layout/NavBar';
import styled from 'styled-components';

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	font-size: 1.5rem;

	h1 {
		margin: 4rem;
		text-align: center;
	}
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

export const AddSmurf = props => {
	const { smurfs } = props;
	return (
		<React.Fragment>
			<NavBar navLinkArray={navLinkArray} />
			<main>
				<ContainerStyles>
					<Content>
						<h2>Add New Smurfs</h2>
						<SmurfForm smurfs={smurfs} {...props} />
					</Content>
				</ContainerStyles>
			</main>
		</React.Fragment>
	);
};

AddSmurf.propTypes = {
	smurfs: PropTypes.array.isRequired
};
