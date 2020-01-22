import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoadingBarEvent, LoadingBarEventType } from '../events/LoadingBarEvent';

@Injectable()
export class LoadingBarService {

    private eventSource: Subject<LoadingBarEvent> = new Subject<LoadingBarEvent>();
    public events: Observable<LoadingBarEvent> = this.eventSource.asObservable();

    private _progress: number = 0;
    private _visible: boolean = true;
    private _mode: String = '';

    constructor() { }


    private emitEvent(event: LoadingBarEvent) {
      
        if (this.eventSource) {
            this.eventSource.next(event);
        }
    }

    stop() {
        this.emitEvent(new LoadingBarEvent(LoadingBarEventType.VISIBLE, false));
    } 
    start(type: number = 0, progress: number = 0) {
        switch (type) {
            case 0:
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.INDETERMINATE, true));
                break;
            case 1:
                this._progress = progress;
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.DETERMINATE, progress));
                break;
            case 2:
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.BUFFER, true));
                break;
            case 3:
                this.emitEvent(new LoadingBarEvent(LoadingBarEventType.QUERY, true));
                break;
        }

    }

 
   

    reload()   {
        console.log("RELOAD")
        this.emitEvent(new LoadingBarEvent(LoadingBarEventType.RELOAD, false));
    }

}

export function isPresent(obj: any) {
    return obj !== undefined && obj !== null;
}