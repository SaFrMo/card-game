export const shuffle = (input: Array<any>) => {
    // https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/

    const copy = input.slice()
    let currentIndex: number = copy.length
    let temporaryValue: number, randomIndex: number

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = copy[currentIndex]
        copy[currentIndex] = copy[randomIndex]
        copy[randomIndex] = temporaryValue
    }

    return copy
}
