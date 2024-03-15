let currentarticleid = localStorage.getItem('currentarticleid');
import { createElement } from 'react';
import { getArticlesData } from '../../database.js'
let article

if (document.getElementById('ArticlesModules')) {
getArticlesData().then((array) => {
  SetArticle(array)
  RenderArticle()
})
}

function SetArticle(articles) {
  articles.forEach((element) => {
    if (element.id == currentarticleid) {
      article = element
    }
  })
}

function RenderArticle() {
  console.log('render', article.published)
  let date = new Date (article.published)
  console.log(date)
  let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
  document.querySelector('.A_ArticleName').textContent = article.name
  document.querySelector('.A_ArticlePublicationInfo').textContent = ('опубликовано '+ day +"/" + month +"/" + year)
  let newElement = document.createElement('div')
  newElement.classList ='O_ArticleText'
    newElement.innerHTML = article.text
    document.getElementById('MainText').appendChild(newElement)

    let newChapters = document.createElement('div')
    newChapters.classList ='M_Chapters'
    console.log(article);
    newChapters.innerHTML = article.contentlinks
    document.getElementById('chapters').appendChild(newChapters)

}
