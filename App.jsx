import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

import Events from './pages/events/events';
import Ticket from './pages/ticket/ticket';
import Buy from './pages/buy/buy';
import ErrorPage from './pages/error/errorPage';


function App() {
const [events, setEvents] = useState([])

  return (
    <main className="App">
      { <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Events events = {events} setEvents = {setEvents}/> } />
          <Route path='/buy' element={ <Buy /> } />
          <Route path='/ticket' element={ <Ticket /> } />
          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter> }
    </main>
  )
}
export default App
