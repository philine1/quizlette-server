const controller = require('../controllers/userController');

describe('User Controller', () => {

    it('index is defined', () => {
        expect(controller.index).toBeDefined();
    })

    it('show is defined', () => {
        expect(controller.show).toBeDefined();
    })

    it('create is defined', () => {
        expect(controller.create).toBeDefined();
    })

    it('updatePoints is defined', () => {
        expect(controller.updatePoints).toBeDefined();
    })

    it('updateWins is defined', () => {
        expect(controller.updateWins).toBeDefined();
    })

    it('ResetPoints is defined', () => {
        expect(controller.resetPoints).toBeDefined();
    })


});