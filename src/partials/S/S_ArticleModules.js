let currentarticleid = localStorage.getItem('currentarticleid');
import { createElement } from 'react';
import { getArticlesData } from '../../database.js'
let article

if (document.getElementById('ArticlesModules')) {
    console.log('this is article');
getArticlesData().then((array) => {
  SetArticle(array)
  RenderArticle()
})
}

function SetArticle(articles) {
  articles.forEach((element) => {
    if (element.id == currentarticleid) {
      article = element
      console.log('set article', article);
    }
  })
}

function RenderArticle() {
  console.log('render', article.name)
  document.querySelector('.A_ArticleName').textContent = article.name
  document.querySelector('.A_ArticlePublicationInfo').textContent = ('опубликовано '+ article.published)
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
