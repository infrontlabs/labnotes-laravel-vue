<template>
  <div>
    <div style="height: 500px;" class="Editor">
      <div :id="editorId" style="width: 100%; height: 100%;"></div>
    </div>
    <button @click.prevent="save" class="btn btn-primary">Save</button>
    <router-link to="/" class="btn btn-link">Cancel</router-link>
  </div>
</template>

<script>
export default {
  props: ['editorId', 'content', 'lang', 'theme', 'height'],
  data () {
    return {
      editor: Object,
      beforeContent: ''
    }
  },
  methods: {
    save () {
      this.$emit('save-content', this.content)
    }
  },
  watch: {
    'content' (value) {
    	if (this.beforeContent !== value) {
      	this.editor.setValue(value, 1)
      }
    }
  },
  mounted () {
  	const lang = this.lang || 'markdown'
    const theme = this.theme || 'github'

		this.editor = window.ace.edit(this.editorId)
    this.editor.setValue(this.content, 1)
    this.editor.setOptions({
      showGutter: false,
      highlightActiveLine: false,
      showPrintMargin: false
    })

    // mode-xxx.js or theme-xxx.jsがある場合のみ有効
    this.editor.getSession().setMode(`ace/mode/${lang}`)
    this.editor.setTheme(`ace/theme/${theme}`)

    this.editor.on('change', () => {
    	this.beforeContent = this.editor.getValue()
      this.$emit('change-content', this.editor.getValue())
    })
  }
}
</script>

<style lang="sass">
.Editor
  background-color: #fff
  box-shadow: 0 1px 1px rgba(0,0,0,.1)
  padding: 15px
  margin-bottom: 10px
</style>


