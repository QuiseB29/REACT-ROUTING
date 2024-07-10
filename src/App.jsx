import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import CharactersList from './components/CharacterList.jsx';
import CharacterDetail from './components/CharacterDetail.jsx';
import Comics from './components/Comics.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import NotFound from './components/NotFound.jsx';
import './AppStyles.css';

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path='/Home/' element={<Home />} />
        <Route path='/List' element={<CharactersList />} />
        <Route path='/Detail' element={<CharacterDetail />} />
        <Route path='Comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )

}

export default App;