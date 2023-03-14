export function generateBachAddChord(pitches: number[], onset = 0, duration = 500, velocity = 127) {
    const formattedNotes = pitches.map((p) => `[${p} ${duration} ${velocity}]`);
    return `addchord [${onset} ${formattedNotes.join(' ')}]`;
}
