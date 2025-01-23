import React from 'react'
import './App.css'
import Card from './Component/Card'
import { Data } from '../Data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardDetail from './Component/CardDetail';

function App() {
  return (
    <>
      <Router>
      <div className="mainContainer">
        <Routes>
          <Route
            path="/"
            element={Data.map((e, i) => (
              <Card
                key={i}
                id={e.id}
                imageSrc={e.image}
                title={e.title}
                desc={e.description}
                price={e.price}
              />
            ))}
          />
          <Route path="/details/:id" element={<CardDetail />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App
