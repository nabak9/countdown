import { Aurum, CancellationToken, DataSource, Renderable } from 'aurumjs';
import '../scss/main.scss';
import { CountdownStatus } from './countdown_status';
import { PageFooter } from './page_footer/page_footer';
import { ProgressCircle } from './progress_circle/progress_circle';

const originalMinutes = new DataSource('00');
const originalSeconds = new DataSource('00');
const countDownStatus = new DataSource(CountdownStatus.STOPPED);

let cancellationToken: CancellationToken;

function renderInputs(): DataSource<Renderable> {
    return countDownStatus.map((status) =>
        status === CountdownStatus.STOPPED ? (
            <div class="inputs">
                <input
                    type="text"
                    value={originalMinutes}
                    onInput={(e) =>
                        handleMinutesChange(
                            (e.target as HTMLInputElement).value
                        )
                    }
                    class="minutes-input"
                />
                <span class="input-unit">min</span>
                <input
                    type="text"
                    value={originalSeconds}
                    onInput={(e) =>
                        handleSecondsChange(
                            (e.target as HTMLInputElement).value
                        )
                    }
                    class="seconds-input"
                />
                <span class="input-unit">s</span>
            </div>
        ) : null
    );
}

function renderStartButton(): DataSource<Renderable> {
    return countDownStatus.map((status) =>
        status !== CountdownStatus.RUNNING ? (
            <button
                onClick={() => startCountdown()}
                disabled={DataSource.fromMultipleSources([
                    originalMinutes,
                    originalSeconds
                ])
                    .map(() => computeOriginalSeconds() === 0)
                    .withInitial(computeOriginalSeconds() === 0)}
            >
                START
            </button>
        ) : null
    );
}

function renderStopButton(): DataSource<Renderable> {
    return countDownStatus.map((status) =>
        status !== CountdownStatus.STOPPED ? (
            <button onClick={() => stopCountdown()}>STOP</button>
        ) : null
    );
}

function renderCountdown(): DataSource<Renderable> {
    return countDownStatus.map((status) =>
        status !== CountdownStatus.STOPPED ? (
            <div>{renderProgressCircle()}</div>
        ) : null
    );
}

function renderProgressCircle(): DataSource<Renderable> {
    return (
        <ProgressCircle
            totalTime={computeOriginalSeconds()}
            status={countDownStatus}
        />
    );
}

function renderFooter(): DataSource<Renderable> {
    return <PageFooter />;
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
    let minutes: string = normalizeMinutesOrSeconds(value);
    originalMinutes.update(minutes);
}

function handleSecondsChange(value: string): void {
    let seconds: string = normalizeMinutesOrSeconds(value);
    originalSeconds.update(seconds);
}

function normalizeMinutesOrSeconds(value: string): string {
    let normalizedValue: string = value;
    const oneTwoDigitsFound = new RegExp(/^\d{1,2}$/).test(normalizedValue);
    if (!oneTwoDigitsFound) {
        normalizedValue = '00';
    } else if (new RegExp(/^\d{2}$/).test(normalizedValue)) {
        if (!new RegExp(/^([0-5][0-9])$/).test(normalizedValue)) {
            normalizedValue = '59';
        }
    }
    return normalizedValue;
}

Aurum.attach(
    <div class="root">
        {renderInputs()}
        {renderStartButton()}
        {renderCountdown()}
        {renderStopButton()}
        {renderFooter()}
    </div>,
    document.body
);
