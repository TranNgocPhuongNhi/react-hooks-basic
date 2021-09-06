import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};

function ColorBox() {
    const [color, setColor] = useState('deeppink')
    return (
        <div className="color-box" style={{ backgroundColor: }}>
            COLOR BOX
        </div>
    );
}

export default ColorBox;