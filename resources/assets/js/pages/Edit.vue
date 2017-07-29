<template>
  <div>
    <Editor :editor-id="note" :content="note" v-on:change-content="onChange" v-on:save-content="persistNote"></Editor>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Editor from '../components/Editor'
export default {
  computed: {
    note () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['persistNote']),
    onChange (val) {
      console.log(val)
    }
  },
  components: {
    Editor
  }
}
</script>
