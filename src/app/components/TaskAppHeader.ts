
import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';
import { Router } from '@angular/router';
import { EventLabels } from '../events/EventLabels';

@Component({
    selector:'task-app-header',
    templateUrl:'../views/components/header.html',
    styleUrls:['../views/components/header.scss']
})


export class  TaskAppHeader extends UIBase   {

   public userLoggedIn:boolean = false;
   public userInfo:Object  = {}

    constructor(protected eventManager:EventManagerService,
        private router:Router)   {
        super(eventManager);
        this.eventHandlers();
    }

    eventHandlers(){
      this.eventManager.registerEvent(EventLabels.EVENT_USER_LOGGEDIN, this, (args) => {
        this.userLoggedIn = true;
        this.userInfo = args[0];
        console.debug(this.userInfo)

      });
  
      this.listeners.push(EventLabels.EVENT_USER_LOGGEDIN);
    }

    ngOnInit()  {
        console.log('dashboard');
    }

    public userLogout() {
        this.router.navigate(["home"]);
        this.userLoggedIn = false;
    }
}

