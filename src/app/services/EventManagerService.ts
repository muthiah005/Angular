import {EventEmitter, Injectable} from '@angular/core';
import { IUIBase } from '../core/ui/IUIBase';
 


@Injectable()
export class EventManagerService {

    private listeners = {};
    private subject = new EventEmitter();
    private eventObserver = this.subject.asObservable();


    constructor() {

        this.eventObserver.subscribe(({name,args})=>{
             if(this.listeners[name])
             {
                 for(let listener of this.listeners[name])
                 {
                     listener.callback(args);
                 }
             }
        })

    }



    registerEvent(eventName:string,eventListener:IUIBase,callback:any) {

        if(!this.listeners[eventName])
             this.listeners[eventName] = [];

         let eventExist = false;
         for(let listener of this.listeners[eventName])
         {

             if(listener.eventListener.constructor.name==eventListener.constructor.name)
             {
                 eventExist = true;
                 break;
             }
         }

        if(!eventExist)
        {
             this.listeners[eventName].push({eventListener,callback});
        }
    }

    unregisterEvent(eventName:string,eventListener:IUIBase)  {

        if(this.listeners[eventName])
        {
            for(let i = 0; i<this.listeners[eventName].length;i++)
            {

                if(this.listeners[eventName][i].eventListener.constructor.name==eventListener.constructor.name)
                {
                    this.listeners[eventName].splice(i, 1);
                    break;
                }
            }
        }


    }


    emit(name:string,...args:any[])  {
        this.subject.next({name,args});
    }
}

