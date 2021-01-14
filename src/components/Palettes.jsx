import React, { useEffect, useState, useContext } from 'react';
import PaletteDetails from './PaletteDetails';

const Palettes = (props) => {

	return props.palettes.map((palette) =>(
        <PaletteDetails palette={palette}/>
        ));
};

export default Palettes;