"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require("ng2-file-upload");
var URL = '/upload/upload.php';
var AdminMainComponent = (function () {
    function AdminMainComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    AdminMainComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    AdminMainComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    AdminMainComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-main',
            templateUrl: './admin-main.component.html',
            styleUrls: ['./admin-main.component.css']
        })
    ], AdminMainComponent);
    return AdminMainComponent;
}());
exports.AdminMainComponent = AdminMainComponent;
