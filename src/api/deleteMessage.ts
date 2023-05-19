import sendReq from "./api";

export default function deleteFromStack(receiptId: number) {
    return sendReq<{result: boolean}>('DeleteNotification', { method: 'DELETE', headers: undefined, body: undefined }, receiptId.toString())
}