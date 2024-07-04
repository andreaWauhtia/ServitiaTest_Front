import { authenticationApi } from "../infrastructure/authenticationApi";
import { setCurrentUser, setUsers } from "@/modules/users/store/UserStore";
import { AppDispatch } from "@/modules/app/store";
import { setMessages } from "@/modules/messages/store/MessageStore";
import { GetRecipients } from "./getRecipients";

export const LogOut = (email:string,dispatch: AppDispatch) => {
    const api = new authenticationApi();

    const response = api.logout(email);
    response.then(
        (value: boolean) => {
            localStorage.setItem('auth-left-Servitia','bye');
            localStorage.removeItem('auth-tokens-Servitia');
            dispatch(setCurrentUser(undefined));
            dispatch(setMessages([]));
            dispatch(setUsers([]))
        }
    )
    .catch(error => alert(error));
}
