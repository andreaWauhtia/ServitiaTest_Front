
import { AppDispatch } from "@/modules/app/store";
import { Message } from "../domain/Message";
import { MessageApi } from "../infrastructure/messageApi";
import { addMessage } from "@/modules/messages/store/MessageStore";

export const SendMessage = (message: Message,dispatch: AppDispatch) => {
    const api = new MessageApi();
    const response = api.create({...message});
    response.then( value => dispatch(addMessage(value)));
}
