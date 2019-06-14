import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Smurf } from '../../Smurf/Smurf';
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

const SingleSmurfStyled = styled.section`
	display: flex;
	justify-content: center;
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

export const SingleSmurf = props => {
	const { smurfs } = props.location.state;
	const { id } = props.match.params;
	const smurf = smurfs.find(smurf => `${smurf.id}` === id);

	return (
		<React.Fragment>
			{smurf ? (
				<React.Fragment>
					<NavBar navLinkArray={navLinkArray} />
					<main>
						<ContainerStyles>
							<h1>Smurf Village</h1>
							<SingleSmurfStyled>
								<Smurf {...smurf} />
							</SingleSmurfStyled>
						</ContainerStyles>
					</main>
				</React.Fragment>
			) : (
				'Smurf found does not exist'
			)}
		</React.Fragment>
	);
};

SingleSmurf.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired
	})
};
