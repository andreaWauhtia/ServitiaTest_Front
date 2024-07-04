
import { AppDispatch } from "@/modules/app/store";
import { MessageApi } from "../infrastructure/messageApi";
import {  setMessages } from "@/modules/messages/store/MessageStore";

export const GetMessageWithRecipient = (currentUser: string, recipient:string,dispatch: AppDispatch) => {
  
    const api = new MessageApi();
    const response = api.getChatWith(currentUser,recipient);
    response.then( value => dispatch(setMessages(value)));
}
