export interface IReqOptions{
    method: string,
    headers: {
        'Content-Type': string
    } | undefined,
    body: string | undefined
};

export interface IStateInstance{
    stateInstance: string
};

export interface IMessage{
    text: string,
    isMine: boolean
};

export type errHandlingMessage = {
    [propKey: string]: string;
};

export interface IMessageStory{
    [number: string]: IMessage[]
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