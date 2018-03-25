import { PipeComponent } from '../interfaces/pipe.component';
export declare class RatingComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    value: number[];
    float: number;
    transform(source: any, args: any[]): void;
}
