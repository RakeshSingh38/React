import { useState, useEffect } from 'react';
import Timer from '../Components/Timer';

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function Clock() {
    const time = useTime();
    return (
        <Timer time={time} />
    );
}
