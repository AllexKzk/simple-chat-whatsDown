import SendIcon from '@mui/icons-material/Send';
import './textbar.css';
import { IconButton, TextareaAutosize } from '@mui/material';
import sendMessage from '../../api/sendMessage';
import { useState } from 'react';
import { IMessage } from '../../api/interfaces';

export default function TextBar(props: {chatId: string, sendCallback: (msg: IMessage) => void}){
    const [message, setMessage] = useState<string>('');

    const submitSend = () => {
        if (message.length)
            sendMessage({
                message: message,
                chatId: props.chatId
            }).then((answer: {idMessage: string}) => {
                props.sendCallback({
                    text: message,
                    isMine: true,
                })
                setMessage('');
            }).catch((err: Error) => {
                console.log(err.message);
            });
    }

    return (
        <div className='text-bar'>
            <TextareaAutosize onChange={(ev) => setMessage(ev.target.value)} value={message} maxRows={4} placeholder='Input...' className='message-input'/>
            <IconButton onClick={submitSend}>
                <SendIcon className='send-icon'/>
            </IconButton>
        </div>
    );
}