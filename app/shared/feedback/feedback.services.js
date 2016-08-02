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
var http_1 = require('@angular/http');
require('../../../node_modules/rxjs/add/operator/toPromise');
var FeedbackServices = (function () {
    function FeedbackServices(http) {
        this.http = http;
        this.feedbackUrl = 'app/feedback'; // URL to web api
    }
    FeedbackServices.prototype.getFeedback = function () {
        return this.http.get(this.feedbackUrl).
            toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    FeedbackServices.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    FeedbackServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FeedbackServices);
    return FeedbackServices;
})();
exports.FeedbackServices = FeedbackServices;
//# sourceMappingURL=feedback.services.js.map