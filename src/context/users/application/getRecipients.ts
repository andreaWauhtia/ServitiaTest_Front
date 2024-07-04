import { User } from "../domain/User";
import { setUsers } from "@/modules/users/store/UserStore";
import { AppDispatch } from "@/modules/app/store";
import { UserApi } from "../infrastructure/userApi";

export const GetRecipients = (email: string, dispatch: AppDispatch) => {
    const api = new UserApi();

    const response = api.getRecipients(email);
    response.then(
        (value: User[]) => {
          
            dispatch(setUsers(value));
        }
    )
        .catch(error => alert(error));
}
