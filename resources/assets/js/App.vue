<template>
  <div class="App">
      <Sidebar />
      <main>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
      </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  computed: {
    ...mapGetters({
      siteName: 'getSitename',
    })
  },
  components: {
    Sidebar
  },
  created() {
    console.log('App loaded.')
  }
}
</script>

<style lang="sass">
*
  box-sizing: border-box

body
  background-color: rgb(241, 241, 241)
main
  padding: 15px 15px 0 0
  flex: 2

.App
  display: flex
  height: 100vf

.slide-enter-active, .slide-leave-active
  position: relative
  transition: all 100ms ease
.slide-enter, .slide-leave-active
  opacity: 0
  margin-left: 10px
h1
  margin-top: 0
pre
  padding: 16px
  overflow: auto
  font-size: 85%
  line-height: 1.45
  border-radius: 3px
  border: 0
  margin: 0
</style>

