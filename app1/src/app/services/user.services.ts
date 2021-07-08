import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserRequest, UserResponse } from "../shared/models/user.model";

@Injectable({
    providedIn:'root'
})
export class UserService{

    constructor(private http: HttpClient){

    }

    getTeam(){        
        return new Observable<any>((observer)=>{
            this.http.get<[UserRequest]>('http://localhost:3000/teams').subscribe(res=>{
                console.log(res);
                let userResp ={
                    success:true,
                    data:res
                }
                observer.next(userResp)
                observer.complete() 
            })
        })
    }

    // getUser(){
    //     return new Observable<any>((observer)=>{
    //         this.http.get<[UserRequest]>('http://localhost:3000/user').subscribe(res=>{
    //             console.log(res);
    //             let userResp ={
    //                 success:true,
    //                 data:res
    //             }
    //             observer.next(userResp)
    //             observer.complete() 
    //         })
    //     })
    // }
}