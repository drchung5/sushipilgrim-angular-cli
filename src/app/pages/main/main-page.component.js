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
var selection_service_1 = require('../../services/selection/selection.service');
var PageMainComponent = (function () {
    // TODO: define 'ALL' as a constant
    // selectedReviews: string = 'ALL'
    function PageMainComponent(selectionService) {
        this.selectionService = selectionService;
    }
    PageMainComponent = __decorate([
        core_1.Component({
            selector: 'page',
            template: "\n\n    <aside>\n      <header>Reviews</header>\n      <state-list></state-list>\n    </aside>\n    \n    <section>\n      <router-outlet></router-outlet>\n    </section>\n\n  ",
            styles: ["\n\n    header {\n      margin-bottom: 0.5em;\n    }\n\n    aside { \n      width: 10em;\n      float: right;\n      padding: 0.6em;\n      background-color: #f8f8f8;\n      font-size: 0.9em;\n     }\n\n    section {\n      width: auto;\n      overflow: hidden;\n      padding-right: 1em;\n    }\n     \n  "],
            providers: [selection_service_1.StateSelectionService]
        }), 
        __metadata('design:paramtypes', [selection_service_1.StateSelectionService])
    ], PageMainComponent);
    return PageMainComponent;
}());
exports.PageMainComponent = PageMainComponent;
//# sourceMappingURL=main-page.component.js.map