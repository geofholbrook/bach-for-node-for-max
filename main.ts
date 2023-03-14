import { outlet } from 'max-api';
import { generateBachAddChord } from './src/llll';

outlet('clear');
outlet(...generateBachAddChord([6000, 6400, 6700, 7100]).split(' '));
