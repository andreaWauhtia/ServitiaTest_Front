import { Message } from "@/context/messages/domain/Message"
import { ChatForm } from "./ChatForm"
import { MessageForm } from "./MessageForm"
import { useEffect, useState } from "react"
import { RecipientSelector } from "@/modules/users/components/RecipientSelector"
import { User } from "@/context/users"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "@/modules/app/store"
import { SendMessage } from "@/context/messages/application/sendMessage"
import { GetMessageWithRecipient } from "@/context/messages/application/GetMessagesWithRecipient"
import * as signalR from '@microsoft/signalr';

export const MessageManager: React.FC<{ }> = ({}) => {

    const messages = useSelector((state: AppState) => state.message.messages);
    const user = useSelector((state: AppState) => state.user.currentUser);
    const dispatch = useDispatch();
   
    
    const [recipient, selectRecipient] = useState('');
   
    const handleRecipientSelection = (recipient: string) => {
        selectRecipient(recipient);
        GetMessageWithRecipient(user?.email ??'',recipient,dispatch);
    }


    const sendMessage = (message: Message) => {
       SendMessage(message, dispatch);
    }
    
    useEffect(() => {
        if (!user || !recipient || recipient === '') return;
    
        const connection = new signalR.HubConnectionBuilder()
          .withUrl("http://localhost:5201/read")
          .configureLogging(signalR.LogLevel.Debug)
          .build();
    
        const onMessageReceived = (receivedMessage: string) => {
          if (receivedMessage.toLowerCase() === "done") {
            GetMessageWithRecipient(user.email, recipient, dispatch);
          }
        };
    
        const eventName = `readMessage_${user.email}_${recipient}`;
        connection.on(eventName, onMessageReceived);
    
        connection
          .start()
          .then(() => console.log("Connection established."))
          .catch((err) => console.error("Connection failed: ", err));
    
        return () => {
          connection.off(eventName, onMessageReceived);
          connection.stop();
        };
      }, [user, recipient, dispatch]);
    return (
        <div className="w-10/12 items-center self-center h-4/5">
            <RecipientSelector selectRecipient={handleRecipientSelection} selectedRecipient={recipient} />
            {user &&
             <ChatForm messages={messages} user={user}  />
            }
            <MessageForm sendMessage={sendMessage} recipient={recipient} />

        </div>
    )
}