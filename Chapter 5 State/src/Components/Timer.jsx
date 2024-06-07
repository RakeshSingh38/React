
export default function Timer({ time }) {
    let hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
        className = 'night';
    } else {
        className = 'day';
    }
    return (
        // <h1 className=`${className} text-green-500`>
        <div className="static">
        <h1 className={`${className} text-6xl text-center absolute inset-10 `}>
            {time.toLocaleTimeString()}
        </h1>
        </div>
    );
}
