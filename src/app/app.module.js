"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var homepage_component_1 = require('./public/homepage/homepage.component');
var app_routing_1 = require("./app.routing");
var header_component_1 = require('./public/header/header.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var profile_main_component_1 = require('./public/profile-main/profile-main.component');
var contact_us_component_1 = require('./public/contact-us/contact-us.component');
/** Service Imports */
var auth_service_1 = require("./services/auth.service");
var auth_guard_1 = require("./services/auth.guard");
/** Custom Module Imports */
var about_module_1 = require("./public/about-main/about.module");
var training_module_1 = require("./public/training-main/training.module");
var admin_main_component_1 = require('./admin/admin-main/admin-main.component');
var ng2_file_upload_1 = require('ng2-file-upload');
var admin_video_upload_component_1 = require('./admin/admin-video-upload/admin-video-upload.component');
var admin_doc_upload_component_1 = require('./admin/admin-doc-upload/admin-doc-upload.component');
var pager_service_1 = require("./services/pager.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                header_component_1.HeaderComponent,
                profile_main_component_1.ProfileMainComponent,
                contact_us_component_1.ContactUsComponent,
                admin_main_component_1.AdminMainComponent,
                admin_video_upload_component_1.AdminVideoUploadComponent,
                admin_doc_upload_component_1.AdminDocUploadComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_bootstrap_1.CollapseModule,
                about_module_1.AboutModule,
                training_module_1.TrainingModule,
                ng2_file_upload_1.FileUploadModule
            ],
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard, pager_service_1.PagerService,],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
