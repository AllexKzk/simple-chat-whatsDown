
//options for request:
export interface IReqOptions{
    method: string,
    headers: {
        'Content-Type': string
    } | undefined,
    body: string | undefined
};

//authorizations response:
export interface IStateInstance{
    stateInstance: string
};

export interface IMessage{
    text: string,
    isMine: boolean
};

//format {err: message}
export type errHandlingMessage = {
    [propKey: string]: string;
};

//format {chatId: messages}
export interface IMessageStory{
    [chatId: string]: IMessage[]
};

export interface IReceiveNotification{
    "receiptId": number,
    "body": {
        "typeWebhook": string,
        "instanceData": {
            "idInstance": number,
            "wid": string,
            "typeInstance": string
        },
        "timestamp": number,
        "idMessage": string,
        "senderData": {
            "chatId": string,
            "sender": string,
            "senderName": string
        },
        "messageData":{
            "typeMessage":string,
            "textMessageData":{
                "textMessage": string
            }
        }
    }
};