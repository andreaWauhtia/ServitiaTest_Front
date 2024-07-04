import { Message } from "@/context/messages/domain/Message"
import { ChatItem } from "./Message";
import { useEffect, useRef } from "react";
import { User } from "@/context/users";

export interface ChatFormProps {
    messages: Message[];
    user: User;
  
}

const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }

export const ChatForm: React.FC<ChatFormProps> = ({messages, user}) => {
   
    const messagesEndRef = useRef<HTMLDivElement>(null);
    let lastDate: string | null = null;
    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages]);
        return (
            <div className="p-4 w-10/12 items-center justify-between h-96 overflow-y-auto">
              {messages.map((message, index) => {
                  const messageDate = new Date(message.creationDate);
                  const formattedDate = formatDate(messageDate);
                  const showDate = formattedDate !== lastDate;
                  lastDate = formattedDate;
                  
                  return (<div key={`${message.id}_${index}`}>
                  {showDate && (
                    <div className="text-center my-2 text-gray-500">
                      {formattedDate}
                    </div>
                  )}
                  <ChatItem
                    sender={message.sender}
                    content={message.content}
                    sentDate={message.creationDate}
                    isOutgoing={message.sender === user.email}
                    status={message.read ? 'read' : 'sent'}
                  />
                </div>)
            }
              )}
              <div ref={messagesEndRef} />
            </div>
            
          );
    
}