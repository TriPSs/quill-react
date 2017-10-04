// @flow

export type Props = {
  containerStyle: ?Object,
  containerClass: ?string,
  editorStyle: ?Object,
  editorClass: ?string,
  editorID: ?string,
  modules: ?Object,
}

export type EditorType = {
  buildEditor: () => void,
  setAPI: (api: ApiType) => void,
  reset: () => void,
}

export type ApiType = {
  getHTML: () => string,
  insertHTML: (html: string) => void,
}
