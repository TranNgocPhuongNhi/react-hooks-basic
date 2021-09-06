import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const COLOR_LIST = ['deepink', 'green', 'yellow', 'orange', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 6)
    return COLOR_LIST[randomIndex]
}

function ColorBox() {
    const [color, setColor] = useState('green')

    function handleBoxClick() {
        // get random color -> set color
        const newColor = getRandomColor()
        setColor(newColor)
        
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxClick}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;