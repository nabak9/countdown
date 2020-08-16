import { Aurum, CancellationToken, Renderable } from 'aurumjs';
import { CountdownStatus } from '../countdown_status';
import { ProgressCircleProps } from './progress_circle_props';

export function ProgressCircle(props: ProgressCircleProps): Renderable {

    return <canvas width="250" height="250" onAttach={(canvasElement) => initCanvas(canvasElement)}></canvas>;

    function initCanvas(canvasElem: HTMLCanvasElement) {
        const cancellationToken: CancellationToken = new CancellationToken();
        props.status.listen(status => status === CountdownStatus.STOPPED && cancellationToken.cancel());

        const context = canvasElem.getContext('2d');
        context.lineCap = 'round';

        const x = canvasElem.width / 2;
        const y = canvasElem.height / 2;
        const radStart = computeRadAngle(0);
        const radEnd = computeRadAngle(360);
        const lineWidth = 10;
        const radius = canvasElem.width / 2 - lineWidth;

        let startTime: number;
        let degreesPerSecond: number;

        cancellationToken.animationLoop((time: number) => {
            context.clearRect(0, 0, canvasElem.width, canvasElem.height);

            context.beginPath();
            context.arc(x, y, radius, radStart, radEnd);
            context.strokeStyle = '#b1b1b1';
            context.lineWidth = lineWidth;
            context.stroke();

            if (startTime === undefined) {
                startTime = time;
                degreesPerSecond = 360 / props.totalTime;
            }

            const elapsedTime = time - startTime;
            const elapsedSeconds = elapsedTime / 1000;
            const remainingSeconds = Math.max(props.totalTime - elapsedSeconds + 1, 0);

            const progressDegrees = Math.min(elapsedSeconds * degreesPerSecond, 360);

            context.beginPath();
            context.strokeStyle = '#6eeeee';
            context.lineWidth = lineWidth;
            context.arc(x, y, radius, radStart, computeRadAngle(progressDegrees));
            context.stroke();

            const minutes = `${Math.floor(remainingSeconds / 60)}`.padStart(2, "0");
            const seconds = `${Math.floor(remainingSeconds - Math.floor(remainingSeconds / 60) * 60)}`.padStart(2, "0");

            context.fillStyle = '#e8e3e3';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = '60px Arial, Helvetica, sans-serif';
            context.fillText(`${minutes}:${seconds}`, x, y);

            if (progressDegrees === 360) {
                cancellationToken.cancel();
            }
        });
    };

    function computeRadAngle(degrees: number): number {
        return (Math.PI / 180) * (270 + degrees);
    }
}