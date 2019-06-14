import React from 'react';
import PropTypes from 'prop-types';
import { Smurf } from '../../Smurf/Smurf';

export const SingleSmurf = props => {
	return (
		<main>
			<div>
				<div>
					<Smurf {...props} />
				</div>
			</div>
		</main>
	);
};

SingleSmurf.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired
	})
};
