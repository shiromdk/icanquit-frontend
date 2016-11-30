import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./public/homepage/homepage.component";
import {AboutMainComponent} from "./public/about-main/about-main.component";
import {ProfileMainComponent} from "./public/profile-main/profile-main.component";
import {ContactUsComponent} from "./public/contact-us/contact-us.component";
import {TrainingMainComponent} from "./public/training-main/training-main.component";
import {LoginPageComponent} from "./public/training-main/login-page/login-page.component";
import {ProtectedTrainingMainComponent} from "./protected/protected-training-main/protected-training-main.component";
import {AuthGuard} from "./services/auth.guard";

/** Training Routes */


/** Main Routes  */
const APP_ROUTES:Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutMainComponent},
  {path:'profile',component:ProfileMainComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'trainingmain',component:TrainingMainComponent},
  {path:'trainingmain/signin',component:LoginPageComponent},
  {path:'trainingmain/protectedtrainingmain',component:ProtectedTrainingMainComponent,canActivate:[AuthGuard]}
];



export const routing = RouterModule.forRoot(APP_ROUTES);
