import React from 'react'
import './W_SearchMask.scss'
import W_SearchBox from '../W_SearchBox/W_SearchBox.jsx';

export default class W_SearchMask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArray:[],
    }
  }

  handleSearchArray = (array) => {
    if (this.state.searchArray !== array) {
      this.setState({
        searchArray: array
      })
      
    } //ничего тут не делать а то инфинит луп
  }

  

  render() {
    this.props.handleSearchArray(this.state.searchArray)
    return(<div className='W_SearchMask' >
    <W_SearchBox handleSearchArray = {this.handleSearchArray} />
    </div>
    )
  }
}