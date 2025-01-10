import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList=()=>{
    const todos=useSelector(state=>state.todoReducer.todos);
    const handleClearList=()=>{};
    return(
        <div>
            <div>
                {todos.map((todo)=>(
                <TodoItem key={todo.id}{...todo} />
                ))}
            </div>
            <div className="clearWrapper">
                <button onClick={handleClearList}>Clear</button>
            </div>
        </div>
    );
};
export default TodoList;