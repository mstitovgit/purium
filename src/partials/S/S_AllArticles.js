import { getArticlesData } from '../../database.js'
const CategoryItems = document.getElementsByClassName('M_CategoryItem')
const CategoryItemsContainer = document.getElementById(
  'O_CategoryItemsContainer'
)
const CategoryFilterButton = document.getElementById('CategoryFilterButton')
const W_Filter = document.getElementById('W_Filter')
let filtertag = 'all'
let articles = []
let cards = []
let currentarticleid

SetFilter()

getArticlesData().then((array) => {
  localStorage.setItem('articles', array)
  articles = array
  SetAllArticleCards()
  AddListenersOnCards()
})

// Функции

function SetFilterTag(tag) {
  filtertag = tag
  SetAllArticleCards()
}

function SetTagByFilter(text) {
  if (text == 'уборка') {
    SetFilterTag('Clean')
  } else if (text == 'уход') {
    SetFilterTag('Care')
  } else if (text == 'еда&вода') {
    SetFilterTag('Food')
  } else if (text == 'сон&уют') {
    SetFilterTag('Bedroom')
  } else if (text == 'ароматы') {
    SetFilterTag('Aroma')
  } else if (text == 'все статьи') {
    SetFilterTag('all')
  }
}

// -> UpdateElements, RemoveCards, SetTagByFilter
function SetFilter() {
  for (let index = 0; index < CategoryItems.length; index++) {
    const element = CategoryItems[index]
    element.addEventListener('click', () => {
      if (element.classList == 'M_CategoryItem button closed') {
        element.classList = 'M_CategoryItem button'
        CategoryItemsContainer.classList.add('show')
        W_Filter.classList.add('active')
      } else if (element.classList == 'M_CategoryItem button') {
        element.classList = 'M_CategoryItem button closed'
        CategoryItemsContainer.classList = 'O_CategoryItemsContainer'
        W_Filter.classList = 'W_Filter'
      } else if (element.classList == 'M_CategoryItem') {
        const icon = element.firstElementChild.classList
        const text = element.children[1].textContent
        CategoryFilterButton.classList = 'M_CategoryItem button closed'
        CategoryFilterButton.firstElementChild.classList = icon
        CategoryFilterButton.children[1].textContent = text
        UpdateElements()
        RemoveCards()
        SetTagByFilter(text)
        element.classList = 'M_CategoryItem hide'
        CategoryItemsContainer.classList = 'O_CategoryItemsContainer'
        W_Filter.classList = 'W_Filter'
      }
    })
  }
}

function UpdateElements() {
  for (let index = 0; index < CategoryItems.length; index++) {
    const element = CategoryItems[index]
    if (!(element.classList == 'M_CategoryItem button closed')) {
      element.classList = 'M_CategoryItem'
    }
  }
}

function RemoveCards() {
  for (let index = cards.length - 1; index >= 0; index--) {
    if (cards.length > 0) {
      cards[index].remove()
    }
  }
}

function SetAllArticleCards() {
  if (document.getElementById('AllArticlesContainer')) {
    for (let index = 0; index < articles.length; index++) {
      if (articles[index].tags.includes(filtertag) || filtertag == 'all') {
        let newElement = document.createElement('a')
        let M_ArticleCardclass = 'M_ArticleCard'
        if (articles[index].iswhite) {
          M_ArticleCardclass = 'M_ArticleCard white'
        }
        newElement.classList = 'ablock'
        newElement.setAttribute('id', `${articles[index].id}`)
        newElement.setAttribute('href', `article.html`)
        newElement.innerHTML = `<div class="${M_ArticleCardclass}" style = "background-image: url('${articles[index].image[0].url}')"></div>`

        document.getElementById('AllArticlesContainer').appendChild(newElement)
      }
    }
    cards = document.getElementsByClassName('ablock')
  }
}

function AddListenersOnCards() {
  for (let index = 0; index < cards.length; index++) {
    const element = cards[index]
    element.addEventListener('click', () => {
      localStorage.setItem('currentarticleid', element.id)
    })
  }
}


  
