import { ApiProvider } from "../services.config";
import { LoginDto, User } from "./types";

export class Auth{

    private static path = "auth"

    static loginUser(dto:LoginDto){
        return ApiProvider.post(`${this.path}/login`,dto)
    }
    static getAuthStatus(){
        return ApiProvider.get<{user:User,token:string}>(`${this.path}/status`)
    }
}