import { PipeComponent } from '../interfaces/pipe.component';
export declare class JsonComponent implements PipeComponent {
    source: string;
    transform(source: any, args: any[]): void;
}
