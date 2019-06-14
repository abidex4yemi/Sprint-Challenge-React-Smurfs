import React from 'react';

export const Smurf = props => {
	const { name, age, height } = props;
	return (
		<div>
			<h3>{name}</h3>
			<strong>{height} tall</strong>
			<p>{age} smurf years old</p>
		</div>
	);
};

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};
