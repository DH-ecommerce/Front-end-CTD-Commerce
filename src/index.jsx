import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ItemsProvider from './pages/components/ItemsProvider/ItemsProvider';


ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
