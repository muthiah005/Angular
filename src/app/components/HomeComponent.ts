import { Component } from "@angular/core";
import { UIBase } from '../core/ui/UIBase';
import { EventManagerService } from '../services/EventManagerService';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';
import { EventLabels } from '../events/EventLabels';

@Component({
    selector:'home',
    templateUrl:'../views/components/home.html',
    styleUrls:['../views/components/home.scss']
})


export class  HomeComponent extends UIBase   {

    public loginForm:FormGroup;
    public isValid : boolean = true;

    constructor(protected eventManager:EventManagerService,
        private formBuilder :FormBuilder,
        public dataService:DataService,
        private router:Router
     )   {
        super(eventManager);
        this.createLoginForm();
    }


   

    private createLoginForm(){
        this.loginForm = this.formBuilder.group({
            email : new FormControl('',[Validators.required, Validators.email]),
            password : new FormControl('',[Validators.required])
        })
    }

    get f() { return this.loginForm.controls; }

    public login(){
       
        let postData  = {'email':this.loginForm.value.email,'password':this.loginForm.value.password};
        this.dataService.loginUser(postData).subscribe(
            (res)=>{
                if(res != null){
                   console.debug(res);
                   this.router.navigate(["dashboard"]);
                   this.eventManager.emit(EventLabels.EVENT_USER_LOGGEDIN,res);
                }else{
                    this.isValid = false;
                }
                
            },
            (error)=>{
                this.isValid = false;
            },
            ()=>{ 
                console.debug("completed");
            }
        )
    }

    ngOnInit()  {
        console.log('homecom');
    }
}