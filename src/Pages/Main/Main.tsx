import React, { useEffect } from 'react';
import Chat from '../Chat/Chat';
import SideBar from '../../Components/SideBar/SideBar';
import { Outlet, useNavigate } from "react-router-dom";
import './main.css';

export default function Main() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token') || !localStorage.getItem('id') || !localStorage.getItem('story')) //simple guard
			navigate('/login');																				 //by localstorage
    }, []);

  return (
    <div className='main-window'>
      <SideBar />
      <Outlet />
    </div>
  );
}
