import React from 'react';
import './PaletteItem.css'

const PaletteItem = (props) => {

	const imageUrl = props.palette.imageUrl;

	const getDate = (stringTime) => {
		let fullDate = stringTime;
		fullDate = fullDate.split(' ');
		let timePart = 1;
		let time = fullDate[timePart].slice(0,5);
		return toStandardTime(time);
	}

	function toStandardTime(militaryTime) {
		militaryTime = militaryTime.split(':');
		return (militaryTime[0].charAt(0) === 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.' : militaryTime.join(':') + ' A.M.'
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
