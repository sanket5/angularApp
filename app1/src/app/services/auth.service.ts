import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserRequest, UserResponse } from "../shared/models/user.model";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    constructor(private http: HttpClient){

    }

    login(userid, password){        
        return new Observable<any>((observer)=>{
            this.http.get<[UserRequest]>('http://localhost:3000/users').subscribe(res=>{
                console.log(res);
                let userResp = new UserResponse()
                res.forEach(user => {                    
                    if (user.user.id===userid && user.user.password ===password){
                        userResp.isUserAuthenticated = true
                        userResp.success = true
                        userResp.customerId= user.user.id
                        observer.next(userResp)
                        observer.complete()
                    }
                });
                userResp.success=false
                userResp.isUserAuthenticated=false
                observer.next(userResp)    
                observer.complete()       
            })
        })
       
    }
}