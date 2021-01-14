import React, { useEffect, useState, useContext } from 'react';
import './PaletteItem.css'

const PaletteItem = (props) => {

	const imageUrl = props.palette.imageUrl;

	const getDate = (stringTime) => {
		let fullDate = stringTime;
		fullDate = fullDate.split(' ');
		let time = fullDate[1];
		return time;
	}

	return (
		<div className='palette'>
			<div className='paletteDetails'>
				<div className='paletteTitle'>{props.palette.title}</div>
				<div className='paletteNameAndDate'>by {props.palette.userName} at {getDate(props.palette.dateCreated)}</div>
				<div className='votesAndViews'>{props.palette.numViews} views {props.palette.numVotes} votes</div>
			</div>
				<img className='paletteImage' src={imageUrl} alt=""></img>
		</div>
	);
};

export default PaletteItem;
