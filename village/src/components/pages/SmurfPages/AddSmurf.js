import React from 'react';
import PropTypes from 'prop-types';

import { SmurfForm } from '../../Smurf/SmurfForm';

export const AddSmurf = props => {
	const { smurfs } = props;
	return (
		<main>
			<div>
				<div>
					<SmurfForm smurfs={smurfs} {...props} />
				</div>
			</div>
		</main>
	);
};

AddSmurf.propTypes = {
	smurfs: PropTypes.array.isRequired
};
