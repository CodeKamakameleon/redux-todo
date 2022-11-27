// import { useTodoContext } from "../context/todo-context";
import { FiDelete, FiEdit2, FiCheck } from "react-icons/fi";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleToDo, deleteTodo, editToDo } from "../redux/todoSlice";

export const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const editInputRef = useRef();

  const handleToggle = () => {
    dispatch(toggleToDo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(
      editToDo({
        id: todo.id,
        title: editInputRef.current.value,
      })
    );
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-2">
      <label className="select-none ">
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={todo.complete}
        />{" "}
        {editing ? (
          <input
            ref={editInputRef}
            defaultValue={todo.title}
            className="border border-gray-400 rounded p-1"
          />
        ) : (
          <span className="p-1">{todo.title}</span>
        )}
      </label>

      {!editing ? (
        <FiEdit2
          color="gray"
          className="cursor-pointer"
          onClick={() => setEditing(true)}
        />
      ) : (
        <FiCheck
          color="green"
          className="cursor-pointer"
          onClick={handleEdit}
        />
      )}

      <FiDelete color="red" className="cursor-pointer" onClick={handleDelete} />
    </li>
  );
};
