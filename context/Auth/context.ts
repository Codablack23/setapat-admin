"use client";
import { User } from "@/services";
import { createContext } from "react";

export interface AuthContextSchema{
    loading:boolean,
    user:User | null,}

export const AuthContext = createContext<AuthContextSchema>({
    loading:true,
    user:null,
})