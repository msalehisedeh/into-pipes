import { PipeComponent } from '../interfaces/pipe.component';
export declare class EmailComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    transform(source: any, args: any[]): void;
}
