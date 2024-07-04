import { IAuthTokens } from "axios-jwt";
import { authenticationApi } from "../infrastructure/authenticationApi";
import { jwtDecode } from 'jwt-decode';
import { User } from "../domain/User";
import { setCurrentUser } from "@/modules/users/store/UserStore";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { AppDispatch } from "@/modules/app/store";
import { GetRecipients } from "./getRecipients";

export const AuthenticateUser = (email: string, password: string, dispatch: AppDispatch) => {
    const api = new authenticationApi();

    const response = api.connect(email, password);
    response.then(
        (value: IAuthTokens) => {
            const accessToken = value.accessToken;
            const jwt = jwtDecode(accessToken) as any;
            const user: User = {
                email: jwt.sub,
                username: jwt.name,
                password: ''
            };
            localStorage.setItem(`auth-tokens-Servitia`,accessToken);
            localStorage.removeItem(`auth-left-Servitia`);
            dispatch(setCurrentUser(user));
            GetRecipients(user.email,dispatch);
        }
    )
        .catch(error => alert(error));
}
