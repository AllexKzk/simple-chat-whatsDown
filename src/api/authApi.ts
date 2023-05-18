import { SetStateAction } from "react";
import sendReq from "./api";
import { IStateInstance } from "./interfaces";

export default function authUser(): Promise<IStateInstance>{
    return sendReq<IStateInstance>('getStateInstance', {
        method: 'GET', headers: undefined, body: undefined
    });
}