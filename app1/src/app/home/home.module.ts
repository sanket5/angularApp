import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";


@NgModule({
    declarations: [
            HomeComponent,
            DashboardComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
      ],
      providers: [],
})

export class HomeModule{

}