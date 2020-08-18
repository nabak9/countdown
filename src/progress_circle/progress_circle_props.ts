import { DataSource } from 'aurumjs';
import { CountdownStatus } from '../countdown_status';

export interface ProgressCircleProps {
    totalTime: number;
    status: DataSource<CountdownStatus>;
}
