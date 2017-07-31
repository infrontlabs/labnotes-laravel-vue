import axios from 'axios'
import router from '../router'

export const updateNote = ({commit, dispatch}, note) => {
  commit('setNote', note)
}

export const addNote = ({commit}, note) => {
  commit('addNote', note)
  router.push({name: 'Home'})
}

export const persistNote = ({commit, dispatch}, note) => {
  axios.post(`http://localhost:9001/api/notes/${note.id}`, note)
    .then((response) => {
      dispatch('fetchNotes')
    })
}

export const persistNewNote = ({commit, dispatch}, note) => {
  return axios.post(`http://localhost:9001/api/notes`, note)
    .then((response) => {
      commit('resetNewNote')
      dispatch('fetchNotes')
      return response.data
    })
}

export const fetchNotes = ({commit}) => {
  axios.get('http://localhost:9001/api/notes')
    .then((response) => {
      commit('setNotes', response.data)
    })
}

export const fetchNote = ({commit}, id) => {
  axios.get(`http://localhost:9001/api/notes/${id}`)
    .then((response) => {
      commit('setViewedNote', response.data)
    })
}

export const deleteNote = ({commit, dispatch}, id) => {
  commit('removeNote', id)
  axios.delete(`http://localhost:9001/api/notes/${id}`)
}
