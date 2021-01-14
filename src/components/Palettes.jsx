import React, { useEffect, useState, useContext } from 'react';
import PaletteItem from './PaletteItem';

const Palettes = (props) => {

	return props.palettes.map((palette) =>(
        <PaletteItem palette={palette}/>
        ));
};

export default Palettes;