import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todo;
  });

  return (
    <ul className="mt-4">
      {!todos?.length && <div>Nothing to do here *shrug*</div>}
      {todos?.map((t) => (
        <Todo todo={t} key={t.id} />
      ))}
    </ul>
  );
};
