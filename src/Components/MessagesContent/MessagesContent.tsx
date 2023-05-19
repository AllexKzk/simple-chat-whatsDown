import Message from './Message';
import './messages.css';
import { IMessage } from '../../api/interfaces';

//displays all messages of current chat:
export default function MessagesContent(props: {story: IMessage[]}) {
    return (
        <div className="messages">
            {
                props.story.map((message) => <Message text={message.text} isMine={message.isMine} />)
            }
        </div>
    );
}