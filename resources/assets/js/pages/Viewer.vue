<template>
  <card>
    <div class="ViewCard">
      <div class="ViewCard__Date">
        {{formattedDate}}
      </div>
      <h3 class="ViewCard__Title">{{note.title}}</h3>
      <div v-html="compiledMarkdown"></div>
      <div class="ViewCard__Footer">
        <router-link :to="{ name: 'edit', params: { id: note.id }}" class="btn btn-primary">Edit</router-link>
      </div>
    </div>
  </card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from  '../components/Card'
import marked from 'marked'
import moment from 'moment'
import _ from 'lodash'

export default {
  computed: {
    ...mapGetters(['note']),
    compiledMarkdown: function () {
      return marked(this.note.text)
    },
    formattedDate () {
      return moment(this.note.updated_at).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  components: {Card},
  created () {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        console.log(code)
        return require('highlight.js').highlightAuto(code).value;
      }
    })
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
    ...mapActions(['fetchNote'])
  }
}
</script>

<style lang="sass">
.ViewCard
  padding: 15px

.ViewCard__Title
  margin-top: 0

.ViewCard__Footer
  border-top: solid 1px #eee
  padding-top: 10px

.ViewCard__Date
  font-size: .85em
  color: #ccc
  margin-bottom: 10px

</style>
