const Pet = require("../virtual-pet/virtualpet");

describe("Pet", () => {
    it("Returns an object", () => {
        expect(new Pet('Chairms')).toBeInstanceOf(Object);
    });
});