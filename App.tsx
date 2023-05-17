import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
  import './index.css';
  import Main from './src/Pages/Main/Main';
  import Auth from './src/Pages/Auth/Auth';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='login' element={<Auth />} />
            </Routes>
        </BrowserRouter>  
    );
}