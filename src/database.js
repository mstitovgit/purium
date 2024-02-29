let Airtable = require('airtable')
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey:
    'patt2M6pTpeAUvO6h.fef6f1e448534ffe486a32376830d9e954e6e9894608280c59b923004ab67de7'
})
const base = Airtable.base('app0xBOz0XZOJfAFR')

function getItemsData() {
  return new Promise((resolve, reject) => {
    const content = []
    base('Items')
      .select({
        maxRecords: 100
      })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.get('Id'),
            name: record.get('Name'),
            safe: record.get('Safe'),
            tags: record.get('Tags'),
            image: record.get('Image'),
            data: record.get('Data')
          })
        })
        resolve(content)
      })
  })
}

export { getItemsData }


function getArticlesData() {
  return new Promise((resolve, reject) => {
    const content = []
    base('Articles')
      .select({
        maxRecords: 100
      })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.get('Id'),
            image: record.get('Image'),
            iswhite: record.get('iswhite'),
            name: record.get('Name'),
            publshed: record.get('published'),
            text: record.get('Text'),
            notions: record.get ('notions'),
            articleimages: record.get('articleimages'),
            contentlinks: record.get ('contentlinks'),
            tags: record.get('Tags')
          })
        })
        resolve(content)
      })
  })
}

export { getArticlesData }