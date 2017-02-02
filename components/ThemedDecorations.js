import React from 'react'

class ThemedDecorations extends React.Component {
  render () {
    const partyTheme = this.props.theme
    const childrenWithTheme = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: partyTheme
      })
    })
    debugger


    return (

      <div>
        {childrenWithTheme}
      </div>
    )
  }
}

module.exports = ThemedDecorations
