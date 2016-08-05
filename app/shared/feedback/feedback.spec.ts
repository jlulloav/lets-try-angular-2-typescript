import { Feedback } from './feedback.model';

describe('Feedback', () => {
    it('has username', () => {
        let feedback: Feedback = {
            id: 1,
            userName: 'Jon',
            comment: 'c',
        };
        expect(feedback.userName).toEqual('Jon');
    });
    it('has comment', () => {
        let feedback: Feedback = {
            id: 2,
            userName: 'Ben',
            comment: 'No comment',
        };
        expect(feedback.comment).toEqual('No comment');
    });
});