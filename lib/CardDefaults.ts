import Card from './Card'

export default {
    BASIC_ATTACK: new Card({
        name: 'Basic Attack',
        text: 'Deal %n damage.',
        effect: { type: 'attack', amount: 1 }
    }),
    BASIC_MOVE: new Card({ name: 'Move', cost: 1 }),
    BASIC_DEFEND: new Card({
        name: 'Brace',
        cost: 1,
        flavorText: 'Get ready!',
        text: 'Block %n damage.'
    })
}
