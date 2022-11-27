import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

export const App = () => {
  return (
    <div className="container m-5">
      <AddTodo />
      <TodoList />
    </div>
  );
};
