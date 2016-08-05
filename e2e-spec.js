describe('lets-try-angular-2 Main title  ', function () {
    var expectedMsg = 'Lets try Angular 2';
    beforeEach(function () {
        browser.get('');
    });
    it('should display: ' + expectedMsg, function () {
        expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    });
});
describe('lets-try-angular-2 Home view subtitle', function () {
    var expectedMsg = 'Home section';

    it('should display: ' + expectedMsg, function () {
        browser.get('http://localhost:3000/home');
        expect(element(by.css('h3')).getText()).toEqual(expectedMsg);
    });
});