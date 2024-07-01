import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "what we want to do",
      compleated: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id , todo) => {},
  deleteTodo: (id) => {},
  toggleComplete:(id)=>{},
});

export const TodoContextProvider = TodoContext.Provider

export function useTodo() {
  return useContext(TodoContext);
}
