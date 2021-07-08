import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from "../shared/models/components/shared.module";


@NgModule({
    declarations: [
            HomeComponent,
            DashboardComponent,
            AboutComponent,
            TeamComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        SharedModule
      ],
      providers: [],
})

export class HomeModule{

}