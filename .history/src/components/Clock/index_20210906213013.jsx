import React from 'react';

Clock.propTypes = {};

function formatDate(date) {
    if(!date) return ''

    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSec()}`.slice(-2)
}

function Clock() {
    return (
        <div>
            
        </div>
    );
}

export default Clock;