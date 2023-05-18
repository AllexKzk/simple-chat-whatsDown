import sendReq from "./api";

export interface ISendMessage{
    chatId: string
    message: string,
}

export default function sendMessage(body: ISendMessage){
    return sendReq<{idMessage: string}>('SendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}