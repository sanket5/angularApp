

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
    {
        path:'', component:HomeComponent,children:[
            {
                path:'dashboard', component: DashboardComponent
            },
            {
                path:'about', component:AboutComponent
            },{
                path:'team', component: TeamComponent
            },
            {
                path:'', redirectTo:'dashboard', pathMatch:'full'
            }
        ]
    }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
