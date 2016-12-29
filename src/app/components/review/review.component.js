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
var review_class_1 = require('../../value-objects/review.class');
var review_data_service_1 = require('../../services/review-data/review-data.service');
// This component displays a Review. It handles both the
// minimized and expanded (accordian) format of the review
var ReviewComponent = (function () {
    function ReviewComponent(reviewDataService) {
        this.reviewDataService = reviewDataService;
        // this array allows the template to display ricebowls based on the rating
        this.riceBowls = new Array();
        this.colorBowl = "images/ricebowl.png";
        this.greyBowl = "images/ricebowl-grey.png";
        this.expanded = false;
    }
    ReviewComponent.prototype.ngOnInit = function () {
        // configure the ricebowl array for the rating
        for (var i = 0; i < 4; i++) {
            this.riceBowls.push(i >= (review_class_1.Review.MAX_RATING - this.review.rating) ? true : false);
        }
    };
    ReviewComponent.prototype.more = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', review_class_1.Review)
    ], ReviewComponent.prototype, "review", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            selector: 'review',
            moduleId: module.id,
            templateUrl: 'review.component.html',
            styleUrls: ['review.component.css'],
            providers: [review_data_service_1.ReviewDataService]
        }), 
        __metadata('design:paramtypes', [review_data_service_1.ReviewDataService])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;
//# sourceMappingURL=review.component.js.map