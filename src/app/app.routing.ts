import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./public/homepage/homepage.component";
import {AboutMainComponent} from "./public/about-main/about-main.component";
import {ProfileMainComponent} from "./public/profile-main/profile-main.component";
import {ContactUsComponent} from "./public/contact-us/contact-us.component";
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";
import {AuthGuard} from "./services/auth.guard";


/** Training Routes */


/** Main Routes  */
const APP_ROUTES:Routes = [
  {path:'',component:HomepageComponent},
  {path:'about',component:AboutMainComponent},
  {path:'profile',component:ProfileMainComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'admin',component:AdminMainComponent,canActivate:[AuthGuard]},
  {path:'trainingmain', loadChildren:'app/public/training-main/training.module#TrainingModule'}
];



export const routing = RouterModule.forRoot(APP_ROUTES);
