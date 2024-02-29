import React from 'react'
import './M_SearchResultsItem.scss'

export default class M_SearchResultsItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
         
    let safe ='MarkIcon danger full' ;
    let safedescriptor = 'чем опасен'
    if (this.props.itemData.props.safe){
      safe = 'MarkIcon safe full'
      safedescriptor = 'безопасен'
    }
  
    return (
      
      <div className="M_SearchResultsItem">
        <div className={safe}></div>
       <div className='W_ResItemImage'> <img src={this.props.itemData.props.image[0].url} className="A_ItemImage full"/> </div>
        <div className="W_ItemName">
          <p className="A_DataDescriptor">название продукта</p>
          <p className="A_ItemName">{this.props.itemData.props.name}</p>
        </div>
        <div className="W_ItemInfo">
        <p className="A_DataDescriptor">{safedescriptor}</p>
          <div className="M_ItemInfo full" dangerouslySetInnerHTML={{__html: this.props.itemData.props.data}}>
            
          </div>
        </div>
      </div>
    )
  }
}
