import React from 'react'
import './O_SearchBar.scss'
import W_SearchMask from '../W_SearchMask/W_SearchMask.jsx';
import M_SearchButton from '../M_SearchButton/M_SearchButton.jsx';

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArray:[]
    }
  }

  handleSearchArray = (array) => {
    if (this.state.searchArray !== array) {
      this.setState({
        searchArray: array
      })
    } //ничего тут не делать а то инфинит луп
  }

  onHandleClick = () => {
  this.props.initSearch()

  }

  render() {
    this.props.handleSearchArray(this.state.searchArray)

    return(<div className='O_SearchBar'>
  <W_SearchMask handleSearchArray={this.handleSearchArray}/>
  <M_SearchButton onClick = {this.onHandleClick}/>
    </div>
    )
  }
}