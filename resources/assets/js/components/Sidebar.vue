<template>
  <div class="Sidebar">
    <div class="Sidebar__Header">
      <div class="Sidebar__HeaderRow">
        <div class="brand">
        </> Lab Notes
        </div>
        <div class="Sidebar__HeaderButton">
          <router-link to="/new" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i></router-link>
        </div>
      </div>
      <div class="Sidebar__HeaderRow">
        <input type="text" class="SearchInput" placeholder="Search" v-model="query" />
      </div>
    </div>
    <div class="Sidebar__Body">
      <Note :key="index" v-for="(note, index) in filteredNotes()" :note="note" :render="false" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Editor from '../components/Editor'
import Note from '../components/Note'
export default {
  props: ['siteName'],
  computed: {
    ...mapGetters({
      'newNote': 'getNewNote',
      'notes': 'notes'
    })
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(['updateNote', 'addNote', 'fetchNotes']),
    filteredNotes() {
      return this.notes.filter((note) => {
        var re = new RegExp(this.query, 'i')
        return (note.text.match(re)) || (note.title.match(re))
      })
    }
  },
  created() {
    this.fetchNotes()
  },
  components: {
    Editor,
    Note
  }
}
</script>

<style lang="sass">
@import '~sass/variables'
.Sidebar
  height: 100vh
  width: 400px
  overflow: scroll
  position: relative
  margin-right: 15px

.Sidebar__Header
  background-color: $brand-highlight
  color: #fff
  position: fixed
  padding: 15px
  width: 400px
  z-index: 1

.Sidebar__HeaderRow
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  margin-bottom: 4px

.Sidebar__HeaderButton .btn
  line-height: 1
  padding: 4px

.SearchInput
  width: 100%
  color: #666
  border: 0
  padding: 4px 8px

.brand
  font-weight: 700
  font-size: 1.2em

.Sidebar__Body
  padding: 95px 0 0
</style>
