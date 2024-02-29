import React from 'react'
import './M_SearchSuggestItem.scss'
import A_SuggestItemButton from '../A_SuggestItemButton/A_SuggestItemButton.jsx'

export default class M_SearchSuggestItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: {
        key: this.props.id,
        id: this.props.id,
        name: this.props.name,
        safe: this.props.safe,
        image: this.props.image,
        data: this.props.data
      }
    }
  }

  onClick = () => {
    if(this.props.className == 'M_SearchSuggestItem pinned'){
      this.props.removePinned(this.state.item)
    }
    else{
      this.props.addPinned(this.state.item)
      
    }
    
  }

  

  render() {
    return (
      <div className={this.props.className} >
        <A_SuggestItemButton
          onClick={this.onClick}
          className={this.props.buttonclass}
        />
        <img
          className="A_SearchSuggestItemImage"
          src={this.state.item.image[0].url}
        />
        <p>{this.state.item.name}</p>
      </div>
    )
  }
}
