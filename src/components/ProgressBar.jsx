import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar() {
    const [remainingTime, setRemainingTime] = useState(TIMER);
    useEffect(() => {
        const clear = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
        return () => {
            clearInterval(clear);
        };
    }, []);
    return <progress value={remainingTime} max={TIMER} />;
}
