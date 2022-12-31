import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {router} from './router';
import {HashRouter, RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter router={router}/>
  </React.StrictMode>
);

reportWebVitals();
