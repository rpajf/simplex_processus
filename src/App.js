import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="dashboard" exact component={Dashboard}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
