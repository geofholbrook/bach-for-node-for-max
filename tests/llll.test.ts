import { generateBachAddChord } from '../src/llll';

describe('llll conversion functions', () => {
    test('single note for bach.roll', () => {
        const message = generateBachAddChord([6000]);
        expect(message).toBe('addchord [0 [6000 500 127]]');
    });

    test('single chord for bach.roll', () => {
        const message = generateBachAddChord([6000, 6700]);
        expect(message).toBe('addchord [0 [6000 500 127] [6700 500 127]]');
    });

    test('adds a chord at a specific onset, duration and velocity', () => {
        const message = generateBachAddChord([6000, 6700], 1000, 250, 90);
        expect(message).toBe('addchord [1000 [6000 250 90] [6700 250 90]]');
    });
});
