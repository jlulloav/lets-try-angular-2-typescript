import { Component } from '@angular/core';

import { CapitalizeFirstPipe } from '../pipe/capitalize-first.pipe';
import { FeedbackDetails } from './../shared/feedback/feedback-details.component';

@Component({
    selector: 'home-view',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    directives: [FeedbackDetails],
    pipes: [CapitalizeFirstPipe]
})
export class Home {
    title = "home section"
}