import React, {useState, useEffect, useClock} from 'react';

function Clock() {
    const {timeString} = useClock()

    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default Clock;