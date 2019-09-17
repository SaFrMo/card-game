export default class Card {
    constructor(opts = {}) {
        // defaults
        Object.assign(opts, {
            name: 'test'
        });
        // set values
        this.name = opts.name;
    }
}
