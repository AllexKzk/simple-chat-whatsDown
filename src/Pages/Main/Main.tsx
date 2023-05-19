import { useEffect } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import { Outlet, useNavigate } from "react-router-dom";
import './main.css';
import { store } from '../../storage/Store';
import { setApiListener } from '../../storage/ApiListener';

export default function Main() {
	const navigate = useNavigate();

    useEffect(() => {
	if (!localStorage.getItem('token') || !localStorage.getItem('id') || !localStorage.getItem('story')) 	//simple guard
		navigate('/login');																	//by localstorage
	else
		store.dispatch(setApiListener());														//start to listen notifications
    }, []);

  return (
  	<div className='main-window'>
		<SideBar />
		<Outlet />
    	</div>
  );
}
