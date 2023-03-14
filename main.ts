import _ from 'lodash';
import { outlet } from 'max-api';
import { addChord } from './src/addChord';

outlet('clear');
const pitches = _.shuffle(_.range(6000, 7100, 100));
pitches.forEach((pitch, i) => {
    addChord([pitch], i * 250, 100);
});
