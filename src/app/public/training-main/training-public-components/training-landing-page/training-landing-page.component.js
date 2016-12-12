"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TrainingLandingPageComponent = (function () {
    function TrainingLandingPageComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.isAuthenticated = false;
        this.subscription = this.authService.isAuthenticated().subscribe(function (authStatus) { return _this.isAuthenticated = authStatus; });
        this.sources = [
            {
                src: "..\/..\/..\/assets\/videos\/intro.mp4",
                type: "video/mp4"
            }
        ];
    }
    TrainingLandingPageComponent.prototype.ngOnInit = function () {
        this.isAuth();
    };
    TrainingLandingPageComponent.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    TrainingLandingPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TrainingLandingPageComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    TrainingLandingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-training-landing-page',
            templateUrl: './training-landing-page.component.html',
            styleUrls: ['./training-landing-page.component.css']
        })
    ], TrainingLandingPageComponent);
    return TrainingLandingPageComponent;
}());
exports.TrainingLandingPageComponent = TrainingLandingPageComponent;
