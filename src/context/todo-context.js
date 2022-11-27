import { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return [
        ...state,
        {
          id: v4(),
          title: action.payload,
          complete: false,
        },
      ];
    case "toggle-todo":
      return state.map((t) =>
        t.id === action.payload ? { ...t, complete: !t.complete } : t
      );

    case "delete-todo":
      return state.filter((t) => t.id !== action.payload);

    case "edit-todo":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t
      );

    default:
      throw new Error(`received unknown action of type: ${action.type}`);
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useTodoContext must be used within TodoProvider");

  return context;
};
