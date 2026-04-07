import { useContext } from "react";
import { AuthContext } from "./context";

export  function useAuthContext(){
   const contextData = useContext(AuthContext)
   if(!contextData){
    throw new Error("Auth context can only be used within an Auth Provider")
   }
   return contextData;
}