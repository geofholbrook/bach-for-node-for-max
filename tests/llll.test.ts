import { generateBachAddChord } from '../src/llll'

describe('llll conversion functions', () => {
    test('single note for bach.roll', () => {
        const message = generateBachAddChord([6000]);
        expect(message).toBe("addchord [0 [6000 500 50]]")
    })

    test('single chord for bach.roll', () => {
        const message = generateBachAddChord([6000, 6700]);
        expect(message).toBe("addchord [0 [6000 500 50] [6700 500 50]]")
    })
})