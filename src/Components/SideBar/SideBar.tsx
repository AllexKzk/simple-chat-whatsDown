import Contact from './Contact';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { IMessageStory } from '../../api/interfaces';
import './sidebar.css';
import AddContactModal from './addContact';
import { store } from '../../storage/Store';
import { storeContact } from '../../storage/MessageSlice';


export default function SideBar(){
    const [isHidden, setHidden] = useState(false);
    const [modalOpened, setModal] = useState(false);
    const [chats, updateChats] = useState<IMessageStory>(store.getState().story); //array of opened chats

    store.subscribe(() => updateChats(store.getState().story));

    return (
        <>
            <AddContactModal isOpened={modalOpened} closeCallback={() => setModal(false)} 
                            addCallback={(contact: string) => store.dispatch(storeContact(contact))}
            />

            <div className='side-bar'>
                <div className='buttons-block'>
                    <IconButton sx={{display: isHidden ? 'none' : ''}} onClick={() => setModal(true)}>
                        <PersonAddAlt1Icon className='icon-button'/>
                    </IconButton>
                    <IconButton onClick={() => setHidden(!isHidden)}>
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