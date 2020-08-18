import {
    Aurum,
    CancellationToken,
    DataSource,
    Renderable,
    Switch,
    SwitchCase
} from 'aurumjs';
import '../scss/main.scss';
import { CountdownStatus } from './countdown_status';
import { PageFooter } from './page_footer/page_footer';
import { ProgressCircle } from './progress_circle/progress_circle';

const originalMinutes = new DataSource('00');
const originalSeconds = new DataSource('00');
const countDownStatus = new DataSource(CountdownStatus.STOPPED);

let cancellationToken: CancellationToken;

function renderInputs(): DataSource<Renderable> {
    return (
        <div class="inputs">
            <input
                type="text"
                value={originalMinutes}
                onInput={(e) =>
                    handleMinutesChange((e.target as HTMLInputElement).value)
                }
                class="minutes-input"
            />
            <span class="input-unit">min</span>
            <input
                type="text"
                value={originalSeconds}
                onInput={(e) =>
                    handleSecondsChange((e.target as HTMLInputElement).value)
                }
                class="seconds-input"
            />
            <span class="input-unit">s</span>
        </div>
    );
}

function renderStartButton(): DataSource<Renderable> {
    return (
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
    );
}

function renderStopButton(): DataSource<Renderable> {
    return <button onClick={() => stopCountdown()}>STOP</button>;
}

function Countdown(): DataSource<Renderable> {
    return (
        <div>
            <ProgressCircle
                totalTime={computeOriginalSeconds()}
                status={countDownStatus}
            />
        </div>
    );
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
        <Switch state={countDownStatus}>
            <SwitchCase when={CountdownStatus.STOPPED}>
                {renderInputs()}
                {renderStartButton()}
            </SwitchCase>
            <SwitchCase when={CountdownStatus.RUNNING}>
                <Countdown></Countdown>
                {renderStopButton()}
            </SwitchCase>
        </Switch>
        <PageFooter />
    </div>,
    document.body
);
