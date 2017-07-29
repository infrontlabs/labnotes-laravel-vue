export const setNote = (state, note) => {
  state.newNote = note
}

export const addNote = (state, note) => {
  state.notes.push({
    text: note
  })
}
