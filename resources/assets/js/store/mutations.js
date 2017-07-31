export const setNote = (state, note) => {
  state.newNote = note
}

export const setNotes = (state, notes) => {
  state.notes = notes
}

export const setViewedNote = (state, note) => {
  state.note = note
}

export const addNote = (state, note) => {
  state.notes.push(note)
}
