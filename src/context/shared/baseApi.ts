import axios, { AxiosError, AxiosResponse, AxiosStatic } from "axios";


export class baseApi{
    readonly actionUrl: string;
    constructor(actionUrl: string){
        const bastUrl = 'http://localhost:5201/api'
        this.actionUrl = actionUrl;
        axios.defaults.baseURL = bastUrl;
    }

    getAxios(): AxiosStatic{
         return axios;
    }

    private handleError(error: AxiosError) {

        console.error("Error:", error);
      }

    async getAll<T>(): Promise<T[]>{
        try{
            const response: AxiosResponse<T[]> = await axios.get(this.actionUrl+'/getAll')
            return response.data;
        }
        catch(error){
            this.handleError(error as AxiosError);
            throw error;
        }
    }
    async getById<T>(id: string): Promise<T>{
        try{
            const response: AxiosResponse<T> = await axios.get(this.actionUrl+`/getbyId?id=${id}`)
            return response.data;
        }
        catch(error){
            this.handleError(error as AxiosError);
            throw error;
        }
    }
    async create<T>(entity: T): Promise<T>{
        try{
            const response: AxiosResponse<T> = await axios.post(this.actionUrl+`/create`,entity)
            return response.data;
        }
        catch(error){
            this.handleError(error as AxiosError);
            throw error;
        }
    }
    async update<T>(entity: T): Promise<boolean>{
        try{
            const response: AxiosResponse<boolean> = await axios.post(this.actionUrl+`/update`,entity)
            return response.data;
        }
        catch(error){
            this.handleError(error as AxiosError);
            throw error;
        }
    }
    async delete<T>(entity: T): Promise<boolean>{
        try{
            const response: AxiosResponse<boolean> = await axios.post(this.actionUrl+`/delete`,entity)
            return response.data;
        }
        catch(error){
            this.handleError(error as AxiosError);
            throw error;
        }
    }
}