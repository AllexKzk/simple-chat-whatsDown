import { IReqOptions } from "./interfaces";

export default function sendReq<T>(reqUrl: string, options: IReqOptions): Promise<T> {

    const idInstance = localStorage.getItem('id');
    const apiTokenInstance = localStorage.getItem('token');
    const fullUrl = `https://api.green-api.com/waInstance${idInstance}/${reqUrl}/${apiTokenInstance}`

    return fetch(fullUrl, options)
        .then(response => {
            console.log(response.status)
            if (!response.ok)
                throw new Error(response.status.toString())
            return response.json() as Promise<T>
        })
        .catch((err: Error) => {
            throw err;
        })
}