import { Message } from "@/context/messages/domain/Message"
import { ChatForm } from "./ChatForm"
import { MessageForm } from "./MessageForm"
import { useState } from "react"
import { RecipientSelector } from "@/modules/users/components/RecipientSelector"
import { User } from "@/context/users"


export const MessageManager: React.FC<{ }> = ({}) => {
    const user: User = {
        email: 'andrea.wauthia@gmail.com',
        password: '',
        username: 'awauthia'
    }
    const messages: Message[] = [
        {
            id: '0',
            content: 'coucou',
            read: true,
            recipient: 'didier.super@gmail.com',
            sender: 'andrea.wauthia@gmail.com',
            creation_date: new Date()
        }
        ,
        {
            id: '1',
            content: 'salut',
            read: false,
            recipient: 'andrea.wauthia@gmail.com',
            sender: 'didier.super@gmail.com',
            creation_date: new Date()
        },
        {
            id: '2',
            content: 'ça va?',
            read: false,
            recipient: 'didier.super@gmail.com',
            sender: 'andrea.wauthia@gmail.com',
            creation_date: new Date()
        }
        ,
    ]
    const [recipient, selectRecipient] = useState('');
    const handleRecipientSelection = (recipient: string) => {
        selectRecipient(recipient);
    }

    const [msg, setMessage] = useState(messages);

    const sendMessage = (message: Message) => {
        const newMsgs = [...msg, message];
        setMessage(newMsgs);
      
    }
    return (
        <div className="w-10/12 items-center self-center h-4/5">
            <RecipientSelector selectRecipient={handleRecipientSelection} selectedRecipient={recipient} />
           
             <ChatForm messages={msg} user={user}  />
           
            <MessageForm sendMessage={sendMessage} recipient={recipient} />

        </div>
    )
}