import React, {useState, useEffect} from 'react';
import use

function Clock() {
    const {timeString} = useClock()

    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default Clock;