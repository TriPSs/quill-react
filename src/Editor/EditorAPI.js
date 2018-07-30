export default class {

  editor
  props

  constructor(editor, props) {
    this.editor = editor
    this.props = props
  }

  getHTML = () => {
    const editor = document.getElementById(this.props.editorID)

    // TODO:: Improve
    return editor.childNodes[0].innerHTML
  }

  insertHTML = html => this.editor.clipboard.dangerouslyPasteHTML(html)

  insertText = (text, givenRange = this.editor.getSelection()) => {
    let range = givenRange

    if (!range) {
      this.editor.focus()

      range = this.editor.getSelection()
    }

    this.editor.insertText(range.index, text)
  }

}
