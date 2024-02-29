import React from 'react'
import './A_SearchInput.scss'

export default class A_SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    this.state = {
      value: ''
    }
  }

  // componentDidMount (){
  //     this.input.current.addEventListener('keydown', (e) =>{
  //       //  requestText = e.target.value

  //         if (e.key === 'Enter'){
  //             //setSearchRequest(requestText)
  //             
  //         }
  //     })
  // }

  handleInput = () => {
    const { value } = this.input.current
    this.setState({
      value
    })
  }

  handleKeydown = (e) => {
    if (e.key === 'Enter') {
      const { value } = this.state
      const { handleSearchSubmit } = this.props

      handleSearchSubmit(value)
    }
  }

  render() {
    const { value } = this.state
    return (
      <input
        className="A_SearchInput"
        ref={this.input}
        value={value}
        onInput={this.handleInput}
        onKeyDown={this.handleKeydown}
      />
    )
  }
}
