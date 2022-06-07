import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
    const { centisecond, start, pause, createLap, reset, isRunning, laps } =
        useTimer();

    const handleStartStopClick = () => {
        isRunning ? pause() : start();
    };

    const handleLapResetClick = () => {
        isRunning ? createLap() : reset();
    };

    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button
                    label="리셋"
                    code="L"
                    color="bg-gray-600"
                    onClick={handleLapResetClick}
                />
                <Button
                    label="시작"
                    code="S"
                    color="bg-green-600"
                    onClick={handleStartStopClick}
                />
            </div>
            <Laps laps={laps} />
        </section>
    );
};

export default Stopwatch;
