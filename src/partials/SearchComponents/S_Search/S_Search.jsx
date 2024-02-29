import React, { useState } from 'react'
import './S_Search.scss'
import O_SearchBar from '../O_SearchBar/O_SearchBar.jsx'
import C_SearchResults from '../C_SearchResults/C_SearchResults.jsx'

export default class S_Search extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
    searchArray :[],
    currentSearch: []
    }
  }

  handleSearchArray = (array) => {
    if (this.state.searchArray !== array) {
      this.setState({
        searchArray: array
      })
      
    } //ничего тут не делать а то инфинит луп
  }


  initSearch = () =>{
    this.setState ({
      currentSearch:this.state.searchArray
    })
    

  }

  render() {
    return (
      <div className='S_Search'>
        <O_SearchBar initSearch={this.initSearch} handleSearchArray={this.handleSearchArray}/>
        <C_SearchResults currentSearch ={this.state.currentSearch}/>
      </div>
    )
  }
}
