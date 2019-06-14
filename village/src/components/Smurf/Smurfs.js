import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Smurf } from './Smurf';
import PropTypes from 'prop-types';

const SmurfsStyled = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	a {
		text-decoration: none;

		&:hover {
			color: #656e78;
		}
	}
`;

export const Smurfs = props => {
	const { smurfs } = props;

	return (
		<SmurfsStyled>
			{smurfs.map(smurf => (
				<Link
					key={smurf.id}
					to={{
						pathname: `/smurf/${smurf.id}`,
						state: {
							smurfs
						}
					}}
				>
					<Smurf {...smurf} />
				</Link>
			))}
		</SmurfsStyled>
	);
};

Smurfs.propTypes = {
	smurfs: PropTypes.array.isRequired
};
