import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';

@Component({
    selector:'user',
    templateUrl:'../views/components/user.html',
    styleUrls:['../views/components/user.scss']
})


export class  UserAccountsComponent extends UIBase   {
    constructor(protected eventManager:EventManagerService)   {
        super(eventManager)
    }

    ngOnInit()  {
        console.log('user acc');
    }
}