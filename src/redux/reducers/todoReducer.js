import { ADD } from "../types/todoTypes";

const initialState = {
    todos:[{id:new Date().getTime(),text:"",completed:false}],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return{
      todos:[
        ...state.todos,
        {id:new Date().getTime(),text:payload,completed:false},
      ],
    }; 

  default:
    return state;
  }
};

export default todoReducer;
