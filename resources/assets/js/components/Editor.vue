<template>
  <div>
    <input type="text" :value="title" class="Editor__TitleInput" @keyup="changeTitle" />
    <div style="height: 500px;" class="Editor">
      <div :id="editorId" style="width: 100%; height: 100%;"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'content', 'lang', 'theme', 'height'],
  data () {
    return {
      editor: Object,
      beforeContent: '',
      editorId: 'edit' + this.id
    }
  },
  methods: {
    save () {
      this.$emit('save-content', this.content)
    },
    changeTitle (e) {
      this.$emit('change-note-title', e.target.value)
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
    this.editor.focus()
    this.editor.setValue(this.content, 1)
    this.editor.setOptions({
      showGutter: false,
      highlightActiveLine: false,
      showPrintMargin: false,
      fontSize: 16,
    })

    // mode-xxx.js or theme-xxx.jsがある場合のみ有効
    this.editor.getSession().setMode(`ace/mode/${lang}`)
    this.editor.setTheme(`ace/theme/${theme}`)

    this.editor.on('change', () => {
    	this.beforeContent = this.editor.getValue()
      this.$emit('change-note-text', this.editor.getValue())
    })
  }
}
</script>

<style lang="sass">
.Editor
  margin-bottom: 10px
  border-bottom: solid 1px #eee
  color: #666

.Editor__TitleInput
  border: 0
  font-size: 1.5em
  font-weight: bold
  width: 100%
  border-bottom: solid 1px #eee
  padding: 4px 8px
  margin-bottom: 15px

.ace_text
  color: #666
</style>


