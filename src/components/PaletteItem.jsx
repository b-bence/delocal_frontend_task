import React, { useEffect, useState, useContext } from 'react';

const PaletteItem = (props) => {

	return (
		<div className='palette'>
			<h2>{props.palette.title}</h2>
		</div>
	);
};

export default PaletteItem;
