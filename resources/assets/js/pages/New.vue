<template>
  <card class="EditCard">
    <Editor
      :id="null"
      title="New note"
      content="// New note"
      v-on:change-content="update"
      v-on:save-content="save">
    </Editor>
    <button @click.prevent="save" class="btn btn-primary">Save</button>
    <router-link to="/" class="btn btn-link">Cancel</router-link>
  </card>
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
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
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
