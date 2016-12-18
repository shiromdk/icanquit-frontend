"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var LoginPageComponent = (function () {
    function LoginPageComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.failerror = false;
        this.errorMessage = '';
    }
    LoginPageComponent.prototype.signinUser = function (user) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword("s1d76j3fckqur5uhjtgj67996nwhz623@email.email", user.password).then(function (userInfo) {
            _this.router.navigate(['/trainingmain']);
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        }).then(function () {
            _this.failerror = true;
        });
    };
    LoginPageComponent.prototype.onSignin = function () {
        this.signinUser(this.loginForm.value);
    };
    LoginPageComponent.prototype.ngOnDestroy = function () {
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            password: ['', forms_1.Validators.required],
        });
    };
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: 'app-login-page',
            templateUrl: 'login-page.component.html',
            styleUrls: ['login-page.component.css']
        })
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
