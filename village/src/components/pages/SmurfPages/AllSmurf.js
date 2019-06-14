import React from 'react';
import PropTypes from 'prop-types';
import { Smurfs } from '../../Smurf/Smurfs';

export const AllSmurf = props => {
	const { smurfs } = props;

	return (
		<main>
			<div>
				<div>
					<Smurfs smurfs={smurfs} {...props} />
				</div>
			</div>
		</main>
	);
};

Smurfs.propTypes = {
	smurfs: PropTypes.array.isRequired
};
