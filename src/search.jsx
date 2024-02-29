import React from 'react'
import { createRoot } from 'react-dom/client'
import S_Search from './partials/SearchComponents/S_Search/S_Search.jsx'

if(document.getElementById('S_Searchroot')){
const search = createRoot(document.getElementById('S_Searchroot'))
search.render(<S_Search />)
}

