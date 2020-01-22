export class  LoadingBarEvent {
    constructor(public type:LoadingBarEventType, public value:any) {}
}
export enum  LoadingBarEventType {
    INDETERMINATE,
    DETERMINATE,
    BUFFER,
    QUERY,
    VISIBLE,
    RELOAD
}