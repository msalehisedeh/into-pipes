import { PipeComponent } from '../interfaces/pipe.component';
export declare class SpanComponent implements PipeComponent {
    id: string;
    name: string;
    source: string;
    transform(source: any, args: any[]): void;
}
