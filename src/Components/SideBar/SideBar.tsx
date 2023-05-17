import Contact from './Contact';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { IconButton } from '@mui/material';

import './sidebar.css';


export default function SideBar(){
    const [isHidden, setHidden] = useState(false)

    const toggleSidebar = () =>{
        setHidden(!isHidden)
    }

    return (
        <div className='side-bar'>
            <div className='buttons-block'>
                <IconButton sx={{display: isHidden ? 'none' : ''}}>
                    <PersonAddAlt1Icon className='icon-button'/>
                </IconButton>
                <IconButton onClick={() => toggleSidebar()}>
                    <ArrowBackIosIcon sx={{transition: 'transform .5s', color: 'var(--primary)', transform: `rotate(${isHidden ? 0 : 180}deg)`}}/>
                </IconButton>
            </div>
            <div style={{display: isHidden ? 'none' : ''}}>
                <Contact name={'Place NameFFFFFFFFFFFFFFFFFFFFFFFFFFF'}/>    
                <Contact name={'Place Name2'}/>    
                <Contact name={'Place Name3'}/> 
            </div>
        </div>
    );
}