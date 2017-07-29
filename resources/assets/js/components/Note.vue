<template>
  <div class="Note">
      <div v-html="compiledMarkdown"></div>

  </div>
</template>

<script>
import marked from 'marked'
export default {
  props: ['note'],
  computed: {
    compiledMarkdown () {
      return marked(this.note.text, { sanitize: true })
    }
  }
}
</script>

<style lang="sass">
.Note
  background-color: #fff
  box-shadow: 0 1px 1px rgba(0,0,0,.1)
  padding: 15px
  margin-bottom: 10px
</style>

