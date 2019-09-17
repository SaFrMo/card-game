import Card from './Card'

export default {
    BASIC_ATTACK: new Card({ name: 'Basic Attack' }),
    BASIC_MOVE: new Card({ name: 'Move', cost: 1 }),
    BASIC_DEFEND: new Card({ name: 'Brace', cost: 1 })
}
