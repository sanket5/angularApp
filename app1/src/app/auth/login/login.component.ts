import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserRequest } from '../../shared/models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error:string
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }
  ngOnInit(): void {
    this.createForm()
    this.loginForm.valueChanges.subscribe(()=>{
      this.error =''
    })
  }

  createForm(){
      this.loginForm =this.fb.group({
        id: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
      })      
  }

  onLogin(){
    console.log('in login');
    
    if(this.loginForm.invalid){
      this.error = 'Please enter login credentials to continue'
      return false
    }
    let payload = new UserRequest()
    payload.client_id = 'iJavaScript'
    payload.user = this.loginForm.value
    this.authService.login(this.loginForm.value.id, this.loginForm.value.password)
      .subscribe(res=>{        
        if(!res.success){
          this.error = 'Invalid User Credentials!'
          return false
        }
        this.router.navigate(['/home'])
      },(error=>{
        console.log('Databas not found, Allowing user to log in');
        this.router.navigate(['/home'])
      }))
  }

}
