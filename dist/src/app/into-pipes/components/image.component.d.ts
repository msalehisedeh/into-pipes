import { PipeComponent } from '../interfaces/pipe.component';
export declare class ImageComponent implements PipeComponent {
    source: string;
    id: string;
    name: string;
    width: string;
    height: string;
    alt: string;
    transform(source: any, args: any[]): void;
}
