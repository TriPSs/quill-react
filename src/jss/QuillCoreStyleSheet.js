export default {
  '@global': {
    '.ql-container': {
      boxSizing: 'border-box',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: 13,
      height: '100%',
      margin: 0,
      position: 'relative'
    },
    '.ql-container.ql-disabled .ql-tooltip': {
      visibility: 'hidden'
    },
    '.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before': {
      pointerEvents: 'none'
    },
    '.ql-clipboard': {
      left: -100000,
      height: 1,
      overflowY: 'hidden',
      position: 'absolute',
      top: '50%'
    },
    '.ql-clipboard p': {
      margin: '0',
      padding: '0'
    },
    '.ql-editor': {
      boxSizing: 'border-box',
      lineHeight: '1.42',
      height: '100%',
      outline: 'none',
      overflowY: 'auto',
      padding: '12px 15px',
      tabSize: '4',
      mozTabSize: '4',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word'
    },
    '.ql-editor > *': {
      cursor: 'text'
    },
    '.ql-editor p, .ql-editor ol, .ql-editor ul, .ql-editor pre, .ql-editor blockquote, .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6': {
      margin: '0',
      padding: '0',
      counterReset: 'list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9'
    },
    '.ql-editor ol, .ql-editor ul': {
      paddingLeft: '1.5em'
    },
    '.ql-editor ol > li, .ql-editor ul > li': {
      listStyleType: 'none'
    },
    '.ql-editor ul > li::before': {
      content: '\'\2022\''
    },
    '.ql-editor ul[data-checked=true], .ql-editor ul[data-checked=false]': {
      pointerEvents: 'none'
    },
    '.ql-editor ul[data-checked=true] > li *, .ql-editor ul[data-checked=false] > li *': {
      pointerEvents: 'all'
    },
    '.ql-editor ul[data-checked=true] > li::before, .ql-editor ul[data-checked=false] > li::before': {
      color: '#777',
      cursor: 'pointer',
      pointerEvents: 'all'
    },
    '.ql-editor ul[data-checked=true] > li::before': {
      content: '\'\2611\''
    },
    '.ql-editor ul[data-checked=false] > li::before': {
      content: '\'\2610\''
    },
    '.ql-editor li::before': {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      width: '1.2em'
    },
    '.ql-editor li:not(.ql-direction-rtl)::before': {
      marginLeft: '-1.5em',
      marginRight: '0.3em',
      textAlign: 'right'
    },
    '.ql-editor li.ql-direction-rtl::before': {
      marginLeft: '0.3em',
      marginRight: '-1.5em'
    },
    '.ql-editor ol li:not(.ql-direction-rtl), .ql-editor ul li:not(.ql-direction-rtl)': {
      paddingLeft: '1.5em'
    },
    '.ql-editor ol li.ql-direction-rtl, .ql-editor ul li.ql-direction-rtl': {
      paddingRight: '1.5em'
    },
    '.ql-editor ol li': {
      counterReset: 'list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9',
      counterIncrement: 'list-0'
    },
    '.ql-editor ol li:before': {
      content: 'counter(list-0, decimal) \'. \''
    },
    '.ql-editor ol li.ql-indent-1': {
      counterReset: 'list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-1:before': {
      content: 'counter(list-1, lower-alpha) \'. \''
    },
    '.ql-editor ol li.ql-indent-2': {
      counterReset: 'list-3 list-4 list-5 list-6 list-7 list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-2:before': {
      content: 'counter(list-2, lower-roman) \'. \''
    },
    '.ql-editor ol li.ql-indent-3': {
      counterReset: 'list-4 list-5 list-6 list-7 list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-3:before': {
      content: 'counter(list-3, decimal) \'. \''
    },
    '.ql-editor ol li.ql-indent-4': {
      counterReset: 'list-5 list-6 list-7 list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-4:before': {
      content: 'counter(list-4, lower-alpha) \'. \''
    },
    '.ql-editor ol li.ql-indent-5': {
      counterReset: 'list-6 list-7 list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-5:before': {
      content: 'counter(list-5, lower-roman) \'. \''
    },
    '.ql-editor ol li.ql-indent-6': {
      counterReset: 'list-7 list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-6:before': {
      content: 'counter(list-6, decimal) \'. \''
    },
    '.ql-editor ol li.ql-indent-7': {
      counterReset: 'list-8 list-9'
    },
    '.ql-editor ol li.ql-indent-7:before': {
      content: 'counter(list-7, lower-alpha) \'. \''
    },
    '.ql-editor ol li.ql-indent-8': {
      counterReset: 'list-9'
    },
    '.ql-editor ol li.ql-indent-8:before': {
      content: 'counter(list-8, lower-roman) \'. \''
    },
    '.ql-editor ol li.ql-indent-9': {
      counterIncrement: 'list-9'
    },
    '.ql-editor ol li.ql-indent-9:before': {
      content: 'counter(list-9, decimal) \'. \''
    },
    '.ql-editor .ql-indent-1:not(.ql-direction-rtl)': {
      paddingLeft: '3em'
    },
    '.ql-editor li.ql-indent-1:not(.ql-direction-rtl)': {
      paddingLeft: '4.5em'
    },
    '.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right': {
      paddingRight: '3em'
    },
    '.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right': {
      paddingRight: '4.5em'
    },
    '.ql-editor .ql-indent-2:not(.ql-direction-rtl)': {
      paddingLeft: '6em'
    },
    '.ql-editor li.ql-indent-2:not(.ql-direction-rtl)': {
      paddingLeft: '7.5em'
    },
    '.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right': {
      paddingRight: '6em'
    },
    '.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right': {
      paddingRight: '7.5em'
    },
    '.ql-editor .ql-indent-3:not(.ql-direction-rtl)': {
      paddingLeft: '9em'
    },
    '.ql-editor li.ql-indent-3:not(.ql-direction-rtl)': {
      paddingLeft: '10.5em'
    },
    '.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right': {
      paddingRight: '9em'
    },
    '.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right': {
      paddingRight: '10.5em'
    },
    '.ql-editor .ql-indent-4:not(.ql-direction-rtl)': {
      paddingLeft: '12em'
    },
    '.ql-editor li.ql-indent-4:not(.ql-direction-rtl)': {
      paddingLeft: '13.5em'
    },
    '.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right': {
      paddingRight: '12em'
    },
    '.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right': {
      paddingRight: '13.5em'
    },
    '.ql-editor .ql-indent-5:not(.ql-direction-rtl)': {
      paddingLeft: '15em'
    },
    '.ql-editor li.ql-indent-5:not(.ql-direction-rtl)': {
      paddingLeft: '16.5em'
    },
    '.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right': {
      paddingRight: '15em'
    },
    '.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right': {
      paddingRight: '16.5em'
    },
    '.ql-editor .ql-indent-6:not(.ql-direction-rtl)': {
      paddingLeft: '18em'
    },
    '.ql-editor li.ql-indent-6:not(.ql-direction-rtl)': {
      paddingLeft: '19.5em'
    },
    '.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right': {
      paddingRight: '18em'
    },
    '.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right': {
      paddingRight: '19.5em'
    },
    '.ql-editor .ql-indent-7:not(.ql-direction-rtl)': {
      paddingLeft: '21em'
    },
    '.ql-editor li.ql-indent-7:not(.ql-direction-rtl)': {
      paddingLeft: '22.5em'
    },
    '.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right': {
      paddingRight: '21em'
    },
    '.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right': {
      paddingRight: '22.5em'
    },
    '.ql-editor .ql-indent-8:not(.ql-direction-rtl)': {
      paddingLeft: '24em'
    },
    '.ql-editor li.ql-indent-8:not(.ql-direction-rtl)': {
      paddingLeft: '25.5em'
    },
    '.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right': {
      paddingRight: '24em'
    },
    '.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right': {
      paddingRight: '25.5em'
    },
    '.ql-editor .ql-indent-9:not(.ql-direction-rtl)': {
      paddingLeft: '27em'
    },
    '.ql-editor li.ql-indent-9:not(.ql-direction-rtl)': {
      paddingLeft: '28.5em'
    },
    '.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right': {
      paddingRight: '27em'
    },
    '.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right': {
      paddingRight: '28.5em'
    },
    '.ql-editor .ql-video': {
      display: 'block',
      maxWidth: '100%'
    },
    '.ql-editor .ql-video.ql-align-center': {
      margin: '0 auto'
    },
    '.ql-editor .ql-video.ql-align-right': {
      margin: '0 0 0 auto'
    },
    '.ql-editor .ql-bg-black': {
      backgroundColor: '#000'
    },
    '.ql-editor .ql-bg-red': {
      backgroundColor: '#e60000'
    },
    '.ql-editor .ql-bg-orange': {
      backgroundColor: '#f90'
    },
    '.ql-editor .ql-bg-yellow': {
      backgroundColor: '#ff0'
    },
    '.ql-editor .ql-bg-green': {
      backgroundColor: '#008a00'
    },
    '.ql-editor .ql-bg-blue': {
      backgroundColor: '#06c'
    },
    '.ql-editor .ql-bg-purple': {
      backgroundColor: '#93f'
    },
    '.ql-editor .ql-color-white': {
      color: '#fff'
    },
    '.ql-editor .ql-color-red': {
      color: '#e60000'
    },
    '.ql-editor .ql-color-orange': {
      color: '#f90'
    },
    '.ql-editor .ql-color-yellow': {
      color: '#ff0'
    },
    '.ql-editor .ql-color-green': {
      color: '#008a00'
    },
    '.ql-editor .ql-color-blue': {
      color: '#06c'
    },
    '.ql-editor .ql-color-purple': {
      color: '#93f'
    },
    '.ql-editor .ql-font-serif': {
      fontFamily: 'Georgia, Times New Roman, serif'
    },
    '.ql-editor .ql-font-monospace': {
      fontFamily: 'Monaco, Courier New, monospace'
    },
    '.ql-editor .ql-size-small': {
      fontSize: '0.75em'
    },
    '.ql-editor .ql-size-large': {
      fontSize: '1.5em'
    },
    '.ql-editor .ql-size-huge': {
      fontSize: '2.5em'
    },
    '.ql-editor .ql-direction-rtl': {
      direction: 'rtl',
      textAlign: 'inherit'
    },
    '.ql-editor .ql-align-center': {
      textAlign: 'center'
    },
    '.ql-editor .ql-align-justify': {
      textAlign: 'justify'
    },
    '.ql-editor .ql-align-right': {
      textAlign: 'right'
    },
    '.ql-editor .ql-embed-selected': {
      border: '1px solid #777',
      userSelect: 'none'
    },
    '.ql-editor.ql-blank::before': {
      color: 'rgba(0,0,0,0.6)',
      content: 'attr(data-placeholder)',
      fontStyle: 'italic',
      pointerEvents: 'none',
      position: 'absolute'
    }
  }
}
