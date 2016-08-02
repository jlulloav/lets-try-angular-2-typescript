import { Component } from '@angular/core';

import { FeedbackDetails } from './../shared/feedback/feedback-details.component'

@Component({
    selector: 'home-view',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    directives: [FeedbackDetails]
})
export class Home {
    title = "Home section"
}