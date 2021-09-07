import {useState, useEffect} from 'react';

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    

    return color
}

export default useMagicColor;