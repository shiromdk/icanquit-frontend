import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./public/homepage/homepage.component";
import {AboutMainComponent} from "./public/about-main/about-main.component";
import {ProfileMainComponent} from "./public/profile-main/profile-main.component";
import {ContactUsComponent} from "./public/contact-us/contact-us.component";
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginPageComponent} from "./public/login-page/login-page.component";
import {ProfileLandingComponent} from "./public/profile-main/profile-landing.component";


/** Training Routes */


/** Main Routes  */
const APP_ROUTES:Routes = [
  {path:'',component:HomepageComponent},
  {path:'signin',component:LoginPageComponent},
  {path:'about',component:AboutMainComponent},
  {path:'profile',component:ProfileMainComponent,children:[
    {path:'',component:ProfileLandingComponent}
  ]},
  {path:'contactus',component:ContactUsComponent},
  {path:'admin',component:AdminMainComponent,canActivate:[AuthGuard]},
  {path:'trainingmain', loadChildren:'app/public/training-main/training.module#TrainingModule'}
];



export const routing = RouterModule.forRoot(APP_ROUTES);
