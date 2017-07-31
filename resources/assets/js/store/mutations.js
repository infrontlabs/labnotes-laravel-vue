import _findIndex from 'lodash/findIndex'

export const setNote = (state, payload) => {
  let noteIndex = _findIndex(state.notes, {id: payload.id})
  state.notes[noteIndex].text = payload.text
  state.notes[noteIndex].title = payload.title
}

export const setNotes = (state, notes) => {
  state.notes = notes
}

export const setViewedNote = (state, note) => {
  state.note = note
}

export const resetNewNote = (state) => {
  state.newNote = {
    text: '',
    title: 'New note'
  }
}

export const addNote = (state, note) => {
  state.notes.push(note)
}
