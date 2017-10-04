// @flow
import QuillDeltaToHtmlConverter from 'quill-delta-to-html'

export default class {

  quill

  constructor(quill) {
    this.quill = quill
  }

  getHTML = () => (new QuillDeltaToHtmlConverter(this.quill.getContents().ops, {})).convert()

  insertHTML = html => this.quill.clipboard.dangerouslyPasteHTML(html)

}
