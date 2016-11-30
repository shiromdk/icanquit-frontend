import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./public/homepage/homepage.component";
import {AboutMainComponent} from "./public/about-main/about-main.component";
import {ProfileMainComponent} from "./public/profile-main/profile-main.component";
import {ContactUsComponent} from "./public/contact-us/contact-us.component";
import {TrainingMainComponent} from "./public/training-main/training-main.component";

const APP_ROUTES:Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutMainComponent},
  {path:'profile',component:ProfileMainComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'trainingmain',component:TrainingMainComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
