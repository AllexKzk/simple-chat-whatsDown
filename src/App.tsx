import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import './index.css';
  import Main from './Pages/Main/Main';
  import Chat from "./Pages/Chat/Chat";
  import Auth from './Pages/Auth/Auth';
import { Provider } from "react-redux";
import { store } from "./storage/Store";

export default function App() {
    //navigation in chats by numbers
    return(
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="chat/:contact" element={<Chat />} />
                    </Route>
                    <Route path="/login" element={<Auth />} />
                </Routes>
            </Router>  
        </Provider>
    );
}