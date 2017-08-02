<template>
  <card class="EditCard">
    <Editor v-if="note.id"
      editor-id="edit"
      :id="note.id"
      :title="note.title"
      :content="note.text"
      v-on:change-note-text="updateText"
      v-on:change-note-title="updateTitle"
      v-on:save-content="save">
    </Editor>
    <button @click.prevent="save" class="btn btn-primary">Save</button>
    <router-link :to="{ name: 'view', params: { id: note.id }}" class="btn btn-link">Cancel</router-link>

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
    ...mapGetters(['note'])
  },
  components: {Editor, Card},
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.fetchNote(this.$route.params.id)
      this.updateNote(this.note)
    },
    ...mapActions(['updateNote', 'persistNote', 'fetchNote']),
    save: _.debounce(function () {
      this.persistNote(this.note)
      router.push({ name: 'view', params: { id: this.note.id }})
    }, 300),
    updateText (value) {
      this.note.text = value
      this.updateNote(this.note)
    },
    updateTitle (value) {
      this.note.title = value
      this.updateNote(this.note)
    },
  }
}
</script>

<style lang="sass">
.EditCard
  padding: 15px
</style>
