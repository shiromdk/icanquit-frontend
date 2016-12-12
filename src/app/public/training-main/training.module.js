"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_page_component_1 = require("./training-public-components/login-page/login-page.component");
var training_main_component_1 = require("./training-main.component");
var protected_training_main_component_1 = require("./training-protected-components/protected-training-main/protected-training-main.component");
var training_routing_1 = require("./training.routing");
var forms_1 = require("@angular/forms");
var training_landing_page_component_1 = require('./training-public-components/training-landing-page/training-landing-page.component');
var protected_videolist_component_1 = require('./training-protected-components/protected-videolist/protected-videolist.component');
var protected_documentlist_component_1 = require('./training-protected-components/protected-documentlist/protected-documentlist.component');
var protected_training_start_component_1 = require('./training-protected-components/protected-training-start/protected-training-start.component');
var ng2_pagination_1 = require('ng2-pagination');
var pager_service_1 = require("../../services/pager.service");
var TrainingModule = (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        core_1.NgModule({
            declarations: [
                training_main_component_1.TrainingMainComponent,
                protected_training_main_component_1.ProtectedTrainingMainComponent,
                login_page_component_1.LoginPageComponent,
                training_landing_page_component_1.TrainingLandingPageComponent,
                protected_videolist_component_1.ProtectedVideolistComponent,
                protected_documentlist_component_1.ProtectedDocumentlistComponent,
                protected_training_start_component_1.ProtectedTrainingStartComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                training_routing_1.trainingRouting,
                ng2_pagination_1.Ng2PaginationModule
            ],
            providers: [
                pager_service_1.PagerService
            ],
            bootstrap: []
        })
    ], TrainingModule);
    return TrainingModule;
}());
exports.TrainingModule = TrainingModule;
