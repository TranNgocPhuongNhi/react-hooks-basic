import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox() {
    const [color, setColor] = useState('green')

    function handleBoxClick() {
        // get random color ->
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;