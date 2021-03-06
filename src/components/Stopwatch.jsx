import { useEffect, useRef, useCallback } from 'react';
import useTimer from '../hooks/useTimer';
import Button from './Button';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
    const { centisecond, start, pause, createLap, reset, isRunning, laps } =
        useTimer();

    const handleStartStopClick = useCallback(() => {
        isRunning ? pause() : start();
    }, [isRunning, pause, start]);

    const handleLapResetClick = () => {
        isRunning ? createLap() : reset();
    };

    const lapResetBtnRef = useRef(null);
    const startStopBtnRef = useRef(null);

    const triggerOnClick = (e) => {
        const keyCode = e.code;
        if (keyCode === 'KeyL') {
            lapResetBtnRef.current.click();
        } else if (keyCode === 'KeyS') {
            startStopBtnRef.current.click();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', triggerOnClick);
        return () => {
            window.removeEventListener('keydown', triggerOnClick);
        };
    }, []);

    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <Button
                    label={isRunning ? '랩' : '리셋'}
                    code="L"
                    color="bg-gray-600"
                    onClick={handleLapResetClick}
                    ref={lapResetBtnRef}
                />
                <Button
                    label={isRunning ? '중단' : '시작'}
                    code="S"
                    color={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    onClick={handleStartStopClick}
                    ref={startStopBtnRef}
                />
            </div>
            <Laps laps={laps} />
        </section>
    );
};

export default Stopwatch;
