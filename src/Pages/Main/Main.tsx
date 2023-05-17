import React, { useEffect } from 'react';
import Chat from '../../Components/Chat/Chat';
import SideBar from '../../Components/SideBar/SideBar';
import { useNavigate } from "react-router-dom";
import './main.css';

export default function Main() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token') || !localStorage.getItem('id')) //simple guard
            navigate('/login');                                            //by localstorage
    }, []);

  return (
    <div className='main-window'>
      <SideBar />
      <Chat />
    </div>
  );
}
