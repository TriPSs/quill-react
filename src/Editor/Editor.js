// @flow
import React from 'react'
import editorAPI from './EditorAPI'

import type { Props, EditorType, ApiType } from './EditorTypes'
import Toolbar from './Toolbar'

export default class extends React.Component {

  TOOLBAR_ID = 'quill-react-toolbar'

  static defaultProps = {
    containerStyle: {},
    containerClass: '',
    editorStyle   : {},
    editorClass   : '',
    editorID      : 'quill-react',
    settings      : {},

    onFocus   : () => {},
    onBlur    : () => {},
    onKeyPress: () => {},
  }

  props: Props

  defaultModules = {
    toolbar: `#${this.TOOLBAR_ID}`,
  }

  defaultToolbarSettings = {
    id : this.TOOLBAR_ID,
    ref: ref => this.toolbarRef = ref,
  }

  Quill

  editor: EditorType

  api: ApiType

  toolbarRef

  componentDidMount() {
    const { editorID, settings: { modules, ...rest } } = this.props

    this.Quill = require('quill')

    this.editor = new this.Quill(`#${editorID}`, {
      modules: this.getModules(modules),
      ...rest,
    })

    this.setAPI()
    this.reset()
  }

  setAPI = (api = editorAPI) => this.api = new api(this.editor, this.props)

  getAPI = () => this.api

  reset = () => {
    const { children } = this.props

    this.api.insertHTML(children || '<div></div>')
  }

  getModules = (modules) => {
    const { toolbar } = modules

    return {
      ...this.defaultModules,
      ...modules,
      toolbar: toolbar && Array.isArray(toolbar)
        ? {
          container: `#${this.TOOLBAR_ID}`,
          items    : toolbar,
        }
        : toolbar,
    }
  }


  getToolbarProps = () => {
    const { settings: { modules: { toolbar } } } = this.props

    if (Array.isArray(toolbar)) {
      return {
        ...this.defaultToolbarSettings,
        items: toolbar,
        api  : this.getAPI,
      }
    }

    return {
      ...this.defaultToolbarSettings,
      ...toolbar,
      api: this.getAPI,
    }
  }

  render() {
    const { containerStyle, containerClass }     = this.props
    const { editorStyle, editorClass, editorID } = this.props
    const { onFocus, onBlur, onKeyPress }        = this.props

    return (
      <div style={containerStyle} className={containerClass}>

        <Toolbar {...this.getToolbarProps()} />

        <div
          {...{ onFocus, onBlur, onKeyPress }}
          style={editorStyle}
          className={editorClass}
          id={editorID} />

      </div>
    )
  }

}
