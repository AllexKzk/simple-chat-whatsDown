import { Modal } from "@mui/material";
import { useState } from "react";
import './sidebar.css';

interface IAddContact{
    isOpened: boolean,
    closeCallback: () => void,
    addCallback: (contact: string) => void
}

//modal for adding new contact:
export default function AddContactModal(props: IAddContact) {
    const [contact, setContact] = useState<string>('');

    const closeModal = () => {
        setContact('');
        props.closeCallback();
    }

    const addContact = () => {                              //open new chat
        if (contact.length && !isNaN(parseInt(contact)))    //better to use regex
            props.addCallback(`${contact}@c.us`);
        closeModal();
    }

    return (
        <Modal open={props.isOpened} onClose={closeModal}>
            <div className='modal'>
                <input type='number' placeholder='enter the number' onChange={(ev) => setContact(ev.target.value)} />
                <button onClick={addContact}> Add contact </button>
            </div>
        </Modal>
    );
}