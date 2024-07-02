import { Message } from "@/context/messages/domain/Message";
import FABMenu, { FabMenuItem } from "@/modules/shared/components/FabMenu"
import { RecipientSelector } from "@/modules/users/components/RecipientSelector"
import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa"

export interface MessageFormprops{
    sendMessage: (message: Message) => void;
    recipient: string;
}
export const MessageForm: React.FC<MessageFormprops> = ({sendMessage, recipient}) => {
    const sendMenu :FabMenuItem  = 
    {
        icon : <FaEnvelope className="w-5 h-5" />,
        onclick: () => {
            const msg: Message = {
                id: '0',
                content: text,
                read: false,
                creation_date: new Date(),
                recipient: recipient,
                sender: 'andrea.wauthia@gmail.com',

            };
            sendMessage(msg);
            setText('');
        }
    };
    const handleSendMessage = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const msg: Message = {
            id: '0',
            content: text,
            read: false,
            creation_date: new Date(),
            recipient: recipient,
            sender: 'andrea.wauthia@gmail.com',

        };
        sendMessage(msg);
        setText('');
    }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };
    const [text,setText] = useState('');
   
    return (
        // <>
      
        // <div className='w-10/12 flex flex-row justify-center items-center py-6'>
        // <input type='text' className="flex flex-row justify-center items-center border-4 w-full rounded-r-md" value={text}  onChange={(e) => setText(e.target.value)}></input>
        // </div>
        // <FABMenu menus={[sendMenu]} />
        // </>
        <div className='w-10/12 flex flex-row justify-center items-center py-6'>
        <input type='text' className="w-11/12 border-4 rounded-l-md" value={text}  onChange={(e) => setText(e.target.value)}  onKeyDown={handleKeyPress}></input>
        <div 
          className="w-auto rounded-r-md bg-black px-5 py-1.5 text-center inline-flex items-center cursor-pointer"
          onClick={handleSendMessage}
        >
          <FaPaperPlane className="w-5 h-5 text-white" />
        </div>
        </div>
    )
}