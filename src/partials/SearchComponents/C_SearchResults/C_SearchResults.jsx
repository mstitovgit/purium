import React from 'react'
import './C_SearchResults.scss'
import M_SearchResultsItem from '../M_SearchResultsItem/M_SearchResultsItem.jsx'

export default class C_SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const results = []
    this.props.currentSearch.forEach((el) => {
      results.push(<M_SearchResultsItem itemData={el} />)
    })
   
    return <div className="C_SearchResults">{results}</div>
  }
}
