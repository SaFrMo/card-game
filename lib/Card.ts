export default class Card {
    name: string

    constructor(opts: any = {}) {
        // defaults
        Object.assign(opts, {
            name: 'test'
        })

        // set values
        this.name = opts.name
    }
}
