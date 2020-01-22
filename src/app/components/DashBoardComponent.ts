import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';
import { Router } from '@angular/router';

@Component({
    selector:'dashboard',
    templateUrl:'../views/components/dashboard.html',
    styleUrls:['../views/components/dashboard.scss']
})


export class  DashBoardComponent extends UIBase   {
    constructor(protected eventManager:EventManagerService,
        private router:Router)   {
        super(eventManager)
    }

    ngOnInit()  {
        console.log('dashboard');
    }

   
}