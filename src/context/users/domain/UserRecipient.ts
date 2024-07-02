import { User } from "./User";

export interface UserRecipient
{
    user: User;
    unreadMessage: number;
}