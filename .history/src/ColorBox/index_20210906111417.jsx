import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

funtion getRandomColor() {
    const COLOR_LIST = ['deep']
}

function ColorBox() {
    const [color, setColor] = useState('green')

    function handleBoxClick() {
        // get random color -> set color
        const newColor = getRandomColor()
        setColor(newColor)
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;