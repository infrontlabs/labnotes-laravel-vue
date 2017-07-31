<template>
  <div class="Card"><slot></slot></div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style lang="sass">
.Card
  background-color: #fff
  box-shadow: 0 1px 1px rgba(0,0,0,.1)
  padding: 0
  margin-bottom: 5px
  border-radius: 3px

  &__title
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    font-weight: 700
    font-size: 1.2em

  &__body
    font-size: .95em
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
</style>

