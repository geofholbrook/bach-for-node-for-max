import { outlet } from 'max-api';
import { generateBachAddChord } from './llll';

export function addChord(pitches: number[], onset = 0, duration = 500, velocity = 127) {
    outlet(...generateBachAddChord(pitches, onset, duration, velocity).split(' '));
}
