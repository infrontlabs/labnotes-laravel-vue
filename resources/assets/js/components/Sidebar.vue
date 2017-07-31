<template>
  <div class="Sidebar">
    <div class="Sidebar__Header">
      <div class="brand">
       </> Lab Notes
      </div>
      <div class="Sidebar__HeaderButton">
        <router-link to="/new" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i></router-link>
      </div>
    </div>
    <div class="Sidebar__Body">
      <Note :key="index" v-for="(note, index) in notes" :note="note" :render="false" />
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
  methods: {
    ...mapActions(['updateNote', 'addNote', 'fetchNotes'])
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
  display: flex
  align-items: center
  justify-content: space-between
  z-index: 1

.Sidebar__HeaderButton .btn
  line-height: 1
  padding: 4px

.brand
  font-weight: 700
  font-size: 1.2em

.Sidebar__Body
  padding: 65px 0 0
</style>
