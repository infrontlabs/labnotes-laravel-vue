<template>
  <div>
    <div class="container">

      <header>
        <h1>Lab Notes</h1>
      </header>

      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      siteName: 'getSitename',
    })
  },
  created() {
    console.log('App loaded.')
  }
}
</script>

<style lang="sass">
body
  background-color: rgb(241, 241, 241)

.slide-enter-active, .slide-leave-active
  position: relative
  transition: all 100ms ease
.slide-enter, .slide-leave-active
  opacity: 0
  margin-left: 10px


</style>

