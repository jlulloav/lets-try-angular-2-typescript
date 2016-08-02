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
var feedback_services_1 = require('./feedback.services');
var FeedbackDetails = (function () {
    function FeedbackDetails(feedbackServices) {
        this.feedbackServices = feedbackServices;
    }
    FeedbackDetails.prototype.getFeedback = function () {
        var _this = this;
        this.feedbackServices.getFeedback().then(function (f) { return _this.feedback = f; })
            .catch(function (error) { return _this.error = error; });
    };
    FeedbackDetails.prototype.ngOnInit = function () {
        this.getFeedback();
    };
    FeedbackDetails = __decorate([
        core_1.Component({
            selector: 'fd-view',
            moduleId: module.id,
            templateUrl: 'feedback-details.component.html',
            providers: [feedback_services_1.FeedbackServices]
        }), 
        __metadata('design:paramtypes', [feedback_services_1.FeedbackServices])
    ], FeedbackDetails);
    return FeedbackDetails;
})();
exports.FeedbackDetails = FeedbackDetails;
//# sourceMappingURL=feedback-details.component.js.map