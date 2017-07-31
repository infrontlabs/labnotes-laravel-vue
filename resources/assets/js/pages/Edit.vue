<template>
  <card class="EditCard">
    <Editor v-if="note.id"
      editor-id="edit"
      :id="note.id"
      :title="note.title"
      :content="note.text"
      v-on:change-content="update"
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
    },
    ...mapActions(['updateNote', 'addNote', 'fetchNote']),
    save: _.debounce(function (value) {
      this.addNote({
        id: null,
        text: value
      })
    }, 1000),
    update: _.debounce(function (value) {
      this.updateNote({
        id: null,
        text: value
      })
    }, 300)
  }
}
</script>

<style lang="sass">
.EditCard
  padding: 15px
</style>
