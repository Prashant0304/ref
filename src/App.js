
import React from "react";
import Counter from "./components/Counter";


import { Provider } from "react-redux";
import { store } from "./redux";
import Todo from "./components/todo/Todo";

function App () {  
  return (
    <div className="container">
      <Provider store={store}>
        <Counter/>
        <Todo/>
      </Provider>
    </div>
  );
};

export default App;
