"use strict";
var router_1 = require("@angular/router");
var training_main_component_1 = require("./training-main.component");
var login_page_component_1 = require("./training-public-components/login-page/login-page.component");
var protected_training_main_component_1 = require("./training-protected-components/protected-training-main/protected-training-main.component");
var auth_guard_1 = require("../../services/auth.guard");
var training_landing_page_component_1 = require("./training-public-components/training-landing-page/training-landing-page.component");
var protected_training_start_component_1 = require("./training-protected-components/protected-training-start/protected-training-start.component");
var protected_videolist_component_1 = require("./training-protected-components/protected-videolist/protected-videolist.component");
var TRAINING_ROUTES = [
    { path: 'trainingmain', component: training_main_component_1.TrainingMainComponent, children: [
            { path: '', component: training_landing_page_component_1.TrainingLandingPageComponent },
            { path: 'signin', component: login_page_component_1.LoginPageComponent },
            { path: 'protectedtrainingmain', component: protected_training_main_component_1.ProtectedTrainingMainComponent, canActivate: [auth_guard_1.AuthGuard], children: [
                    { path: '', component: protected_training_start_component_1.ProtectedTrainingStartComponent, canActivate: [auth_guard_1.AuthGuard] },
                    { path: 'training-videos', component: protected_videolist_component_1.ProtectedVideolistComponent, canActivate: [auth_guard_1.AuthGuard] }
                ] }
        ] }
];
exports.trainingRouting = router_1.RouterModule.forChild(TRAINING_ROUTES);
