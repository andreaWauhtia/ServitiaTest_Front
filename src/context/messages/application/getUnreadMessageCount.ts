
import { MessageApi } from "../infrastructure/messageApi";

export const GetUnreadMessageCount = (email: string): Promise<number> => {
    const api = new MessageApi();
    return api.getUnreadMessageCount(email);
}
