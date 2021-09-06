import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox() {
    const [color, setColor] = useState('deeppink')
    return (
        <div className="color-box" st>
            COLOR BOX
        </div>
    );
}

export default ColorBox;