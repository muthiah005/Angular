import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { LoadingBarService } from './LoadingBarService';
import { Constant } from '../utils/Constant';
import { map, catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService     {
    constructor(
        public http:HttpClient,
        public loadBarService:LoadingBarService) 
        {

        }

        public loginUser(data:any):Observable<any>{
            this.loadBarService.start();
            let url = Constant.API_DESTINATION + "authenticate";
            const request = this.http.post(url, data);
            const response = request
              .pipe(
                map(res => {
                  this.loadBarService.stop();
                  return res;
                })
              )
              .pipe(catchError((error: any) => Observable.throw(error)))
              .pipe(data => {
                return data;
              });
            return response;
        }


        public saveTabInfo(data:any):Observable<any>{
          this.loadBarService.start();
          let url = Constant.API_DESTINATION + "saveTabInfo";
          const request = this.http.post(url, data);
          const response = request
            .pipe(
              map(res => {
                this.loadBarService.stop();
                return res;
              })
            )
            .pipe(catchError((error: any) => Observable.throw(error)))
            .pipe(data => {
              return data;
            });
          return response;
      }


      public getAllTabs():Observable<any>{
        this.loadBarService.start();
        let url = Constant.API_DESTINATION + "getAllTabs";
        const request = this.http.get(url);
        const response = request
          .pipe(
            map(res => {
              this.loadBarService.stop();
              return res;
            })
          )
          .pipe(catchError((error: any) => Observable.throw(error)))
          .pipe(data => {
            return data;
          });
        return response;
    }
}