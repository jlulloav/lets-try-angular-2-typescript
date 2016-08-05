import { CapitalizeFirstPipe } from './capitalize-first.pipe';

describe('CapitalizeFirstPipe', () => {
    let pipe: CapitalizeFirstPipe;
    beforeEach(() => {
        pipe = new CapitalizeFirstPipe();
    });
    it('transforms "abc" to "Acb"', () => {
        expect(pipe.transform('abc')).toEqual('Abc');
    });
    it('transforms "abc def" to "Abc def"', () => {
        expect(pipe.transform('abc def')).toEqual('Abc def');
    });
    it('leaves "ABC DEF" unchanged', () => {
        expect(pipe.transform('ABC DEF')).toEqual('ABC DEF');
    });
});