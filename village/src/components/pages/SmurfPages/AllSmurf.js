import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Smurfs } from '../../Smurf/Smurfs';
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

export const AllSmurf = props => {
	const { smurfs } = props;

	return (
		<React.Fragment>
			<NavBar navLinkArray={navLinkArray} />
			<main>
				<div>
					<div>
						<Smurfs smurfs={smurfs} {...props} />
					</div>
				</div>
			</main>
		</React.Fragment>
	);
};

Smurfs.propTypes = {
	smurfs: PropTypes.array.isRequired
};
