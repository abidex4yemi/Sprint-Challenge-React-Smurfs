import React from 'react';
import { Smurf } from './Smurf';
import PropTypes from 'prop-types';

export const Smurfs = props => {
	const { smurfs } = props;

	return (
		<section>
			<h1>Smurf Village</h1>
			<div>{smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}</div>
		</section>
	);
};

Smurfs.propTypes = {
	smurfs: PropTypes.array.isRequired
};
