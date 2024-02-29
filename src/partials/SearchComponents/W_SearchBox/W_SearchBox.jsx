import React from 'react'
import './W_SearchBox.scss'
import A_SearchInput from '../A_SearchInput/A_SearchInput.jsx'
import C_SearchSuggestions from '../C_SearchSuggestions/C_SearchSuggestions.jsx'

export default class W_SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      searchArray: [],
      toggleSuggest: false
      
    }
    
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }


  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState ({
        toggleSuggest : false
      })
    }
  }
 

  updateSuggestion = (value) => {
    this.setState({
      value: value
    })
  }

  handleSearchArray = (array) => {
    if (this.state.searchArray !== array) {
      this.setState({
        searchArray: array,
      })
    } //ничего тут не делать а то инфинит луп
  }

toggleSuggest = () =>{
this.setState ({
  toggleSuggest : true
})
}
  


  

  render() {
    this.props.handleSearchArray(this.state.searchArray)
    return (
      <div className="W_SearchBox" onClick={this.toggleSuggest} ref={this.wrapperRef}>
        <A_SearchInput
          onUpdate={this.updateSuggestion}
         
        />
        <C_SearchSuggestions
          toggleSuggest = {this.state.toggleSuggest}
          value={this.state.value}
          searchArray={this.handleSearchArray}
        />
      </div>
    )
  }
}
