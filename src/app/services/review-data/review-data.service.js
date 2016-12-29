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
var ReviewDataService = (function () {
    function ReviewDataService() {
        this.DEFAULT_REVIEWS_PER_PAGE = 3;
        this.reviews = [
            new review_class_1.Review(1001, new Date(2004, 5, 16), "Sushi House", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 5),
            new review_class_1.Review(1002, new Date(2005, 9, 26), "Maki Sushi ", "123 Edgewood Rd", "Des Moines", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 3),
            new review_class_1.Review(1003, new Date(2002, 1, 4), "Takanama", "123 Edgewood Rd", "Des Moines", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 4),
            new review_class_1.Review(1005, new Date(2006, 7, 18), "Oyama", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 5),
            new review_class_1.Review(1006, new Date(2004, 4, 29), "NewBo Sushi", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 5),
            new review_class_1.Review(1007, new Date(2014, 5, 16), "Wasabi", "123 Edgewood Rd", "Cedar Rapids", "IA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 2),
            new review_class_1.Review(1008, new Date(2016, 5, 1), "Fuki Sushi", "123 Edgewood Rd", "Palo Alto", "CA", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 3),
            new review_class_1.Review(1009, new Date(2002, 3, 12), "Joe's Bait Shop", "123 Edgewood Rd", "Fargo", "ND", "52404", "3197778888", "http://www.sushihouse.com", "http://www.map.com", [
                "Lorem <em>ipsum</em> dolor sit amet, <b>consectetur</b> adipiscing <i>elit</i>. Pellentesque eu nibh commodo, vestibulum ligula eget, fermentum nisl. Aliquam molestie porta justo, eget congue ipsum ultricies vitae. Integer et nulla vel tortor elementum vestibulum. Aenean porta eros vitae dictum elementum. Mauris laoreet metus tellus, sit amet feugiat justo placerat vel. Nullam id rutrum nisl. Maecenas sodales metus tortor, quis accumsan tellus ultricies ut.",
                "Aliquam pulvinar lacus lacus, in euismod erat auctor id. Aenean eu laoreet lectus. Nam nibh leo, commodo quis risus id, convallis vulputate lectus. Etiam a enim in lorem tincidunt facilisis faucibus sed nunc. Fusce maximus aliquam turpis, sed pharetra quam aliquam non. Vestibulum viverra in nunc sed efficitur. Vestibulum est leo, porta ac dignissim quis, tincidunt a velit. Morbi at maximus odio. Suspendisse tincidunt orci eu eleifend pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed est id tellus ultrices dignissim vitae sed metus. Vestibulum at dolor vestibulum, rutrum arcu a, egestas odio.",
            ], 1)
        ];
    }
    // getRecentReviews( count: number = this.DEFAULT_REVIEWS_PER_PAGE ) : Array<Review> {
    //   let sorted: Array<Review> = this.reviews.sort( function( review1: Review, review2: Review){
    //     return review2.reviewDate.getTime() - review1.reviewDate.getTime()
    //   })
    //
    //   return sorted.slice( 0, ((sorted.length<count)?sorted.length:count) )
    // }
    //
    // getReviewsByState( stateAbbreviation: string ) : Array<Review> {
    //   return null
    // }
    ReviewDataService.prototype.getReviews = function (state, count) {
        if (count === void 0) { count = this.DEFAULT_REVIEWS_PER_PAGE; }
        var returnValue = null;
        console.log("State: " + state);
        if (state === 'ALL') {
            // sort the reviews by date
            var sorted = this.reviews.sort(function (review1, review2) {
                return review2.reviewDate.getTime() - review1.reviewDate.getTime();
            });
            returnValue = sorted.slice(0, ((sorted.length < count) ? sorted.length : count));
        }
        else {
            returnValue = this.reviews.filter(function (review) { return review.state === state; });
        }
        return returnValue;
    };
    ReviewDataService.prototype.getReviewById = function (id) {
        return this.reviews[1];
    };
    ReviewDataService.prototype.getStatesWithReviews = function () {
        var reviewStates = [];
        for (var _i = 0, _a = this.reviews; _i < _a.length; _i++) {
            var review = _a[_i];
            if (!reviewStates.includes(review.state)) {
                reviewStates.push(review.state);
            }
        }
        return reviewStates;
    };
    ReviewDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ReviewDataService);
    return ReviewDataService;
}());
exports.ReviewDataService = ReviewDataService;
//# sourceMappingURL=review-data.service.js.map