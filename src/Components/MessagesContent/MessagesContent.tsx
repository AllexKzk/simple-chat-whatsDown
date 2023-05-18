import { useEffect, useState } from 'react';
import Message from './Message';
import './messages.css';
import { IMessage } from '../../api/interfaces';

export default function MessagesContent(props: {contact: string}) {
    const [messageStory, setStory] = useState<IMessage[]>([]);

    useEffect(() => {
        const story = localStorage.getItem('story');
        if (story){
            const messages = JSON.parse(story)[props.contact];
            setStory(messages || []);
        }
    }, []);

    return (
        <div className="messages">
            {
                messageStory.map((message) => <Message text={message.text} isMine={message.isMine} />)
            }
        </div>
    );
}