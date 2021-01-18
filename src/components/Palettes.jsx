import React from 'react';
import PaletteItem from './PaletteItem';

const Palettes = (props) => {

	return props.palettes.map((palette) =>(
        <PaletteItem key={palette.id} palette={palette}/>
        ));
};

export default Palettes;