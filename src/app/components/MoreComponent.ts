import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';

@Component({
    selector:'log',
    templateUrl:'../views/components/more.html',
    styleUrls:['../views/components/more.scss']
})


export class  MoreComponent extends UIBase   {
    constructor(protected eventManager:EventManagerService)   {
        super(eventManager)
    }

    ngOnInit()  {
        console.log('more');
    }
}