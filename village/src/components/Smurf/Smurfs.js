import React from 'react';
import styled from 'styled-components';
import { Smurf } from './Smurf';
import PropTypes from 'prop-types';

const SmurfsStyled = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Smurfs = props => {
	const { smurfs } = props;

	return <SmurfsStyled>{smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}</SmurfsStyled>;
};

Smurfs.propTypes = {
	smurfs: PropTypes.array.isRequired
};
