
interface IMessage{
    text: string,
    isMine: boolean
}
export default function Message(props: IMessage){
    return (
        <div className={`message ${props.isMine ? "my-message" : "contact-message"}`}>
            <p>{props.text}</p>
        </div>
    );
}