webpackJsonp([1,4],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(router, alertService, authenticationService, userService) {
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.loading = false;
        this.UserMode = __WEBPACK_IMPORTED_MODULE_3__models__["d" /* UserMode */];
    }
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["d" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["d" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* UserService */]) === 'function' && _d) || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(521);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_authentication_service__ = __webpack_require__(523);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__login_authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(538);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_hotel_service__ = __webpack_require__(519);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__hotel_hotel_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_review_service__ = __webpack_require__(532);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__review_review_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_service__ = __webpack_require__(509);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__alert_alert_service__["a"]; });






//# sourceMappingURL=services.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h2 *ngIf=\"mode === UserMode.Register\">Register</h2>\n        <h2 *ngIf=\"mode === UserMode.Edit\">Edit profile</h2>\n        <h2 *ngIf=\"mode === UserMode.View\">Your profile <a [routerLink]=\"['edit']\"><small class=\"glyphicon glyphicon-pencil\"></small></a></h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate [ngClass]=\"{ 'read-only': mode === UserMode.View }\">\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n              <label for=\"firstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"user.firstName\" #firstName=\"ngModel\" required maxlength=\"100\" [readonly]=\"mode === UserMode.View\" />\n              <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n              <label for=\"lastName\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"user.lastName\" #lastName=\"ngModel\" required maxlength=\"100\" [readonly]=\"mode === UserMode.View\" />\n              <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n              <label for=\"username\">Email</label>\n              <input  type=\"email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required email [readonly]=\"mode === UserMode.View\" />\n              <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Valid email is required</div>\n          </div>\n          <div *ngIf=\"mode !== UserMode.View\" class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required minlength=\"8\"  password [readonly]=\"mode === UserMode.View\" />\n              <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">At least 8 characters and one or more digits</div>\n          </div>\n          <div *ngIf=\"mode === UserMode.Register\" class=\"form-group\">\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n              <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n              <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n          </div>\n          <div *ngIf=\"mode === UserMode.Edit\" class=\"form-group\">\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n              <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n              <a [routerLink]=\"['/profile']\" class=\"btn btn-link\">Cancel</a>\n          </div>\n        </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(510);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(516);
/* unused harmony reexport HomeComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(524);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_component__ = __webpack_require__(508);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__alert_alert_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__(525);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_register_component__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__user_register_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_info_component__ = __webpack_require__(535);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__user_info_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_edit_info_component__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__user_edit_info_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__review_list_review_list_component__ = __webpack_require__(528);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__review_list_review_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__review_review_add_component__ = __webpack_require__(529);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__review_review_add_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__review_review_view_component__ = __webpack_require__(530);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__review_review_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rating_rating_component__ = __webpack_require__(527);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__rating_rating_component__["a"]; });












//# sourceMappingURL=components.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_authentication_guard__ = __webpack_require__(522);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_authentication_guard__["a"]; });

//# sourceMappingURL=guards.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hotel_hotel_resolver__ = __webpack_require__(518);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hotel_hotel_resolver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review_review_resolver__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__review_review_resolver__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__review_review_resolver__["b"]; });



//# sourceMappingURL=resolvers.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewComponent = (function () {
    function ReviewComponent(router, route, alertService, hotelService, reviewService) {
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.hotelService = hotelService;
        this.reviewService = reviewService;
        this.loading = false;
        this.ReviewMode = __WEBPACK_IMPORTED_MODULE_3__models__["b" /* ReviewMode */];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ReviewComponent.prototype.ngOnInit = function () {
        this.hotels = this.route.snapshot.data['hotels'];
    };
    ReviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["b" /* HotelService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["b" /* HotelService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ReviewService */]) === 'function' && _e) || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReviewsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewResolver = (function () {
    function ReviewResolver(reviewService) {
        this.reviewService = reviewService;
    }
    ReviewResolver.prototype.resolve = function (route) {
        return this.reviewService.getById(route.params['id']);
    };
    ReviewResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* ReviewService */]) === 'function' && _a) || Object])
    ], ReviewResolver);
    return ReviewResolver;
    var _a;
}());
var ReviewsResolver = (function () {
    function ReviewsResolver(reviewService) {
        this.reviewService = reviewService;
    }
    ReviewsResolver.prototype.resolve = function () {
        return this.reviewService.getAll();
    };
    ReviewsResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["c" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["c" /* ReviewService */]) === 'function' && _a) || Object])
    ], ReviewsResolver);
    return ReviewsResolver;
    var _a;
}());
//# sourceMappingURL=review.resolver.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".read-only {\n  display: table;\n  width: 100%; }\n  .read-only .form-group {\n    display: table-row; }\n    .read-only .form-group input.form-control {\n      display: table-cell;\n      border: none;\n      box-shadow: none;\n      background: none; }\n    .read-only .form-group label {\n      display: table-cell; }\n      .read-only .form-group label::after {\n        content: \":\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "star-rating {\n  display: inline-block;\n  vertical-align: middle;\n}\n.label {\n  float: right;\n}\ntextarea {\n  height: 200px;\n  resize: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h2 *ngIf=\"mode === ReviewMode.Add\">Rate your Stay</h2>\n        <h2 *ngIf=\"mode === ReviewMode.View\">Review Detail</h2>\n        <h2 *ngIf=\"mode === ReviewMode.Moderate\">Moderate Review</h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" novalidate>\n\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && (!hotel.valid && mode === ReviewMode.Add) }\">\n            <label for=\"hotel\">Hotel</label>\n            <select class=\"form-control\" #hotel=\"ngModel\" required [(ngModel)]=\"review.hotel\" name=\"hotel\" [disabled]=\"mode !== ReviewMode.Add\"  >\n              <option *ngFor=\"let hotel of hotels\" [value]=\"hotel.id\">{{ hotel.name }}</option>\n            </select>\n          </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !text.valid }\">\n                <label for=\"text\">Text</label>\n                <span *ngIf=\"mode === ReviewMode.View\" [ngClass]=\"review.moderated ? 'label-info' : 'label-default'\"  class=\"label\">\n                  {{review.moderated? 'Moderated' : 'Not moderated' }}\n                </span>\n                <textarea class=\"form-control\" name=\"text\" [(ngModel)]=\"review.text\" #text=\"ngModel\" required minlength=\"100\" maxlength=\"500\" [readonly]=\"mode === ReviewMode.View\" ></textarea>\n                <div *ngIf=\"f.submitted && !text.valid\" class=\"help-block\">The review has to be between 100 and 500 characters.</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !text.valid }\">\n                <label for=\"1_rating\">Rating</label>\n                <star-rating [(rating)]=\"review.rate\" [readonly]=\"mode !== ReviewMode.Add\" ></star-rating>\n            </div>\n            <div *ngIf=\"mode === ReviewMode.Add\" class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/reviews']\" class=\"btn btn-link\">Back</a>\n            </div>\n            <div *ngIf=\"mode === ReviewMode.Moderate\" class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Moderate</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/reviews']\" class=\"btn btn-link\">Back</a>\n            </div>\n            <div *ngIf=\"mode === ReviewMode.View\" class=\"form-group\">\n              <a [routerLink]=\"['/reviews']\" class=\"btn-link\">Back</a>\n            </div>\n        </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(539);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__user_user__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hotel_hotel__ = __webpack_require__(520);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_review__ = __webpack_require__(533);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__review_review__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__review_review__["b"]; });



