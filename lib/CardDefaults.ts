import Card from './Card'

export default {
    BASIC_ATTACK: new Card({
        name: 'Action 1',
        text: 'Deal %n damage.',
        effect: { type: 'attack', amount: 1 }
    }),
    BASIC_MOVE: new Card({ name: 'Move', cost: 1 }),
    BASIC_DEFEND: new Card({
        name: 'Action 2',
        cost: 1,
        flavorText: 'Get ready!',
        text: 'Block %n damage.'
    })
}
