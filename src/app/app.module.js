"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
var main_page_component_1 = require('./pages/main/main-page.component');
var state_list_component_1 = require('./components/state-list/state-list.component');
var review_component_1 = require('./components/review/review.component');
var review_list_component_1 = require('./components/review-list/review-list.component');
var review_data_service_1 = require('./services/review-data/review-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.SushipilgrimRouterModule
            ],
            declarations: [main_page_component_1.PageMainComponent, state_list_component_1.StateListComponent, review_component_1.ReviewComponent, review_list_component_1.ReviewListComponent],
            providers: [review_data_service_1.ReviewDataService],
            bootstrap: [main_page_component_1.PageMainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map