//# sourceMappingURL=models.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(540);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert',
            template: __webpack_require__(604),
            styles: [__webpack_require__(595)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["e" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["e" /* AlertService */]) === 'function' && _a) || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(605),
            styles: [__webpack_require__(596)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_http_testing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolvers__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["b" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["c" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["d" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["e" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["f" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["g" /* EditInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["h" /* ReviewListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["i" /* ReviewAddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["j" /* ReviewViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components__["k" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__directives__["a" /* EmailValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_7__directives__["b" /* PasswordValidatorDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRouting */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services__["b" /* HotelService */],
                __WEBPACK_IMPORTED_MODULE_8__services__["c" /* ReviewService */],
                __WEBPACK_IMPORTED_MODULE_8__services__["d" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__services__["e" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_10__guards__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_9__resolvers__["a" /* HotelsResolver */],
                __WEBPACK_IMPORTED_MODULE_9__resolvers__["b" /* ReviewResolver */],
                __WEBPACK_IMPORTED_MODULE_9__resolvers__["c" /* ReviewsResolver */],
                __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* FakeBackendProvider */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__["MockBackend"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["BaseRequestOptions"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolvers__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });




var appRoutes = [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    {
        path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards__["a" /* AuthenticationGuard */]],
        children: [
            /*{ path: '', component: HomeComponent },*/
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__components__["f" /* InfoComponent */] },
            { path: 'profile/edit', component: __WEBPACK_IMPORTED_MODULE_1__components__["g" /* EditInfoComponent */] },
            {
                path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_1__components__["h" /* ReviewListComponent */],
                resolve: {
                    reviews: __WEBPACK_IMPORTED_MODULE_2__resolvers__["c" /* ReviewsResolver */],
                    hotels: __WEBPACK_IMPORTED_MODULE_2__resolvers__["a" /* HotelsResolver */]
                }
            },
            {
                path: 'reviews/add', component: __WEBPACK_IMPORTED_MODULE_1__components__["i" /* ReviewAddComponent */]
            },
            {
                path: 'reviews/:id', component: __WEBPACK_IMPORTED_MODULE_1__components__["j" /* ReviewViewComponent */],
                resolve: {
                    hotels: __WEBPACK_IMPORTED_MODULE_2__resolvers__["a" /* HotelsResolver */],
                    review: __WEBPACK_IMPORTED_MODULE_2__resolvers__["b" /* ReviewResolver */]
                }
            },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components__["e" /* NavbarComponent */], outlet: 'navbar' }
        ]
    },
    {
        path: '', children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components__["c" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__components__["d" /* RegisterComponent */] },
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'profile' }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_email_validator_directive__ = __webpack_require__(514);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_email_validator_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_password_validator_directive__ = __webpack_require__(515);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__directives_password_validator_directive__["a"]; });


//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// validation function
function validateEmailFactory() {
    var regExp = RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i);
    return function (c) {
        var isValid = regExp.test(c.value);
        if (isValid) {
            return null;
        }
        else {
            return {
                email: {
                    valid: false
                }
            };
        }
    };
}
var EmailValidatorDirective = (function () {
    function EmailValidatorDirective() {
        this.validator = validateEmailFactory();
    }
    EmailValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidatorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[email][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: EmailValidatorDirective, multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
}());
//# sourceMappingURL=email-validator.directive.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// validation function
function validatePasswordFactory() {
    var regExp = RegExp(/\d/i);
    return function (c) {
        var isValid = regExp.test(c.value);
        if (isValid) {
            return null;
        }
        else {
            return {
                email: {
                    valid: false
                }
            };
        }
    };
}
var PasswordValidatorDirective = (function () {
    function PasswordValidatorDirective() {
        this.validator = validatePasswordFactory();
    }
    PasswordValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    PasswordValidatorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[password][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: PasswordValidatorDirective, multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PasswordValidatorDirective);
    return PasswordValidatorDirective;
}());
//# sourceMappingURL=password-validator.directive.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export HomeComponent */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(606),
            styles: [__webpack_require__(597)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony export (immutable) */ __webpack_exports__["a"] = hotelSubscription;

function hotelSubscription(backend) {
    // array in local storage for registered hotels
    var hotels = JSON.parse(localStorage.getItem('hotels')) || [{
            id: 0,
            name: 'Hotel Rock'
        }, {
            id: 1,
            name: 'Hotel Jazz'
        }, {
            id: 2,
            name: 'Hotel Pop'
        }];
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // get hotels
            if (connection.request.url.endsWith('/api/hotels') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                // check for fake auth token in header and return hotels if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: hotels })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
            // get hotel by id
            if (connection.request.url.match(/\/api\/hotels\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                // check for fake auth token in header and return hotel if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find hotel by id in hotels array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedHotels = hotels.filter(function (hotel) { return hotel.id === id_1; });
                    var hotel = matchedHotels.length ? matchedHotels[0] : null;
                    // respond 200 OK with hotel
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: hotel })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
        }, 500);
    });
}
//# sourceMappingURL=hotel.backend.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelsResolver = (function () {
    function HotelsResolver(hotelService) {
        this.hotelService = hotelService;
    }
    HotelsResolver.prototype.resolve = function (route) {
        return this.hotelService.getAll();
    };
    HotelsResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["b" /* HotelService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services__["b" /* HotelService */]) === 'function' && _a) || Object])
    ], HotelsResolver);
    return HotelsResolver;
    var _a;
}());
//# sourceMappingURL=hotel.resolver.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelService = (function (_super) {
    __extends(HotelService, _super);
    function HotelService() {
        _super.apply(this, arguments);
    }
    HotelService.prototype.getAll = function () {
        return this.http.get('/api/hotels', this.jwt()).map(function (response) { return response.json(); });
    };
    HotelService.prototype.getById = function (id) {
        return this.http.get('/api/hotels/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    HotelService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HotelService);
    return HotelService;
}(__WEBPACK_IMPORTED_MODULE_2__services__["f" /* HttpService */]));
//# sourceMappingURL=hotel.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Hotel */
var Hotel = (function () {
    function Hotel(values) {
        if (values === void 0) { values = {}; }
        this.name = '';
        this.reviews = [];
        Object.assign(this, values);
    }
    return Hotel;
}());
//# sourceMappingURL=hotel.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestOptions"]({ headers: headers });
        }
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationGuard = (function () {
    function AuthenticationGuard(router) {
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthenticationGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthenticationGuard);
    return AuthenticationGuard;
    var _a;
}());
//# sourceMappingURL=authentication.guard.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService() {
        _super.apply(this, arguments);
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AuthenticationService);
    return AuthenticationService;
}(__WEBPACK_IMPORTED_MODULE_1__services__["f" /* HttpService */]));
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(607),
            styles: [__webpack_require__(598)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["d" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["d" /* AuthenticationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NAV_ITEMS = [
    { title: 'Personal Info', url: 'info', icon: 'user' },
    { title: 'Hotel Review', url: 'reviews', icon: 'header' },
    { title: 'Logout', url: 'login', icon: 'off' }
];
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.items = NAV_ITEMS;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(608),
            styles: [__webpack_require__(599)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_backend__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_hotel_backend__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_review_backend__ = __webpack_require__(531);
/* unused harmony export httpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeBackendProvider; });





function httpFactory(backend, options) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__user_user_backend__["a" /* userSubscription */])(backend);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__hotel_hotel_backend__["a" /* hotelSubscription */])(backend);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__review_review_backend__["a" /* reviewSubscription */])(backend);
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"](backend, options);
}
var FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"],
    useFactory: httpFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["MockBackend"], __WEBPACK_IMPORTED_MODULE_0__angular_http__["BaseRequestOptions"]]
};
//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = (function () {
    function RatingComponent() {
        this.itemId = 1;
        this.ratingValue = 0;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(RatingComponent.prototype, "rating", {
        get: function () {
            return this.ratingValue;
        },
        set: function (val) {
            this.ratingValue = val;
            this.ratingChange.emit(this.ratingValue);
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.ngOnInit = function () {
        this.inputName = this.itemId + '_rating';
        this.ratings = [
            { title: "Rocks!", value: 5 },
            { title: "Pretty good", value: 4 },
            { title: "Meh", value: 3 },
            { title: "Kinda bad", value: 2 },
            { title: "Sucks big time", value: 1 }
        ];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "itemId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "ratingChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "rating", null);
    RatingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'star-rating',
            template: __webpack_require__(609),
            styles: [__webpack_require__(601)]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingComponent);
    return RatingComponent;
}());
//# sourceMappingURL=rating.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewListComponent = (function () {
    function ReviewListComponent(route, alertService, reviewService) {
        this.route = route;
        this.alertService = alertService;
        this.reviewService = reviewService;
        this.UserRole = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* UserRole */];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        this.reviews = this.route.snapshot.data['reviews'];
        var reviewedHotels = Array.from(this.reviews, function (review) { return review.hotel; });
        this.hotels = new Map(this.route.snapshot.data['hotels'].map(function (hotel) { return [hotel.id, hotel]; }));
        this.availableHotels = this.route.snapshot.data['hotels'].filter(function (hotel) { return !~reviewedHotels.indexOf(hotel.id); });
        localStorage.setItem('availableHotels', JSON.stringify(this.availableHotels));
    };
    ReviewListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(610),
            styles: [__webpack_require__(600)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* AlertService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ReviewService */]) === 'function' && _c) || Object])
    ], ReviewListComponent);
    return ReviewListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=review-list.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewAddComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewAddComponent = (function (_super) {
    __extends(ReviewAddComponent, _super);
    function ReviewAddComponent() {
        _super.apply(this, arguments);
        this.review = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Review */]();
        this.mode = __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ReviewMode */].Add;
    }
    ReviewAddComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.review.user = this.currentUser.id;
        this.hotels = JSON.parse(localStorage.getItem('availableHotels'));
    };
    ReviewAddComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.review.hotel = +this.review.hotel;
        this.reviewService.create(this.review)
            .subscribe(function (data) {
            _this.router.navigate(['/reviews']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ReviewAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-add',
            template: __webpack_require__(359),
            styles: [__webpack_require__(357)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewAddComponent);
    return ReviewAddComponent;
}(__WEBPACK_IMPORTED_MODULE_1__review_component__["a" /* ReviewComponent */]));
//# sourceMappingURL=review-add.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewViewComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewViewComponent = (function (_super) {
    __extends(ReviewViewComponent, _super);
    function ReviewViewComponent() {
        _super.apply(this, arguments);
        this.mode = __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ReviewMode */].View;
    }
    ReviewViewComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.currentUser.role === __WEBPACK_IMPORTED_MODULE_2__models__["a" /* UserRole */].Admin) {
            this.mode = __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ReviewMode */].Moderate;
        }
        this.review = this.route.snapshot.data['review'];
    };
    ReviewViewComponent.prototype.save = function () {
        var _this = this;
        //TODO: move admin logic to other component
        if (this.mode === __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ReviewMode */].Moderate) {
            this.loading = true;
            this.review.moderated = true;
            this.reviewService.update(this.review)
                .subscribe(function (data) {
                _this.router.navigate(['/reviews']);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    ReviewViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-review-view',
            template: __webpack_require__(359),
            styles: [__webpack_require__(357)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewViewComponent);
    return ReviewViewComponent;
}(__WEBPACK_IMPORTED_MODULE_1__review_component__["a" /* ReviewComponent */]));
//# sourceMappingURL=review-view.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["a"] = reviewSubscription;


function reviewSubscription(backend) {
    // array in local storage for registered reviews
    var reviews;
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        setTimeout(function () {
            // get reviews
            if (connection.request.url.endsWith('/api/reviews') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                // check for fake auth token in header and return reviews if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var currentUser_1 = JSON.parse(localStorage.getItem('currentUser'));
                    var matchedReviews = [];
                    if (reviews) {
                        if (currentUser_1.role === __WEBPACK_IMPORTED_MODULE_1__models__["a" /* UserRole */].Admin) {
                            matchedReviews = reviews.filter(function (review) { return !review.moderated; });
                        }
                        else {
                            matchedReviews = reviews.filter(function (review) { return review.user === currentUser_1.id; });
                        }
                    }
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: matchedReviews })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
            // get review by id
            if (connection.request.url.match(/\/api\/reviews\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                // check for fake auth token in header and return review if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find review by id in reviews array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedReviews = reviews.filter(function (review) { return review.id === id_1; });
                    var review = matchedReviews.length ? matchedReviews[0] : null;
                    // respond 200 OK with review
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: review })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
            // create review
            if (connection.request.url.endsWith('/api/reviews') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
                // get new review object from post body
                var newReview = JSON.parse(connection.request.getBody());
                // save new review
                newReview.id = reviews.length + 1;
                reviews.push(newReview);
                localStorage.setItem('reviews', JSON.stringify(reviews));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200 })));
            }
            // update review
            if (connection.request.url.match(/\/api\/reviews\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put) {
                // check for fake auth token in header and return review if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var updatedReview = JSON.parse(connection.request.getBody());
                    // find review by id in reviews array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < reviews.length; i++) {
                        var review = reviews[i];
                        if (review.id === id) {
                            // update review
                            reviews[i] = updatedReview;
                            localStorage.setItem('reviews', JSON.stringify(reviews));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
        }, 500);
    });
}
//# sourceMappingURL=review.backend.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewService = (function (_super) {
    __extends(ReviewService, _super);
    function ReviewService() {
        _super.apply(this, arguments);
    }
    ReviewService.prototype.getAll = function () {
        return this.http.get('/api/reviews', this.jwt()).map(function (response) { return response.json(); });
    };
    ReviewService.prototype.getById = function (id) {
        return this.http.get('/api/reviews/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    ReviewService.prototype.create = function (review) {
        return this.http.post('/api/reviews', review, this.jwt()).map(function (response) { return response.json(); });
    };
    ReviewService.prototype.update = function (review) {
        return this.http.put('/api/reviews/' + review.id, review, this.jwt()).map(function (response) { return response.json(); });
    };
    ReviewService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ReviewService);
    return ReviewService;
}(__WEBPACK_IMPORTED_MODULE_2__services__["f" /* HttpService */]));
//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Review; });
var ReviewMode;
(function (ReviewMode) {
    ReviewMode[ReviewMode["Add"] = 0] = "Add";
    ReviewMode[ReviewMode["View"] = 1] = "View";
    ReviewMode[ReviewMode["Moderate"] = 2] = "Moderate";
})(ReviewMode || (ReviewMode = {}));
var Review = (function () {
    function Review(values) {
        if (values === void 0) { values = {}; }
        this.text = '';
        this.rate = 3;
        this.moderated = false;
        Object.assign(this, values);
    }
    return Review;
}());
//# sourceMappingURL=review.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInfoComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditInfoComponent = (function (_super) {
    __extends(EditInfoComponent, _super);
    function EditInfoComponent() {
        _super.apply(this, arguments);
        this.mode = __WEBPACK_IMPORTED_MODULE_2__models__["d" /* UserMode */].Edit;
    }
    EditInfoComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    };
    EditInfoComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.user)
            .subscribe(function () {
            localStorage.setItem('currentUser', JSON.stringify(_this.user));
            _this.router.navigate(['/profile']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EditInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-info',
            template: __webpack_require__(241),
            styles: [__webpack_require__(356)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditInfoComponent);
    return EditInfoComponent;
}(__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]));
//# sourceMappingURL=edit-info.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoComponent = (function (_super) {
    __extends(InfoComponent, _super);
    function InfoComponent() {
        _super.apply(this, arguments);
        this.mode = __WEBPACK_IMPORTED_MODULE_2__models__["d" /* UserMode */].View;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    };
    InfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-info',
            template: __webpack_require__(241),
            styles: [__webpack_require__(356)]
        }), 
        __metadata('design:paramtypes', [])
    ], InfoComponent);
    return InfoComponent;
}(__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]));
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent() {
        _super.apply(this, arguments);
        this.mode = __WEBPACK_IMPORTED_MODULE_2__models__["d" /* UserMode */].Register;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(function (data) {
            _this.login();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(241)
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}(__WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */]));
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["a"] = userSubscription;


