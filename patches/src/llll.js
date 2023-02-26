"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBachAddChord = void 0;
function generateBachAddChord(pitches) {
    var formattedNotes = pitches.map(function (p) { return "[".concat(p, " 500 50]"); });
    return "addchord [0 ".concat(formattedNotes.join(' '), "]");
}
exports.generateBachAddChord = generateBachAddChord;
