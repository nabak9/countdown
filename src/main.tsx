import { Aurum, CancellationToken, DataSource } from 'aurumjs';
import '../scss/main.scss';
import { CountdownStatus } from './countdown_status';
import { ProgressCircle } from './progress_circle/progress_circle';

const originalMinutes = new DataSource("00");
const originalSeconds = new DataSource("00");
const countDownTime = new DataSource<number>(undefined);
const countDownStatus = new DataSource(CountdownStatus.STOPPED);

let cancellationToken: CancellationToken;

function renderInputs(): DataSource<JSX.IntrinsicElements> {
    return countDownStatus.map(status =>
        status === CountdownStatus.STOPPED ? (
            <div class="inputs">
                <input
                    type="text"
                    value={originalMinutes}
                    onInput={e => handleMinutesChange((e.target as HTMLInputElement).value)}
                    class="minutes-input"
                />
                <span class="input-unit">min</span>
                <input
                    type="text"
                    value={originalSeconds}
                    onInput={e => handleSecondsChange((e.target as HTMLInputElement).value)}
                    class="seconds-input"
                />
                <span class="input-unit">s</span>
            </div>
        ) : null
    );
}

function renderStartButton() {
    const startButtonSources = new DataSource().combine([originalMinutes, originalSeconds, countDownStatus]);
    return startButtonSources.map(status =>
        status !== CountdownStatus.RUNNING ? <button onClick={() => startCountdown()} disabled={computeOriginalSeconds() === 0}>START</button> : null
    );
}

function renderStopButton() {
    return countDownStatus.map(status =>
        status !== CountdownStatus.STOPPED ? <button onClick={() => stopCountdown()}>STOP</button> : null
    );
}

function renderCountdown() {
    return countDownStatus.map(status => status !== CountdownStatus.STOPPED ? (
        <div>
            {renderProgressCircle()}
        </div>
    ) : null);
}

function renderProgressCircle(): DataSource<JSX.IntrinsicElements> {
    return <ProgressCircle totalTime={computeOriginalSeconds()} status={countDownStatus} />;
}

function startCountdown() {
    countDownStatus.update(CountdownStatus.RUNNING);

    cancellationToken = new CancellationToken();

    let startTime: number;
    const totalTime = computeOriginalSeconds();
    cancellationToken.animationLoop(tickTime);

    function tickTime(time: number): void {
        if (startTime === undefined) {
            startTime = time;
        }

        const elapsedTime = time - startTime;
        const elapsedSeconds = elapsedTime / 1000;
        const remainingSeconds = Math.max(totalTime - elapsedSeconds + 1, 0);

        if (remainingSeconds === 0) {
            countDownStatus.update(CountdownStatus.STOPPED);
            cancellationToken.cancel();
        }
    }
}

function stopCountdown() {
    countDownStatus.update(CountdownStatus.STOPPED);
    cancellationToken.cancel();
}

function computeOriginalSeconds() {
    return Number(originalMinutes.value) * 60 + Number(originalSeconds.value);
}

function handleMinutesChange(value: string): void {
    let minutes: string = value;
    if (Number(minutes) > 23) {
        minutes = '23';
    }
    originalMinutes.update(minutes);
}

function handleSecondsChange(value: string): void {
    let seconds: string = value;
    if (Number(seconds) > 59) {
        seconds = '59';
    }
    originalSeconds.update(seconds);
}

Aurum.attach(
    <div class="root">
        {renderInputs()}
        {renderStartButton()}
        {renderStopButton()}
        {renderCountdown()}
    </div>,
    document.body
);
