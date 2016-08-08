import { Component, OnInit } from '@angular/core';

import { Feedback } from '../shared/feedback/feedback.model';
import { FeedbackServices } from '../shared/feedback/feedback.services';
import { CapitalizeFirstPipe } from '../pipe/capitalize-first.pipe';

@Component({
    selector: 'cu-view',
    moduleId: module.id,
    templateUrl: 'contact-us.component.html',
    pipes: [CapitalizeFirstPipe],
    providers: [FeedbackServices]
})
export class ContactUs implements OnInit{
    title = "contact us section";
    error:any;
    feedback:Feedback;

    constructor(private feedbackServices:FeedbackServices) {
    }

    ngOnInit(){
        this.feedback=new Feedback();
    }

    submit() {
        this.feedbackServices
            .post(this.feedback)
            .then(fb => {
                this.feedback = fb;
            })
            .catch(error => this.error = error);
    }
}