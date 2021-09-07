import {useState, useEffect} from 'react';

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    
    useEffect(() => {})

    return color
}

export default useMagicColor;