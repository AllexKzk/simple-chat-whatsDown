import Contact from './Contact';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { IMessageStory } from '../../api/interfaces';
import './sidebar.css';
import AddContactModal from './addContact';


export default function SideBar(){
    const [isHidden, setHidden] = useState(false);
    const [modalOpened, setModal] = useState(false);
    const [chats, updateChats] = useState<IMessageStory>({}); //array of opened chats

    useEffect(() => {
        const story = localStorage.getItem('story');
        if (story)
            updateChats(JSON.parse(story));
    }, []);

    const toggleSidebar = () =>{
        setHidden(!isHidden);
    }

    const addContact = (contact: string) => {
        updateChats({...chats, [contact]: []});
        localStorage.setItem('story', JSON.stringify({...chats, [contact]: []}));
    }

    return (
        <>
            <AddContactModal isOpened={modalOpened} closeCallback={() => setModal(false)} addCallback={(contact: string) => addContact(contact)}/>
            <div className='side-bar'>
                <div className='buttons-block'>
                    <IconButton sx={{display: isHidden ? 'none' : ''}} onClick={() => setModal(true)}>
                        <PersonAddAlt1Icon className='icon-button'/>
                    </IconButton>
                    <IconButton onClick={() => toggleSidebar()}>
                        <ArrowBackIosIcon sx={{transition: 'transform .5s', color: 'var(--primary)', transform: `rotate(${isHidden ? 0 : 180}deg)`}}/>
                    </IconButton>
                </div>
                <div style={{display: isHidden ? 'none' : ''}}>
                    {
                        Object.keys(chats).map((contact) => <Contact name={contact} />)
                    }
                </div>
            </div>
        </>

    );
}