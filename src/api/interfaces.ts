export interface IReqOptions{
    method: string,
    headers: {
        'Content-Type': string
    } | undefined,
    body: string | undefined
}

export interface IStateInstance{
    stateInstance: string
};

export type errHandlingMessage = {
    [propKey: string]: string;
};