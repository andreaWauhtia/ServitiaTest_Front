export interface Message {
    id?: string; 
    recipient: string;
    sender: string;
    content: string;
    read: boolean; 
    creationDate: Date; 
    lastModification?: Date;
  }
  

 export type UnreadMessageIndex = {
    recipient: string;
    read: boolean;
  }
  
 export type MessageChannelIndex = {
    sender: string;
    recipient: string;
  }