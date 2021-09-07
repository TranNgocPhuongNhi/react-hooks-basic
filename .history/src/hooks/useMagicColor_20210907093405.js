import {useState, useEffect} from 'react';

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(color)
            setColor(new)
        })
    })

    return color
}

export default useMagicColor;