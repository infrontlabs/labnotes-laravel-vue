<template>
  <card class="ViewCard">
    <h3 class="ViewCard__Title">{{note.title}}</h3>
    <div v-html="compiledMarkdown"></div>
    <div class="ViewCard__Footer">
      <router-link :to="{ name: 'edit', params: { id: note.id }}" class="btn btn-primary">Edit</router-link>
    </div>
  </card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from  '../components/Card'
import marked from 'marked'
import _ from 'lodash'
export default {
  computed: {
    ...mapGetters(['note']),
    compiledMarkdown: function () {
      return marked(this.note.text, { sanitize: true })
    }
  },
  components: {Card},
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
    ...mapActions(['fetchNote'])
  }
}
</script>

<style lang="sass">
.ViewCard
  padding: 15px

.ViewCard__Title
  margin-top: 0
</style>
