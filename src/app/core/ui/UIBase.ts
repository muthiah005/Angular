import { OnInit, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { IUIBase } from './IUIBase';
import { environment } from '../../../environments/environment';
import { EventManagerService } from '../../services/EventManagerService';

export class UIBase implements IUIBase, OnInit, OnChanges {

    protected env = environment;
    protected id: number = 0;
    protected data: any;
    protected listeners: Array<string>;

    constructor(protected eventManager: EventManagerService) {
        this.listeners = new Array<string>();
    }

    updateUI(data) {
        this.data = data;
    }

    ngOnDestroy(): void {
        for (let items in this.listeners) {
            this.eventManager.unregisterEvent(items, this);
        }
    }

    public ngOnInit() {

    }
    public ngOnChanges(changes: SimpleChanges) {

    }

    public get classname() {
        return (<any>this).constructor.name;
    }

    get version() {
        return ''
    }

}