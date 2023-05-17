import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import './index.css';
import Main from './Pages/Main/Main';
import Auth from './Pages/Auth/Auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);