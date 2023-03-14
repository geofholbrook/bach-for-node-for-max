export function generateBachAddChord(pitches: number[]) {
    const formattedNotes = pitches.map((p) => `[${p} 500 50]`);

    return `addchord [0 ${formattedNotes.join(' ')}]`;
}
