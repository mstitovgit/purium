import React from 'react'
import './M_SearchButton.scss'

export default class M_SearchButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let buttontext = 'проверить ->'
    return(<button className='M_SearchButton' onClick={this.props.onClick}>
    {buttontext}
    </button>
    )
  }
}