import React from 'react'
import './C_SearchSuggestions.scss'
import M_SearchSuggestItem from '../M_SearchSuggestItem/M_SearchSuggestItem.jsx'
import { getItemsData } from '../../../database.js'

export default class C_SearchSuggestions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      value: '',
      pinned: []
    }
  }
  //set items
  componentDidMount() {
    getItemsData().then((items) => {
      this.setState({
        items: items
      })
    })
  }

  //AddPinned
  addPinned = (item) => {
    const newitem = (
      <M_SearchSuggestItem
        key={item.key}
        id={item.id}
        data={item.data}
        className="M_SearchSuggestItem pinned"
        name={item.name}
        image={item.image}
        safe={item.safe}
        tags={item.tags}
        buttonclass="A_SuggestItemButton Remove"
        removePinned={this.removePinned}
      />
    )
    //const key = item.key
    this.setState({
      pinned: [...this.state.pinned, { ...newitem }]
    })
  }

  //RemovePinned
  removePinned = (item) => {
    this.setState({
      pinned: this.state.pinned.filter((el) => el.props.name !== item.name)
    })
  }

  render() {
    const suggests = []
    if (this.state.pinned.length > 0) {
      this.props.searchArray(this.state.pinned)
    }
    //Сравнение базы с инпутом и проверка длины инпута
    let count = 0

    this.state.items.forEach((item) => {
      if (count < 5) {
        if (
          item.name.toLowerCase().includes(this.props.value.toLowerCase()) &&
          this.props.value.length > 0
        ) {
          let c = 0
          //проверка есть ли элемент в пине и вообще есть ли пин
          if (this.state.pinned.length > 0) {
            this.state.pinned.forEach((el) => {
              if (item.name == el.props.name) {
                c = c + 1
              }
            })
            if (c == 0) {
              count = count + 1;
              suggests.push(
                <M_SearchSuggestItem
                  className="M_SearchSuggestItem"
                  addPinned={this.addPinned}
                  data={item.data}
                  removePinned={this.removePinned}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  safe={item.safe}
                  tags={item.tags}
                  buttonclass="A_SuggestItemButton Add"
                />
              )
            } else {
              c = 0
            }
          } else {
            count = count + 1;
            suggests.push(
              <M_SearchSuggestItem
                className="M_SearchSuggestItem"
                data={item.data}
                addPinned={this.addPinned}
                removePinned={this.removePinned}
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                safe={item.safe}
                tags={item.tags}
                buttonclass="A_SuggestItemButton Add"
              />
            )
          }
        }
      }
    })

    let showSuggest = 'C_SearchSuggestions'
    if (this.props.toggleSuggest) {
      showSuggest = 'C_SearchSuggestions'
    } else {
      showSuggest = 'C_SearchSuggestions hide'
    }
    return (
      <div className={showSuggest}>
        <div>{this.state.pinned}</div>
        <div>{suggests}</div>
      </div>
    )
  }
}
