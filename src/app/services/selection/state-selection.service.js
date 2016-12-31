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
var Subject_1 = require('rxjs/Subject');
// This service is used by the review-list and
// state-list components to indicate which
// reviews the user has selected
var StateSelectionService = (function () {
    function StateSelectionService() {
        this.selected = new Subject_1.Subject();
        this.selected$ = this.selected.asObservable();
    }
    StateSelectionService.prototype.setState = function (selected) {
        this.selected.next(selected);
    };
    StateSelectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StateSelectionService);
    return StateSelectionService;
}());
exports.StateSelectionService = StateSelectionService;
//# sourceMappingURL=state-selection.service.jsice.js.map