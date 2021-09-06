import React, {useState, useEffect} from 'react';

function Clock() {
    const {timeString} = useClock()

    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default Clock;