

import {Routes, RouterModule} from "@angular/router";
import {AboutAimComponent} from "./about-aim/about-aim.component";
import {AboutNrtComponent} from "./about-nrt/about-nrt.component";
import {AboutProjectComponent} from "./about-project/about-project.component";
import {AboutStudymethodsComponent} from "./about-studymethods/about-studymethods.component";
import {AboutExpectedOutcomesComponent} from "./about-expected-outcomes/about-expected-outcomes.component";
import {AboutFundingComponent} from "./about-funding/about-funding.component";
import {AboutParticipationComponent} from "./about-participation/about-participation.component";
import {AboutMainComponent} from "./about-main.component";

const ABOUT_ROUTES: Routes =[
  {path:'about',component:AboutMainComponent,children:[
    {path:'about-project',component:AboutProjectComponent},
    {path:'about-nrt',component:AboutNrtComponent},
    {path:'about-aim',component:AboutAimComponent},
    {path:'about-study-methods',component:AboutStudymethodsComponent},
    {path:'about-expected-outcomes',component:AboutExpectedOutcomesComponent},
    {path:'about-funding',component:AboutFundingComponent},
    {path:'about-participation',component:AboutParticipationComponent}
  ]},



];

export const aboutRouting = RouterModule.forChild(ABOUT_ROUTES);
