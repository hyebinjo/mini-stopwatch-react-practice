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

export default formatTime;
