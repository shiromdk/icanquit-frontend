import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AboutMainComponent} from "./about-main.component";
import { AboutProjectComponent } from './about-project/about-project.component';
import { AboutAimComponent } from './about-aim/about-aim.component';
import { AboutNrtComponent } from './about-nrt/about-nrt.component';
import { AboutStudymethodsComponent } from './about-studymethods/about-studymethods.component';
import { AboutExpectedOutcomesComponent } from './about-expected-outcomes/about-expected-outcomes.component';
import { AboutFundingComponent } from './about-funding/about-funding.component';
import { AboutParticipationComponent } from './about-participation/about-participation.component';
import {aboutRouting} from "./about.routing";


@NgModule({
  declarations:[
    AboutMainComponent,
    AboutProjectComponent,
    AboutAimComponent,
    AboutNrtComponent,
    AboutStudymethodsComponent,
    AboutExpectedOutcomesComponent,
    AboutFundingComponent,
    AboutParticipationComponent
  ],
  imports:[
    CommonModule,
    aboutRouting
  ],
  providers:[

  ],
  bootstrap:[

  ]
})

export class AboutModule {}
