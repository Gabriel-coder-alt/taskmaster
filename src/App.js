import React from 'react';
import Tasks from './components/Tasks';
import './App.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
        <div className="container">
          <Tasks />
        </div>  
    </Provider>
  );
}

export default App;
