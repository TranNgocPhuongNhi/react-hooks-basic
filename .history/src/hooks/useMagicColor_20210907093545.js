import {useState, useEffect, useRef} from 'react';

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')
    
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(color)
            setColor(newColor)

            colo
        }, 1000)
        
        return () => {
        clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;