// @flow
import React from 'react'
import QuillDeltaToHtmlConverter from 'quill-delta-to-html'

export default class extends React.Component {

  props: {
    containerStyle: ?Object,
    containerClass: ?string,
    editorStyle: ?Object,
    editorClass: ?string,
    editorID: ?string,
    modules: ?Object,
  }

  static defaultProps = {
    containerStyle: {},
    containerClass: '',
    editorStyle   : {},
    editorClass   : '',
    editorID      : 'quill-react',
    settings      : {}
  }

  defaultModules = {
    toolbar: true,
  }

  Quill

  editor

  componentDidMount() {
    const { editorID, children, settings: { modules, ...rest } } = this.props

    this.Quill  = require('quill')
    this.editor = new this.Quill(`#${editorID}`, {
      modules: {
        ...this.defaultModules,
        ...modules,
      },
      ...rest,
    })

    if (children) {
      this.editor.clipboard.dangerouslyPasteHTML(children)
    }
  }

  getHTML = () => (new QuillDeltaToHtmlConverter(this.editor.getContents().ops, {})).convert()

  render() {
    const { containerStyle, containerClass, children } = this.props
    const { editorStyle, editorClass, editorID }       = this.props

    return (
      <div style={containerStyle} className={containerClass}>

        <div style={editorStyle} className={editorClass} id={editorID} />

      </div>
    )
  }

}
