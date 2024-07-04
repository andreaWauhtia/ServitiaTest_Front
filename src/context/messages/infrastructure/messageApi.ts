import { baseApi } from "@/context/shared/baseApi";
import { Message } from "../domain/Message";

export class MessageApi extends baseApi
{
    constructor() {
        super('/message');
    }
    async getUnreadMessageCount(currentUser: string): Promise<number> {
        const axios = super.getAxios();
        const response = await axios.get(this.actionUrl+`/GetUnreadMessage?recipient=${currentUser}`);
        return response.data;
    }
    async getChatWith(currentUser: string, recipient: string): Promise<Message[]>{
        const axios = super.getAxios();
        const response = await axios.get(this.actionUrl+`/GetChatWith?sender=${currentUser}&recipient=${recipient}`)
        return response.data;
    }
    
}