// @flow
import QuillDeltaToHtmlConverter from 'quill-delta-to-html'

export default class {

  editor

  constructor(editor) {
    this.editor = editor
  }

  getHTML = () => (new QuillDeltaToHtmlConverter(this.editor.getContents().ops, {})).convert()

  insertHTML = html => this.editor.clipboard.dangerouslyPasteHTML(html)

  insertText = (text, givenRange = this.editor.getSelection()) => {
    let range = givenRange

    if (!range) {
      this.editor.focus()

      range = this.editor.getSelection()
    }

    this.editor.insertText(range.index, text);
  }

}
