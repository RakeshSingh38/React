import React from 'react';

export default function Timer({ time }) {
    // Add missing import statement

    let hours = getHours(time);
    let day;
    if (hours >= 0 && hours <= 6) {
        day = 'night';
    } else {
        day = 'day';
    }
    return (
        <h1 className={day}>
            {time.toLocaleTimeString()}
        </h1>
    );
}