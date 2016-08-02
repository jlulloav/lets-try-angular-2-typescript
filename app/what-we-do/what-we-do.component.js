var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var category_services_1 = require('./shared/category.services');
var WhatWeDo = (function () {
    function WhatWeDo(categoryService) {
        this.categoryService = categoryService;
        this.title = "What we do section";
    }
    WhatWeDo.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (cat) { return _this.categories = cat; });
    };
    WhatWeDo.prototype.ngOnInit = function () {
        this.getCategories();
    };
    WhatWeDo = __decorate([
        core_1.Component({
            selector: 'wwd-view',
            templateUrl: 'app/what-we-do/what-we-do.component.html',
            providers: [category_services_1.CategoryServices]
        }), 
        __metadata('design:paramtypes', [category_services_1.CategoryServices])
    ], WhatWeDo);
    return WhatWeDo;
})();
exports.WhatWeDo = WhatWeDo;
//# sourceMappingURL=what-we-do.component.js.map