// @flow

export type Props = {
  containerStyle: ?Object,
  containerClass: ?string,
  editorStyle: ?Object,
  editorClass: ?string,
  editorID: ?string,
  modules: ?Object,

  onFocus: () => void,
  onBlur: () => void,
  onKeyPress: () => void,
}

export type ApiType = {
  getHTML: () => string,
  insertHTML: (html: string) => void,
  insertText: (text: string, range: ?number) => void,
}

export type EditorType = {
  buildEditor: () => void,
  setAPI: (api: ApiType) => void,
  reset: () => void,
}
