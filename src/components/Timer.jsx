const Timer = ({ centisecond }) => {
    const formatTimeNum = (num) => {
        return num.toString().length === 1 ? `0${num}` : num;
    };

    const formatTime = (num) => {
        const minute = parseInt(num / 6000);
        const second = parseInt((num % 6000) / 100);
        const centisecond = parseInt((num % 6000) % 100);
        return (
            formatTimeNum(minute) +
            ':' +
            formatTimeNum(second) +
            '.' +
            formatTimeNum(centisecond)
        );
    };
    return (
        <h1 className="text-5xl font-extrabold pb-8 text-center tracking-tighter break-words">
            {formatTime(centisecond)}
        </h1>
    );
};

export default Timer;
