import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { LetsTryNav } from './shared/navigation/nav.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['../css/styles.css'],
    directives: [ROUTER_DIRECTIVES, LetsTryNav]
})
export class AppComponent {
    title = 'Lets try Angular 2';
}
