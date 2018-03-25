
export interface PipeComponent {
	source: any;
	id: string;
	name: string;
	  
	transform(content: any, args?: any[]);
}