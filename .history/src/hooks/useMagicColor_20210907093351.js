import {useState, useEffect} from 'react';

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(color)
        })
    })

    return color
}

export default useMagicColor;