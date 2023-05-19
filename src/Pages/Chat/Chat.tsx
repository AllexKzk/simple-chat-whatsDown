import { useParams } from "react-router-dom";
import MessagesContent from "../../Components/MessagesContent/MessagesContent";
import NameBar from "../../Components/NameBar/NameBar";
import TextBar from "../../Components/TextBar/TextBar";
import './chat.css'
import { store } from "../../storage/Store";
import { IMessage } from "../../api/interfaces";
import { storeMessage } from "../../storage/MessageSlice";
import { useEffect, useState } from "react";

export default function Chat(){
    const {contact} = useParams<{contact: string}>();                                                     //get contact chatId from url
    const [messageStory, setStory] = useState<IMessage[]>(contact ? store.getState().story[contact] : []);//get story from Redux or []

    useEffect(() => {
        setStory(contact ? store.getState().story[contact] : []);
    }, [contact]);

    if (!contact || isNaN(parseInt(contact)))           //if you try to get '/chat/{NaN}' - better to use regex v_v
        return (<h1 style={{color: 'var(--primary)'}}>Wrong contact number.</h1>);

    store.subscribe(() => {                             //update messages story
        setStory(store.getState().story[contact]);
    });

    const storeSendedMessage = (newMessage: IMessage) => {
        store.dispatch(storeMessage({wId: contact, message: newMessage}));
    }

    return (
        <div className="chat-page">
            <NameBar contact={contact}/>
            <MessagesContent story={messageStory}/>
            <TextBar sendCallback={(msg: IMessage) => storeSendedMessage(msg)} chatId={contact}/>
        </div>
    );
}