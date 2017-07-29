export const updateNote = ({commit}, note) => {
  commit('setNote', note)
}

export const addNote = ({commit}, note) => {
  commit('addNote', note)
}

export const persistNote = ({commit}, note) => {
  console.log(note)
}
