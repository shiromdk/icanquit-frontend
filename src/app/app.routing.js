"use strict";
var router_1 = require("@angular/router");
var homepage_component_1 = require("./public/homepage/homepage.component");
var about_main_component_1 = require("./public/about-main/about-main.component");
var profile_main_component_1 = require("./public/profile-main/profile-main.component");
var contact_us_component_1 = require("./public/contact-us/contact-us.component");
var admin_main_component_1 = require("./admin/admin-main/admin-main.component");
var auth_guard_1 = require("./services/auth.guard");
/** Training Routes */
/** Main Routes  */
var APP_ROUTES = [
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'about', component: about_main_component_1.AboutMainComponent },
    { path: 'profile', component: profile_main_component_1.ProfileMainComponent },
    { path: 'contactus', component: contact_us_component_1.ContactUsComponent },
    { path: 'admin', component: admin_main_component_1.AdminMainComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'trainingmain', loadChildren: 'app/public/training-main/training.module#TrainingModule' }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
