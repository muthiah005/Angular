import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';

@Component({
    selector:'product',
    templateUrl:'../views/components/product.html',
    styleUrls:['../views/components/product.scss']
})


export class  ProductConfigComponent extends UIBase   {
    public TabMenuItems = [{"id":1,"name":"System Configuration"},{"id":2,"name":"Block List"},{"id":3,"name":"White List"},{"id":4,"name":"Special Number"}]
    constructor(protected eventManager:EventManagerService)   {
        super(eventManager)
    }

    ngOnInit()  {
        console.log('product');
    }
}