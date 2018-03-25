import { PipeComponent } from '../interfaces/pipe.component';
export declare class FontComponent implements PipeComponent {
    font: string;
    location: string;
    source: string;
    id: string;
    name: string;
    content: string;
    transform(source: any, args: any[]): void;
}