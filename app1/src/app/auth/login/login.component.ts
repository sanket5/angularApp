import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  }

  createForm(){
      this.loginForm =this.fb.group({
        userId: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
      })      
  }

  onLogin(){
    console.log('in login');
    
    if(this.loginForm.invalid){
      this.error = 'Please enter login credentials to continue'
      return false
    }
    this.authService.login(this.loginForm.value.userId, this.loginForm.value.password)
      .subscribe(res=>{
        console.log(res);
        
        if(!res){
          this.error == 'Invalid User Credentials!'
          return false
        }
        this.router.navigate(['/home'])
      })

    
  }

}
