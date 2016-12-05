

import {Routes, RouterModule} from "@angular/router";
import {TrainingMainComponent} from "./training-main.component";
import {LoginPageComponent} from "./training-public-components/login-page/login-page.component";
import {ProtectedTrainingMainComponent} from "./training-protected-components/protected-training-main/protected-training-main.component";

import {AuthGuard} from "../../services/auth.guard";

import {TrainingLandingPageComponent} from "./training-public-components/training-landing-page/training-landing-page.component";
import {ProtectedTrainingStartComponent} from "./training-protected-components/protected-training-start/protected-training-start.component";
import {ProtectedVideolistComponent} from "./training-protected-components/protected-videolist/protected-videolist.component";

const TRAINING_ROUTES: Routes =[
  {path:'trainingmain',component:TrainingMainComponent,children:[
    {path:'',component:TrainingLandingPageComponent},
    {path:'signin',component:LoginPageComponent},
    {path:'protectedtrainingmain',component:ProtectedTrainingMainComponent,canActivate:[AuthGuard],children:[
      {path:'',component:ProtectedTrainingStartComponent,canActivate:[AuthGuard]},
      {path:'training-videos',component:ProtectedVideolistComponent,canActivate:[AuthGuard]}
    ]}
  ]}
];

export const trainingRouting = RouterModule.forChild(TRAINING_ROUTES);
