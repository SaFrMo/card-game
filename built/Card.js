var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Card {
    //https://gist.github.com/ericelliott/f3c2a53a1d4100539f71
    constructor({ name = 'Card Name', cost = 0, text = '', flavorText = '', effect = {
        type: 'attack',
        amount: 1
    }, onBeforePlay = [], onPlay = [], onAfterPlay = [] } = {}) {
        // set values
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.effect = effect;
        this.flavorText = flavorText;
        this.onBeforePlay = onBeforePlay;
        this.onPlay = onPlay;
        this.onAfterPlay = onAfterPlay;
    }
    play(args, { skipBefore = false, skip = false, skipAfter = false } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!skipBefore) {
                for (let cb of this.onBeforePlay.filter(Boolean)) {
                    yield cb(this, args);
                }
            }
            if (!skip) {
                for (let cb of this.onPlay.filter(Boolean)) {
                    yield cb(this, args);
                }
            }
            if (!skipAfter) {
                for (let cb of this.onAfterPlay.filter(Boolean)) {
                    yield cb(this, args);
                }
            }
        });
    }
}
