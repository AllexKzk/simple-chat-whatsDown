import { storeMessage } from "../storage/MessageSlice";
import { store } from "../storage/Store";
import sendReq from "./api";
import deleteFromStack from "./deleteMessage";
import { IReceiveNotification } from "./interfaces";

type WebhooksType = {
    [typeWebhook: string]: (notification: IReceiveNotification) => void
};

const webhooks: WebhooksType = {
    'incomingMessageReceived': async (notification: IReceiveNotification) => {
        const resault = await deleteFromStack(notification.receiptId);
        console.log('deleted', resault);

        const wId = notification.body.senderData.chatId;
        store.dispatch(storeMessage({
            wId: wId,
            message: {
                text: notification.body.messageData.textMessageData.textMessage,
                isMine: false
            }
        }));
    }
}

export default async function setListener(){
    console.log('setted')
    try {
        do{
            console.log('catching message')
            const notification: IReceiveNotification = await sendReq<IReceiveNotification>('ReceiveNotification', {method: 'GET', headers: undefined, body: undefined});
            console.log('catched', notification)
            if (notification && webhooks[notification.body.typeWebhook])
                await webhooks[notification.body.typeWebhook](notification);
        } while (localStorage.getItem('token')); //loop handler >_< it's really better to use socket or webhook
    } catch(err) {
        console.log(err);
    }
}