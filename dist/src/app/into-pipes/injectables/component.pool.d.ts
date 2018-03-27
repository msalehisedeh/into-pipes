export declare class ComponentPool {
    private registeredComponents;
    private registeredServices;
    constructor();
    registerComponent(name: any, component: any): void;
    registeredComponent(name: any): any;
    registerServiceForComponent(name: any, service: any): void;
    registeredServiceForComponent(name: any): any;
}
