
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import RecommendPage from './components/views/RecommendPage/RecommendPage';
import RecommendResultPage from './components/views/RecommendResultPage/RecommendResultPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="App">
        <BrowserRouter>
          <div id="wrapper" className="flex flex-col h-screen">
            <Header/>
            <div id="main-content" className="flex-1">
              <Routes>
                <Route path='/' element={<RecommendPage/>}></Route>
                <Route path='RecommendPage' element={<RecommendPage/>}></Route>
                <Route path='RecommendResultPage' element={<RecommendResultPage/>}></Route>
              </Routes>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>

      </div>
    </Suspense>
    
  );
}

export default App;
