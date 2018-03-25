import { PipeComponent } from '../interfaces/pipe.component';
export declare class AddressComponent implements PipeComponent {
    url: string;
    source: string;
    id: string;
    name: string;
    addr1: string;
    addr2: string;
    transform(source: any, args: any[]): void;
}
