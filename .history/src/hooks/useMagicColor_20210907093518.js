import {useState, useEffect} from 'react';

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = use
    
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(color)
            setColor(newColor)
        }, 1000)
        
        return () => {
        clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;