
import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';
import { TabService } from '../services/TabService';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataService } from '../services/DataService';

@Component({
    selector:'tab-items',
    templateUrl:'../views/components/tab.html',
    styleUrls:['../views/components/tab.scss']
})


export class TabComponent extends UIBase   {
    public TabMenuItems:Array<any> = [];
    public activeTab:Object = {};
    public tabForm:FormGroup;

    
    constructor(protected eventManager:EventManagerService,
        private formBuilder :FormBuilder,
        public tabService:TabService,
        public dataService:DataService
        ){
       super(eventManager)
    }

 
    ngOnInit()  {
        this.TabMenuItems = this.tabService.getAllTabs();
        console.log('tab',this.TabMenuItems);
        this.setTabActive(this.TabMenuItems[0]);
        this.createTabForm();
        this.getAllTabs();
    }

    private createTabForm(){
        this.tabForm = this.formBuilder.group({
            name : new FormControl('',[Validators.required]),
            description : new FormControl('',[Validators.required])
        })
    }

    /* save new tab info */
    public saveTabFormInfo(){
        console.debug(this.tabForm.value);
        let postData  = {'name':this.tabForm.value.name,'description':this.tabForm.value.description};
        this.dataService.saveTabInfo(postData).subscribe(
            (res)=>{
                if(res != null){
                   console.debug(res);
                   this.showSuccessInfo();
                }else{
                   console.debug("nothing");
                }
            },
            (error)=>{
                console.debug("error in save",error);
            },
            ()=>{ 
                console.debug("completed");
            }
        )

       
    }

    /* get all the tabs created  */
    private getAllTabs() {
        this.dataService.getAllTabs().subscribe(
            (res)=>{
                if(res != null){
                   console.debug("All tabs",res);
                }else{
                   console.debug("nothing");
                }
            },
            (error)=>{
                console.debug("error in retrive",error);
            },
            ()=>{ 
                console.debug("completed");
            }
        )
    }

    private showSuccessInfo(){
        Swal.fire(
            'Data Added',
            'Tab info added',
            'success'
          )
        this.tabForm.reset();
    }

    setTabActive(item){
        this.activeTab  = item;
    }

    openTab(item){
        this.activeTab  = item;
        console.debug("item",item);
    }

    addNewTab() {
        
    }
}



