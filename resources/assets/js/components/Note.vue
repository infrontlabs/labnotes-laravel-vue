<template>
  <div v-on:mouseover="showDelete = true" v-on:mouseout="showDelete = false">
    <card>
      <router-link :to="{ name: 'view', params: { id: note.id }}" class="NoteLink">
        <div
          :class="{ 'Note__delete': true,  'Note__delete--active': showDelete}"
          v-on:click="deleteNote(note.id)">
          <i class="glyphicon glyphicon-remove"></i>
        </div>
        <div class="Card__title">{{note.title}}</div>
        <div class="Card__body">{{note.text}}</div>
        <div class="Card__date">{{formattedDate}}</div>
      </router-link>
    </card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import marked from 'marked'
import router from '../router'
import moment from 'moment'
export default {
  props: ['note', 'render'],
  data () {
    return {
      showDelete: false
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.note.text, { sanitize: true })
    },
    formattedDate () {
      return moment(this.note.updated_at).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  methods: {
    ...mapActions(['deleteNote'])
  }
}
</script>

<style lang="sass">
@import '~sass/variables'

.Card
  position: relative

.Card__date
  font-size: .8em
  color: #ccc

.Note__delete
  position: absolute
  padding: 5px 10px
  top: 0
  right: 0
  color: #000
  display: none
  transition: all 250ms ease

  &:hover
    color: #fff
    background-color: #333

  &--active
    display: inline

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
