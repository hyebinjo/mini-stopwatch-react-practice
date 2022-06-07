const Laps = ({ laps }) => {
    const lapTimes = laps.reduce((prev, curr) => [...prev, curr[1]], []);
    const minIdx = lapTimes.lastIndexOf(Math.min(...lapTimes));
    const maxIdx = lapTimes.lastIndexOf(Math.max(...lapTimes));

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

    const setMinMax = (idx) => {
        if (laps.length === 1) {
            return;
        }
        if (idx === minIdx) return 'text-green-600';
        if (idx === maxIdx) return 'text-red-600';
        return;
    };

    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul>
                {laps.map((lap, idx) => (
                    <li
                        key={idx}
                        className={`flex justify-between py-2 px-3 border-b-2 ${setMinMax(
                            idx
                        )}`}
                    >
                        <span>랩 {lap[0]}</span>
                        <span>{formatTime(lap[1])}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Laps;
