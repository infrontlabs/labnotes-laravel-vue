<template>
  <card class="EditCard">
    <Editor
      id="new"
      :title="note.title"
      :content="note.text"
      v-on:change-note-text="updateText"
      v-on:change-note-title="updateTitle"
      v-on:save-content="save">
    </Editor>
    <button @click.prevent="save" class="btn btn-primary">Save</button>
    <router-link to="/" class="btn btn-link">Cancel</router-link>
  </card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Editor from '../components/Editor'
import Card from  '../components/Card'
import _ from 'lodash'
import router from '../router'

export default {
  computed: {
    ...mapGetters({
      note: 'getNewNote'
    })
  },
  components: {Editor, Card},
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions(['updateNote', 'persistNewNote', 'fetchNote']),
    save: _.debounce(function () {
      const req = this.persistNewNote(this.note)
      req.then((note) => {
        console.log(note.id)
        router.push({ name: 'view', params: { id: note.id }})
      })
    }, 1000),
    updateText: _.debounce(function (value) {
      this.note.text = value
    }, 300),
    updateTitle: _.debounce(function (value) {
      this.note.title = value
    }, 300)
  }
}
</script>

<style lang="sass">
.EditCard
  padding: 15px
</style>
