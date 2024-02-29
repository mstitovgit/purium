import React from 'react'
import './A_SuggestItemButton.scss'

export default class A_SuggestItemButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(<div className={this.props.className} onClick={this.props.onClick}>
  
    </div>
    )
  }
}