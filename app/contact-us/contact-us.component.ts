import { Component } from '@angular/core';

import { CapitalizeFirstPipe } from '../pipe/capitalize-first.pipe';

@Component({
    selector: 'cu-view',
    moduleId: module.id,
    templateUrl: 'contact-us.component.html',
    pipes: [CapitalizeFirstPipe]
})
export class ContactUs {
    title = "contact us section"
}