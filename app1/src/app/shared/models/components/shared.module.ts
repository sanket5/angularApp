import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
    declarations: [
        CardComponent
      ],
      imports: [
        CommonModule,

      ],
      providers: [],
      exports:[
          CardComponent
      ]
})

export class SharedModule{

}