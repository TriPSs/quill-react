// @flow
import React from 'react'
import editorAPI from './EditorAPI'

import type { Props, EditorType, ApiType } from './EditorTypes'

export default class extends React.Component {

  props: Props

  static defaultProps = {
    containerStyle: {},
    containerClass: '',
    editorStyle   : {},
    editorClass   : '',
    editorID      : 'quill-react',
    settings      : {},
  }

  defaultModules = {
    toolbar: true,
  }

  Quill

  editor: EditorType

  api: ApiType

  componentDidMount() {
    const { editorID, settings: { modules, ...rest } } = this.props

    this.Quill = require('quill')

    this.editor = new this.Quill(`#${editorID}`, {
      modules: {
        ...this.defaultModules,
        ...modules,
      },
      ...rest,
    })

    this.setAPI()
    this.reset()
  }

  setAPI = (api = editorAPI) => this.api = new api(this.editor, this.props)

  reset = () => {
    const { children } = this.props

    this.api.insertHTML(children || '<div></div>')
  }

  render() {
    const { containerStyle, containerClass }     = this.props
    const { editorStyle, editorClass, editorID } = this.props

    return (
      <div style={containerStyle} className={containerClass}>

        <div style={editorStyle} className={editorClass} id={editorID} />

      </div>
    )
  }

}
