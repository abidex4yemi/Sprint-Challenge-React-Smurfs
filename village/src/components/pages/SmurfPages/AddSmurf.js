import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { SmurfForm } from '../../Smurf/SmurfForm';
import { NavBar } from '../../layout/NavBar';

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
				<div>
					<div>
						<SmurfForm smurfs={smurfs} {...props} />
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

AddSmurf.propTypes = {
	smurfs: PropTypes.array.isRequired
};
