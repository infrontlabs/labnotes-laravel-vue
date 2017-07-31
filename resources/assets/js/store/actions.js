import axios from 'axios'
import router from '../router'

export const updateNote = ({commit}, note) => {
  commit('setNote', note)
}

export const addNote = ({commit}, note) => {
  commit('addNote', note)
  router.push({name: 'Home'})
}

export const persistNote = ({commit}, note) => {
  axios.post(`http://localhost:9001/api/notes/${note.id}`, note)
    .then((response) => {
      console.log(response)
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
