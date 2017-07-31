<template>
    <card>
      <router-link :to="{ name: 'view', params: { id: note.id }}" class="NoteLink">
        <div v-if="render" v-html="compiledMarkdown"></div>
        <div v-else>
          <div class="Card__title">{{note.title}}</div>
          <div class="Card__body">{{note.text}}</div>
        </div>
      </router-link>
    </card>
</template>

<script>
import marked from 'marked'
import router from '../router'
export default {
  props: ['note', 'render'],
  computed: {
    compiledMarkdown () {
      return marked(this.note.text, { sanitize: true })
    }
  },
  methods: {
    link (id) {
      router.push({ name: 'view', params: { id }})
    }
  }
}
</script>

<style lang="sass">
@import '~sass/variables'
.NoteLink
  color: #333
  display: block
  width: 100%
  height: 100%
  padding: 15px

  &:hover, &:active
    text-decoration: none
    color: #333

  &.router-link-active
    background-color: $brand-primary !important
    color: #fff
    text-decoration: none
</style>
