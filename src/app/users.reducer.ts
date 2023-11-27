import { createReducer,on } from "@ngrx/store";
import { User } from "./user.model";
import { addUser } from "./users.action";
export const initialState:User[]=[];
export const userReducer=createReducer(
    initialState,
    on(addUser,(state,{user})=>{
       // işlemler
        return [...state,user]
    })
    
)