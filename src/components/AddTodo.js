import { useDispatch } from "react-redux";

import { addToDo } from "../redux/todoSlice";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newItem.value;
    if (!value) return;

    dispatch(addToDo(value));

    evt.target.elements.newItem.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="newItem"
        className="border border-gray-500 rounded py-1 px-3"
      />
      <button
        type="submit"
        className="ml-2 border border-blue-600 bg-blue-500 py-1 px-3 rounded"
      >
        Add
      </button>
    </form>
  );
};
