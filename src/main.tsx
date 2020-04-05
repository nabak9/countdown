import { Aurum, DataSource, CancellationToken } from "aurumjs";
import "../scss/main.scss";
import { CountdownStatus } from "./countdown_status";

const originalMinutes = new DataSource("00");
const originalSeconds = new DataSource("00");
const countDownTime = new DataSource(undefined);
const countDownStatus = new DataSource(CountdownStatus.STOPPED);

let cancellationToken: CancellationToken;

function renderInputs(): DataSource<JSX.IntrinsicElements> {
    return countDownStatus.map((status) =>
        status === CountdownStatus.STOPPED ? (
            <div class="inputs">
                <input
                    initialValue={originalMinutes.value}
                    onChange={(e) => originalMinutes.update((e.target as HTMLInputElement).value)}
                    class="minutes-input"
                />
                <span class="input-unit">min</span>
                <input
                    initialValue={originalSeconds.value}
                    onChange={(e) => originalSeconds.update((e.target as HTMLInputElement).value)}
                    class="seconds-input"
                />
                <span class="input-unit">s</span>
            </div>
        ) : null
    );
}

function renderStartButton() {
    return countDownStatus.map(status =>
        status !== CountdownStatus.RUNNING ? <button onClick={() => startCountdown()}>START</button> : null
    );
}

function renderStopButton() {
    return countDownStatus.map(status =>
        status !== CountdownStatus.STOPPED ? <button onClick={() => stopCountdown()}>STOP</button> : null
    );
}

function renderCountdown(): JSX.IntrinsicElements {
    return (
        <div class="countdown">
            {renderMinutes()}
            {countDownTime.map((time) => (time !== undefined ? <span>:</span> : null))}
            {renderSeconds()}
        </div>
    );
}

function renderMinutes(): DataSource<string> {
    return countDownTime.map((time) => (time !== undefined ? `${Math.floor(time / 60)}`.padStart(2, "0") : null));
}

function renderSeconds(): DataSource<string> {
    return countDownTime.map((time) =>
        time !== undefined ? `${Math.floor(time - Math.floor(time / 60) * 60)}`.padStart(2, "0") : null
    );
}

function startCountdown() {
    countDownStatus.update(CountdownStatus.RUNNING);
    countDownTime.update(computeOriginalMillis());

    cancellationToken = new CancellationToken();
    cancellationToken.setInterval(() => {
        countDownTime.update(countDownTime.value - 1);
        if (countDownTime.value === 0) {
            cancellationToken.cancel();
        }
    }, 1000);
}

function stopCountdown() {
    countDownStatus.update(CountdownStatus.STOPPED);
    cancellationToken.cancel();
}

function computeOriginalMillis() {
    return Number(originalMinutes.value) * 60 + Number(originalSeconds.value);
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
