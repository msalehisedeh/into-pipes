import { PipeComponent } from '../interfaces/pipe.component';
export declare class LinkComponent implements PipeComponent {
    source: string;
    title: string;
    target: string;
    transform(source: any, args: any[]): void;
}
