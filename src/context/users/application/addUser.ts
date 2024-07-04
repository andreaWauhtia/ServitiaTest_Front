import { User } from "../domain/User";
import { addUser } from "@/modules/users/store/UserStore";
import { AppDispatch } from "@/modules/app/store";
import { UserApi } from "../infrastructure/userApi";

export const AddUser = (email: string, username: string, password: string, dispatch: AppDispatch) => {
    const api = new UserApi();

    const response = api.create<User>({email,password,username});
    response.then(
        (value: User) => { 
            dispatch((addUser(value)));
        }
    )
        .catch(error => alert(error));
}
