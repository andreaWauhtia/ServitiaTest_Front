import { baseApi } from "@/context/shared/baseApi";
import { IAuthTokens } from "axios-jwt";

export class authenticationApi extends baseApi{
    constructor() {
        super('/Authentication');
    }
    async connect(email:string, password: string): Promise<IAuthTokens>{
        const axios = super.getAxios();
       const response = await axios.post(this.actionUrl+'/login', {email,password});
      //  const fakeAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmRyZWEud2F1dGhpYUBnbWFpbC5jb20iLCJuYW1lIjoiYXdhdXRoaWEiLCJpYXQiOjE1MTYyMzkwMjJ9.aPYWQbLqx-trJGGxpMuNOeWteejaJJtKscVQP8lOI80';
       // await new Promise(resolve => setTimeout(resolve, 300));
       // return Promise.resolve({accessToken: fakeAccessToken, refreshToken: ''});
       return response.data;
    }

    async logout(email: string): Promise<boolean>{
        const axios = super.getAxios();
         const response = await axios.get(this.actionUrl+`/logout?email=${email}`);
         return response.data;
        //await new Promise(resolve => setTimeout(resolve, 300));
        //return Promise.resolve(true);
    }
}