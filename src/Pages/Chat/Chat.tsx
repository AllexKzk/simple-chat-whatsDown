import { useParams } from "react-router-dom";
import MessagesContent from "../../Components/MessagesContent/MessagesContent";
import NameBar from "../../Components/NameBar/NameBar";
import TextBar from "../../Components/TextBar/TextBar";
import './chat.css'
import { useEffect } from "react";

export default function Chat(){
    const {contact} = useParams();

    if (!contact || isNaN(parseInt(contact)))
        return (<h1 style={{color: 'var(--primary)'}}>404. Set contact number</h1>);

    return (
        <div className="chat-page">
            <NameBar contact={contact}/>
            <MessagesContent contact={contact}/>
            <TextBar chatId={`${contact}@c.us`}/>
        </div>
    );
}