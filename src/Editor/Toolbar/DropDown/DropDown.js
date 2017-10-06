import React from 'react'
import classNames from 'classnames'

export default class extends React.Component {

  state = {
    open: false,
  }

  toggleState = () => this.setState({ open: !this.state.open })

  render() {
    const { item, api } = this.props
    const { open }      = this.state

    return (
      <span key={item.label || key}
            className={classNames('ql-picker ql-dropdown', { 'ql-expanded': open })}
            onClick={this.toggleState}>
        <span className={'ql-picker-label'} data-label={item.label} />

        <div className={'ql-picker-options'}>
          {item.items.map(item => (
            <div key={item.value}
                 className="ql-picker-item"
                 onClick={() => api().insertText(item.value)}>
              {item.label}
            </div>
          ))}
        </div>
    </span>
    )
  }

}
