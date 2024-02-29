import React from 'react'
import './A_SearchInput.scss'

export default class A_SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      userInput: ''
    }
  }


  handleChange = (event) => {
  this.setState({
    userInput: event.target.value
  })
   this.props.onUpdate(event.target.value)

  }

  
  
  
  render() {
    return(
    <div className='A_SearchInputWrap'>
      <input className='A_SearchInput' placeholder ='проверить продукт' onChange= {this.handleChange} />
    </div>
    )
  }
}