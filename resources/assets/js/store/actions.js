import axios from 'axios'
import router from '../router'

const BASE_API_URL = process.env.MIX_BASE_API_URL

export const updateNote = ({commit, dispatch}, note) => {
  commit('setNote', note)
}

export const addNote = ({commit}, note) => {
  commit('addNote', note)
  router.push({name: 'Home'})
}

export const persistNote = ({commit, dispatch}, note) => {
  axios.put(`${BASE_API_URL}/dev/notes/${note.id}`, note)
    .then((response) => {
      dispatch('fetchNotes')
    })
}

export const persistNewNote = ({commit, dispatch}, note) => {
  return axios.post(`${BASE_API_URL}/dev/notes`, note)
    .then((response) => {
      commit('resetNewNote')
      dispatch('fetchNotes')
      return response.data
    })
}

export const fetchNotes = ({commit}) => {
  axios.get(`${BASE_API_URL}/dev/notes`)
    .then((response) => {
      commit('setNotes', response.data)
    })
}

export const fetchNote = ({commit}, id) => {
  return axios.get(`${BASE_API_URL}/dev/notes/${id}`)
    .then((response) => {
      commit('setViewedNote', response.data)
    })
}

export const deleteNote = ({commit, dispatch}, id) => {
  commit('removeNote', id)
  axios.delete(`${BASE_API_URL}/dev/notes/${id}`)
}
