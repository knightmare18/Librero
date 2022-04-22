import React from 'react'
import MainPage from './components/MainPage/MainPage'
import SearchPage from './components/SearchPage/SearchPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"

function App(){
  return(
      <BrowserRouter>
          <div className="app">
              <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/search' element={<SearchPage/>}/>  
              </Routes>
          </div>
      </BrowserRouter>
  )
}
export default App
