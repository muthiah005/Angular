import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TabService {
    tabs: ITab[] = [];
    tabItems: ITab[] = [{id:1,name:"System Configuration"},
    {id:2,name:"Block List"},
    {id:3,name:"White List"},
    {id:4,name:"Special Number"}]
    constructor()   { }


    public getAllTabs() {
        return this.tabItems;
    }

    /*  maximum tab allowd is 5 */
    public addNewTab(item)  {
        if(this.tabItems.length <= 5){
            this.tabItems.push(item);
        }
    }

    /** pass the tab item and remove */
    public removeTabItem(item){
        let index = this.tabItems.indexOf(item);
        this.tabItems.splice(index,1)
    }

}

export interface ITab {
    id: number;
    name: string;
}