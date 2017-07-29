<template>
  <div>
    <Editor editor-id="new" :content="newNote.text" v-on:change-content="updateNote" v-on:save-content="addNote"></Editor>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Editor from '../components/Editor'
export default {
  computed: {
    ...mapGetters({
      'newNote': 'getNewNote'
    })
  },
  methods: {
    ...mapActions(['updateNote', 'addNote'])
  },
  components: {
    Editor
  }
}
</script>
