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
var router_1 = require('@angular/router');
var review_data_service_1 = require('../../services/review-data/review-data.service');
var selection_service_1 = require('../../services/selection/selection.service');
// This component is just a container for reviews
// and will be used as the target component for
// routing.
var ReviewListComponent = (function () {
    function ReviewListComponent(reviewDataService, selectionService, activatedRoute) {
        this.reviewDataService = reviewDataService;
        this.selectionService = selectionService;
        this.activatedRoute = activatedRoute;
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        this.selectedState = this.activatedRoute.snapshot.params['state'];
        if (!this.selectedState) {
            this.selectedState = 'ALL';
        }
        this.selectionService.setState(this.selectedState);
        this.reviewList = this.reviewDataService.getReviews(this.selectedState);
        console.log("State: " + this.selectedState);
    };
    ReviewListComponent = __decorate([
        core_1.Component({
            selector: 'review-list',
            template: "\n          <review *ngFor=\"let review of reviewList\" [review]=\"review\"></review>\n  ",
            providers: [review_data_service_1.ReviewDataService]
        }), 
        __metadata('design:paramtypes', [review_data_service_1.ReviewDataService, selection_service_1.StateSelectionService, router_1.ActivatedRoute])
    ], ReviewListComponent);
    return ReviewListComponent;
}());
exports.ReviewListComponent = ReviewListComponent;
//# sourceMappingURL=review-list.component.js.map