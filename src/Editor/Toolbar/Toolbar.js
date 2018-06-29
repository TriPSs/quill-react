import React from 'react'
import { defaultItems } from './ToolbarConstants'

import DropDown from './DropDown'

export default class extends React.Component {

  static defaultProps = {
    items: defaultItems,
  }

  renderDropDown = (item, key) => (<DropDown {...{ item, key, api: this.props.api }} />)

  renderGroup = (item, key) => (
    <span
      key={item.label || key}
      className={'ql-formats'}>
      {item.items.map(this.renderItem)}
    </span>
  )

  renderChoiceItem = (item, key) => (
    <option
      key={item.label || item.value || key}
      value={item.value}>
      {item.label}
    </option>
  )

  renderChoices = (item, key) => {
    const attrs = {
      key      : item.label || key,
      title    : item.label,
      className: `ql-${item.type}`,
    }

    const choiceItems = item.items.map((item, key) => {
      if (item.selected) {
        attrs.defaultValue = item.value
      }

      return this.renderChoiceItem(item, key)
    })

    return <select {...attrs}>{choiceItems}</select>
  }

  renderButton = (item, key) => {
    return (
      <button
        type='button'
        key={item.label || item.value || key}
        value={item.value}
        className={`ql-${item.type}`}
        title={item.label}
      >
        {item.children}
      </button>
    )
  }

  renderAction = (item, key) => {
    return (
      <span
        key={item.label || item.value || key}
        className={`ql-${item.type}`}
        title={item.title}>
        {item.children}
      </span>
    )
  }

  renderItem = (item, key) => {
    switch (item.type) {
      case 'dropdown':
        return this.renderDropDown(item, key)
      case 'group':
        return this.renderGroup(item, key)
      case 'font':
      case 'header':
      case 'align':
      case 'size':
      case 'color':
      case 'background':
      case 'choices':
        return this.renderChoices(item, key)
      case 'bold':
      case 'italic':
      case 'underline':
      case 'strike':
      case 'link':
      case 'list':
      case 'bullet':
      case 'ordered':
      case 'indent':
      case 'image':
      case 'video':
        return this.renderButton(item, key)
      default:
        return this.renderAction(item, key)
    }
  }

  render() {
    const { id, items, className } = this.props

    return (
      <div id={id} className={`quill-toolbar ${className}`}>
        {items.map(this.renderItem)}
      </div>
    )
  }

}
