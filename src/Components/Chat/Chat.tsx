import MessagesContent from "../MessagesContent/MessagesContent";
import NameBar from "../NameBar/NameBar";
import TextBar from "../TextBar/TextBar";
import './chat.css'

export default function Chat(){

    return (
        <div className="chat-page">
            <NameBar/>
            <MessagesContent/>
            <TextBar/>
        </div>
    );
}