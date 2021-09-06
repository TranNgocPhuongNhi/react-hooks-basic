import {useState, useEffect} from 'react';

function useClock() {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date()
            const newTimeString = formatDate(now)

            setTimeString(newTimeString)
        }, 1000)

        return () => {
            //  cleanup
            clearInterval(clockInterval)
        }
    }, [])

    return {timeString}
}

export default useClock;