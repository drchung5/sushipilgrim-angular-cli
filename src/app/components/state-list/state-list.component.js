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
var review_data_service_1 = require('../../services/review-data/review-data.service');
var selection_service_1 = require("../../services/selection/state-selection.service.ts");
var StateInfo = (function () {
    function StateInfo(name, abbr, hasReviews) {
        this.name = name;
        this.abbr = abbr;
        this.hasReviews = hasReviews;
    }
    return StateInfo;
}());
// TODO: This component needs to be reworked so it doesn't flash
//       The states don't change and neither should the fact that
//       Some have reviews. The only thing that should change is
//       The selection bullet. That shoul dbe a style change not
//       structural change
// TODO: If the user clicks on the current selection the app
//       should do nothing. To do this the cone will have to
//       bind the click handler for the state items
var StateListComponent = (function () {
    function StateListComponent(reviewDataService, selectionService) {
        var _this = this;
        this.reviewDataService = reviewDataService;
        this.selectionService = selectionService;
        this.selectedState = "";
        this.states = [
            new StateInfo('Alabama', 'AL', false),
            new StateInfo('Alaska', 'AK', false),
            new StateInfo('Arizona', 'AZ', false),
            new StateInfo('Arkansas', 'AR', false),
            new StateInfo('California', 'CA', false),
            new StateInfo('Colorado', 'CO', false),
            new StateInfo('Connecticut', 'CT', false),
            new StateInfo('Delaware', 'DE', false),
            new StateInfo('Florida', 'FL', false),
            new StateInfo('Georgia', 'GA', false),
            new StateInfo('Hawaii', 'HI', false),
            new StateInfo('Idaho', 'ID', false),
            new StateInfo('Illinois', 'IL', false),
            new StateInfo('Indiana', 'IN', false),
            new StateInfo('Iowa', 'IA', false),
            new StateInfo('Kansas', 'KS', false),
            new StateInfo('Kentucky', 'KY', false),
            new StateInfo('Louisiana', 'LA', false),
            new StateInfo('Maine', 'ME', false),
            new StateInfo('Maryland', 'MD', false),
            new StateInfo('Massachusetts', 'MA', false),
            new StateInfo('Michigan', 'MI', false),
            new StateInfo('Minnesota', 'MN', false),
            new StateInfo('Mississippi', 'MS', false),
            new StateInfo('Missouri', 'MO', false),
            new StateInfo('Montana', 'MT', false),
            new StateInfo('Nebraska', 'NE', false),
            new StateInfo('Nevada', 'NV', false),
            new StateInfo('New Hampshire', 'NH', false),
            new StateInfo('New Jersey', 'NJ', false),
            new StateInfo('New Mexico', 'NM', false),
            new StateInfo('New York', 'NY', false),
            new StateInfo('North Carolina', 'NC', false),
            new StateInfo('North Dakota', 'ND', false),
            new StateInfo('Ohio', 'OH', false),
            new StateInfo('Oklahoma', 'OK', false),
            new StateInfo('Oregon', 'OR', false),
            new StateInfo('Pennsylvania', 'PA', false),
            new StateInfo('Rhode Island', 'RI', false),
            new StateInfo('South Carolina', 'SC', false),
            new StateInfo('South Dakota', 'SD', false),
            new StateInfo('Tennessee', 'TN', false),
            new StateInfo('Texas', 'TX', false),
            new StateInfo('Utah', 'UT', false),
            new StateInfo('Vermont', 'VT', false),
            new StateInfo('Virginia', 'VA', false),
            new StateInfo('Washington', 'WA', false),
            new StateInfo('West Virginia', 'WV', false),
            new StateInfo('Wisconsin', 'WI', false),
            new StateInfo('Wyoming', 'WY', false)
        ];
        // selected$ is an Observable so the subscribe
        // function watches for changes
        selectionService.selected$.subscribe(function (state) { return _this.selectedState = state; });
    }
    StateListComponent.prototype.ngOnInit = function () {
        console.log("State: " + this.selectedState);
        this.statesWithReviews = this.reviewDataService.getStatesWithReviews();
        // TODO: this is a very inefficient algorithm
        for (var _i = 0, _a = this.states; _i < _a.length; _i++) {
            var state = _a[_i];
            if (this.statesWithReviews.includes(state.abbr)) {
                state.hasReviews = true;
            }
        }
    };
    StateListComponent = __decorate([
        core_1.Component({
            selector: 'state-list',
            template: "\n    <nav>\n      <div class=\"selected\">{{selectedState==='ALL'?'\u2022':''}}</div><a href=\"/ALL\">All Reviews</a>\n      <ul *ngFor=\"let state of states\">\n             \n        <li *ngIf=\"state.hasReviews\">\n          <div class=\"selected\">{{selectedState===state.abbr?'\u2022':''}}</div><a href=\"/{{state.abbr}}\">{{state.name}}</a>\n        </li>\n        <li *ngIf=\"!state.hasReviews\">\n          <div class=\"selected\"></div>{{state.name}}\n        </li>      \n      </ul>\n    </nav>\n  ",
            styles: ["\n    nav {\n      font-size: 0.9em;    \n      padding-left: 0em;\n      padding-top: 0.5em;\n      margin-left: 0em;\n      border-top: lightgray solid 1px;\n    }\n    ul {\n      margin:0;\n    }\n    li {\n      list-style: none;\n    }\n    .selected {\n      display: inline-block;\n      width: 0.9em;\n    }\n    a:hover {\n      font-style: italic;\n      color: blue;\n    }\n  "],
            providers: [review_data_service_1.ReviewDataService]
        }), 
        __metadata('design:paramtypes', [review_data_service_1.ReviewDataService, selection_service_1.StateSelectionService])
    ], StateListComponent);
    return StateListComponent;
}());
exports.StateListComponent = StateListComponent;
//# sourceMappingURL=state-list.component.js.map