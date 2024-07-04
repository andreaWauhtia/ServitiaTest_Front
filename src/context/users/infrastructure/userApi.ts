import { baseApi } from "@/context/shared/baseApi";
import { User } from "../domain/User";

export class UserApi extends baseApi
{
    constructor() {
        super('/user');
    }
    async getRecipients(currentUser: string): Promise<User[]> {
        const axios = super.getAxios();
        const response = await axios.get(this.actionUrl+`/GetRecipients?currentUser=${currentUser}`);
        return response.data;
    }
    
}