import {useState, useEffect, useRef} from 'react';

function randomColor(color) {
    const COLOR_LIST = ['red', 'green', 'yellow', 'blue']

    
    return COLOR_LIST[newIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')
    
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor)

            colorRef.current = newColor
        }, 1000)
        
        return () => {
        clearInterval(colorInterval)
        }
    }, [])

    return color
}

export default useMagicColor;