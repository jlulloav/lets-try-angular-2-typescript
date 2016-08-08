import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import '../../../node_modules/rxjs/add/operator/toPromise';

import { Feedback } from './feedback.model';


@Injectable()
export class FeedbackServices {
    private feedbackUrl = 'app/feedback'; // URL to web api
    constructor(private http: Http) { }

    getFeedback() {
        return this.http.get(this.feedbackUrl).
            toPromise().then(response => response.json().data as Feedback[]).catch(this.handleError)

    }
    post(feedback: Feedback): Promise<Feedback> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.feedbackUrl, JSON.stringify(feedback), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}