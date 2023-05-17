import Message from './Message';
import './messages.css';

export default function MessagesContent() {
    return (
        <div className="messages">
            <Message text='placeholder text' isMine={true}/>
            <Message text='placeholder text' isMine={false}/>
        </div>
    );
}