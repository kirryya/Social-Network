import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import Message from './Message/Message';
import DialogItem from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagesPropsType>
    newMessageText: string
    sendMessage: (newMessageText: string) => void
    onChangeMessage: (message: string) => void
    isAuth: boolean
}

export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)


    const sendMessageCallback = () => {
        props.sendMessage(props.newMessageText)
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={onChangeMessageHandler} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessageCallback}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;