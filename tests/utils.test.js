const utils = require('../utils');

describe('Utils', () => {

    it('is defined', () => {
        expect(utils.makeid).toBeDefined();
    })

    it('returns a string of 15', () => {
        expect(utils.makeid(15).length).toEqual(15);
    })


});