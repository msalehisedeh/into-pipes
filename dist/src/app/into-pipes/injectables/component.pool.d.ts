export declare class ComponentPool {
    private registeredComponents;
    private registeredServices;
    constructor();
    registerComponent(name: string, component: any): void;
    removeComponent(name: string): void;
    registeredComponent(name: string): any;
    registerServiceForComponent(name: string, service: any): void;
    removeServiceForComponent(name: string): void;
    registeredServiceForComponent(name: string): any;
}
