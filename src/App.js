import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
        <Header />
        <div className="container">
          <Tasks />
        </div>  
    </Provider>
  );
}

export default App;
