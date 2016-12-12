"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var _ = require('underscore');
var ProtectedVideolistComponent = (function () {
    function ProtectedVideolistComponent(http, router) {
        this.http = http;
        this.router = router;
        // pager object
        this.pager = {};
    }
    ProtectedVideolistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../../../../../assets/video-sources.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            // set items to json response
            _this.allItems = data;
            console.log(data);
            // initialize to page 1
            _this.setPage(1);
        });
    };
    ProtectedVideolistComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.getPager(this.allItems.length, page);
        console.log(this.pager);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        console.log(this.pagedItems);
    };
    /**
    onCancel(){
      this.navigateBack();
    }
    private navigateBack(){
      this.router.navigate(['/trainingmain/protectedtrainingmain']);
    }*/
    ProtectedVideolistComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    ProtectedVideolistComponent = __decorate([
        core_1.Component({
            selector: 'app-protected-videolist',
            templateUrl: './protected-videolist.component.html',
            styleUrls: ['./protected-videolist.component.css'],
        })
    ], ProtectedVideolistComponent);
    return ProtectedVideolistComponent;
}());
exports.ProtectedVideolistComponent = ProtectedVideolistComponent;
