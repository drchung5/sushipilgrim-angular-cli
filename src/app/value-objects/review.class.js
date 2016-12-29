// Value object representing restaurant review
"use strict";
var Review = (function () {
    function Review(id, reviewDate, name, street, city, state, zip, phone, webUrl, mapUrl, text, rating) {
        this.id = id;
        this.reviewDate = reviewDate;
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.webUrl = webUrl;
        this.mapUrl = mapUrl;
        this.text = text;
        this.rating = rating;
    }
    Review.getReviewFromJSON = function (json) {
        var o = JSON.parse(json);
        return new Review(o['id'], o['reviewDate'], o['name'], o['street'], o['city'], o['state'], o['zip'], o['phoine'], o['webUrl'], o['mapUrl'], o['text'], o['rating']);
    };
    Review.MAX_RATING = 4;
    return Review;
}());
exports.Review = Review;
//# sourceMappingURL=review.class.js.map