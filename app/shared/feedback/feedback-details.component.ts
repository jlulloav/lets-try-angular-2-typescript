import { Component, OnInit } from '@angular/core';

import { Feedback } from './feedback.model';
import { FeedbackServices } from './feedback.services';

@Component({
    selector: 'fd-view',
    moduleId: module.id,
    templateUrl: 'feedback-details.component.html',
    providers: [FeedbackServices]
})
export class FeedbackDetails implements OnInit {
    feedback: Feedback[];
    error: any;
    constructor(private feedbackServices: FeedbackServices) { }

    getFeedback() {
        this.feedbackServices.getFeedback().then(f => this.feedback = f)
            .catch(error => this.error = error);
    }
    ngOnInit() {
        this.getFeedback();

    }

}