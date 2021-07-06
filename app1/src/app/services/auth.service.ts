import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    login(userid, password): Observable<boolean>{        
        return new Observable<boolean>((observer)=>{
            let response:boolean= false
            if (userid=="validuser" && password =='validpassword'){
                response = true
            }
            setTimeout(() => {
                return observer.next(response)
            }, 800);
    
        })
       
    }
}