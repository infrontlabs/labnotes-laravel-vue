<template>
  <div>
    <router-link to="/new" class="btn btn-primary">New</router-link>
    <Note :key="index" v-for="(note, index) in notes" :note="note" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Editor from '../components/Editor'
import Note from '../components/Note'
export default {
  props: ['siteName'],
  computed: {
    ...mapGetters({
      'newNote': 'getNewNote',
      'notes': 'notes'
    })
  },
  methods: {
    ...mapActions(['updateNote', 'addNote'])
  },
  components: {
    Editor,
    Note
  }
}
</script>

<style lang="sass">
</style>
