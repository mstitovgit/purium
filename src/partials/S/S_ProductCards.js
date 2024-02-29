

import { getItemsData } from '../../database.js'



var items = []

getItemsData().then((array) => {
  items = array
  SetPopProductCards()
  SetAltProductCards()
})

function SetPopProductCards() {
  if (document.getElementById('PopularItems')){
  for (let index = 0; index < 10; index++) {
    let newElement = document.createElement('div')

    newElement.classList = 'O_ProductCard'
    let MarkIconClass = 'MarkIcon danger'
    let MarkTextClass = "MarkText danger"
    let MarkText = 'чем опасен'
    let Mark = 'A_Mark danger'
    newElement.innerHTML = `
    <div class='${Mark}'>
          <div class="${MarkIconClass}"></div>
          <p class="${MarkTextClass}">${MarkText}</p>
        </div>

        <div class = 'W_ProdCard'>
        <img src='${items[index].image[0].url}' class="A_ItemImage"/>
        </div>

        <p class="A_ItemName short">${items[index].name}</p>

        <div class="M_ItemInfo hide"> ${items[index].data}
          
        </div>
    `
   document.getElementById('PopularItems').appendChild(newElement)
    
  }}
  CardsSides()
}


function CardsSides () {
const ProdCardInfoButtons = document.getElementsByClassName('A_Mark')

for (let index = 0; index < ProdCardInfoButtons.length; index++) {
  const element = ProdCardInfoButtons[index]
  element.addEventListener('click', () => {
    if (element.classList == 'A_Mark danger') {
      element.classList = 'A_Mark info'
      element.parentElement.classList.add('info')
      element.lastElementChild.classList = 'MarkText info'
      element.firstElementChild.classList = 'MarkIcon info'
      element.lastElementChild.textContent = '<- перевернуть'
    } else if (element.classList == 'A_Mark info') {
      element.classList = 'A_Mark danger'
      element.parentElement.classList = 'O_ProductCard'
      element.lastElementChild.classList = 'MarkText danger'

      element.lastElementChild.textContent = 'чем опасен?'
    }
  })
}
}

function SetAltProductCards() {
  if (document.getElementById('PopularItems')){
  for (let index = 0; index < 10; index++) {
    let newElement = document.createElement('div')

    
    newElement.classList = 'O_ProductCard'
    let MarkIconClass = 'MarkIcon safe'
    let MarkTextClass = "MarkText safe"
    let MarkText = 'безопасен'
    let Mark = 'A_Mark safe'
    newElement.innerHTML = `
    <div class='${Mark}'>
          <div class="${MarkIconClass}"></div>
          <p class="${MarkTextClass}">${MarkText}</p>
        </div>

        <div class = 'W_ProdCard'>
        <img src='${items[index].image[0].url}' class="A_ItemImage"/>
        </div>

        <p class="A_ItemName short">${items[index].name}</p>
          
        </div>
    `
   document.getElementById('PopularAltItems').appendChild(newElement)
  }}
}