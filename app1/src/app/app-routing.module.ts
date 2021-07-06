import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:'auth', loadChildren: ()=>import('./auth/auth.module').then(m=> m.AuthModule)
  },{
    path:'home', loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
