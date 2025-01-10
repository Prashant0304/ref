import { ADD } from "../types/todoTypes";

export const addTodo=(payload)=>{
    return{
        type:ADD,
        payload:payload
    };
};