function userSubscription(backend) {
    // array in local storage for registered users
    var users;
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        users = JSON.parse(localStorage.getItem('users')) || [{
                id: 0,
                role: __WEBPACK_IMPORTED_MODULE_1__models__["a" /* UserRole */].Admin,
                firstName: 'Josh',
                lastName: 'Vazquez',
                username: 'admin@test.com',
                password: 'password1'
            }];
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === params_1.username && user.password === params_1.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({
                        status: 200,
                        body: {
                            id: user.id,
                            role: user.role,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            password: user.password,
                            token: 'fake-jwt-token'
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Email or password is incorrect'));
                }
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser_1.username + '" is already taken'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                newUser_1.role = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* UserRole */].User;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200 })));
            }
            // update user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var updatedUser_1 = JSON.parse(connection.request.getBody());
                    // validation
                    var duplicateUser = users.filter(function (user) { return (user.username === updatedUser_1.username && user.id !== updatedUser_1.id); }).length;
                    if (duplicateUser) {
                        return connection.mockError(new Error('Email "' + updatedUser_1.username + '" is already taken'));
                    }
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // update user
                            users[i] = updatedUser_1;
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
                }
            }
        }, 500);
    });
}
//# sourceMappingURL=user.backend.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        _super.apply(this, arguments);
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__services__["f" /* HttpService */]));
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return User; });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
})(UserRole || (UserRole = {}));
var UserMode;
(function (UserMode) {
    UserMode[UserMode["Register"] = 0] = "Register";
    UserMode[UserMode["View"] = 1] = "View";
    UserMode[UserMode["Edit"] = 2] = "Edit";
})(UserMode || (UserMode = {}));
var User = (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        this.role = UserRole.User;
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        Object.assign(this, values);
    }
    return User;
}());
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".jumbotron {\n  height: 100vh;\n  margin-bottom: 0px;\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  width: 150px;\n  height: 100vh;\n  background: #000; }\n  #sidebar-wrapper ul {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n    #sidebar-wrapper ul li {\n      text-align: center;\n      line-height: 40px; }\n      #sidebar-wrapper ul li:last-child {\n        position: absolute;\n        bottom: 0;\n        width: 100%; }\n      #sidebar-wrapper ul li a {\n        display: block;\n        text-decoration: none;\n        color: #999999;\n        font-size: 1em; }\n        #sidebar-wrapper ul li a:hover {\n          text-decoration: none;\n          color: #fff;\n          background: rgba(255, 255, 255, 0.2); }\n        #sidebar-wrapper ul li a:focus, #sidebar-wrapper ul li a:active {\n          text-decoration: none; }\n        #sidebar-wrapper ul li a span:last-child {\n          padding-left: 10px; }\n\n@media (max-width: 768px) {\n  #sidebar-wrapper {\n    width: 50px; }\n    #sidebar-wrapper ul li a {\n      font-size: 1.5em; }\n      #sidebar-wrapper ul li a span:last-child {\n        display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "ul {\n  margin: 0px;\n  padding: 0px; }\n  ul li {\n    display: table;\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #dedede;\n    margin: 15px 0; }\n    ul li > * {\n      display: table-cell;\n      vertical-align: middle; }\n    ul li > span:first-child {\n      width: 25%; }\n      @media (max-width: 600px) {\n        ul li > span:first-child {\n          width: 40%; } }\n    ul li > span:nth-child(3) {\n      width: 25%;\n      text-align: center; }\n      @media (max-width: 600px) {\n        ul li > span:nth-child(3) {\n          width: 50%; } }\n    ul li star-rating {\n      float: left; }\n      @media (max-width: 600px) {\n        ul li star-rating {\n          display: none; } }\n\n.add {\n  font-size: 4em;\n  color: #dedede;\n  margin: 0 auto;\n  display: block;\n  width: 40px;\n  text-decoration: none; }\n  @media (max-width: 600px) {\n    .add {\n      font-size: 3em; } }\n\n.not-reviews {\n  font-size: 2em;\n  color: #dedede;\n  text-align: center;\n  margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "\n/***************************\nHides the radio buttons\n***************************/\n.rating:not(:checked) > input {\n    position:absolute;\n    top:-9999px;\n    clip:rect(0,0,0,0);\n}\n/***************************\nDefault stars styles\n***************************/\n.rating:not(:checked) > label {\n    float:right;\n    width:1em;\n    padding:0.1em;\n    overflow:hidden;\n    white-space:nowrap;\n    cursor:pointer;\n    font-size:200%;\n    line-height:1.2;\n    color:#ddd;\n}\n/***************************\nAdds the star symbol to the labels\n***************************/\n.rating:not(:checked) > label:before {\n    content: '\\2605   ';\n}\n.rating > input:disabled ~ label {\n    cursor: default;\n}\n/***************************\nColour for the applied rating stars\n***************************/\n.rating > input:checked ~ label {\n    color: #f70;\n}\n/***************************\nColour for hovered stars when increasing the rating\n***************************/\n.rating > input:not(:checked):not(:disabled) ~ label:hover,\n.rating > input:not(:checked):not(:disabled) ~ label:hover ~ label {\n    color: gold;\n}\n/***************************\nColour for hovered stars when decreasing the rating\n***************************/\n.rating > input:checked:not(:disabled) ~ label:hover,\n.rating > input:checked:not(:disabled) ~ label:hover ~ label,\n.rating > label:hover ~ input:checked:not(:disabled) ~ label {\n    color: #ea0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div id=\"wrapper\">\n\n        <!-- Sidebar -->\n        <router-outlet name=\"navbar\"></router-outlet>\n        <!-- /#sidebar-wrapper -->\n\n        <!-- Page Content -->\n        <div id=\"page-content-wrapper\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                      <router-outlet></router-outlet>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /#page-content-wrapper -->\n        <alert></alert>\n    </div>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>\n"

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h2>Login</h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                <label for=\"username\">Email</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n            </div>\n        </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 608:
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar-wrapper\">\n    <ul>\n      <li *ngFor=\"let item of items\">\n        <a [routerLink]=\"[ '/' + item.url ]\" title=\"{{ item.title }}\"><span class=\"glyphicon glyphicon-{{item.icon}}\"></span><span>{{ item.title }}</span></a>\n      </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"rating\">\n    <ng-container *ngFor=\"let r of ratings\">\n      <input  type=\"radio\"\n          [(ngModel)]=\"rating\"\n          [value]=\"r.value\"\n          [name]=\"inputName\"\n          [disabled]=\"readonly\"\n          [checked]=\"r.value === rating\"\n          id=\"{{inputName + '_'+ r.value}}\" />\n      <label title=\"{{r.title}}\" for=\"{{inputName + '_'+ r.value}}\">{{r.value}}</label>\n    </ng-container>\n</fieldset>\n"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "\n<ul>\n  <li *ngFor=\"let review of reviews\">\n    <span>{{hotels.get(review.hotel).name}}</span>\n     <star-rating [(rating)]=\"review.rate\" [readonly]=\"true\" ></star-rating>\n     <span>\n       <span [ngClass]=\"review.moderated ? 'label-info' : 'label-default'\"  class=\"label\">\n         {{review.moderated? 'Moderated' : 'Not moderated' }}\n       </span>\n     </span>\n    <a [routerLink]=\"['/reviews', review.id]\"><span class=\"glyphicon glyphicon-eye-open\"></span></a>\n  </li>\n</ul>\n<a *ngIf=\"currentUser.role === UserRole.User && availableHotels.length > 0 \" [routerLink]=\"['add']\"  class=\"add\">\n  <span class=\"glyphicon glyphicon-plus\"></span>\n</a>\n<p *ngIf=\"currentUser.role === UserRole.Admin && reviews.length == 0\" class=\"not-reviews\">\n  There are not reviews to moderate.\n</p>\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[878]);
//# sourceMappingURL=main.bundle.js.map