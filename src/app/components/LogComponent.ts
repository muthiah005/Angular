import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';

@Component({
    selector:'log',
    templateUrl:'../views/components/log.html',
    styleUrls:['../views/components/log.scss']
})


export class  LogComponent extends UIBase   {
    constructor(protected eventManager:EventManagerService)   {
        super(eventManager)
    }

    ngOnInit()  {
        console.log('Log Com');
    }
}