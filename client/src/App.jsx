import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WriteArticle from './pages/WriteArticle'
import Blogtitles from './pages/Blogtitles'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path  = "/" element = {<Home />}/>
        <Route path = "/ai" element = {<Layout />}>
        <Route index element = {< DashBoard/>}/>
        <Route path = 'write-article' element = {< WriteArticle/>}/>
        <Route path = 'blog-titles' element = {< Blogtitles/>}/>


        </Route>
      </Routes>
    </div>
  )
}

export default App
