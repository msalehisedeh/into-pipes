
export interface PipeComponent {
	source: any;
	
	transform(content: any, args?: any[]);
}