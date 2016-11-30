

import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./public/homepage/homepage.component";

const APP_ROUTES:Routes = [
  {path:'',component:HomepageComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);
