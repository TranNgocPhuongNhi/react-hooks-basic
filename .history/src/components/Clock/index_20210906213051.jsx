import React from 'react';

Clock.propTypes = {};

function formatDate(date) {
    if(!date) return ''

    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)

    return `${hours}:${minutes}:${seconds}`
}

function Clock() {
    const [timeString, setTimeString] = u
    return (
        <div>
            
        </div>
    );
}

export default Clock;