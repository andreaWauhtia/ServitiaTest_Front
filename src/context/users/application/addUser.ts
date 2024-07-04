import { User } from "../domain/User";
import { addUser } from "@/modules/users/store/UserStore";
import { AppDispatch } from "@/modules/app/store";
import { UserApi } from "../infrastructure/userApi";
import { addNotification } from "@/modules/shared/store/NotificationStore";

export const AddUser = (email: string, username: string, password: string, dispatch: AppDispatch) => {
    const api = new UserApi();

    const response = api.create<User>({email,password,username});
    response.then(
        (value: User) => { 
            dispatch((addUser(value)));
            dispatch((addNotification({message: `user ${value.email} created successfully`, duration: 3000, status: "sucess"})))
        }
    )
        .catch(error =>  dispatch((addNotification({message: error, duration: 3000, status: "error"}))));
}
