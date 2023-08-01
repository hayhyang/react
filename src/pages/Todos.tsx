import store from 'modules/store';
import { useEffect, useState } from 'react';

const Todos = () => {
  useEffect(() => {
    store.subscribe(() => setTodos(store.getState().todos));
  });

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) {
      window.alert('값을 입력해주세요');
      return;
    }
    store.dispatch({ type: 'add', payload: todo });
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} method="post" id="todo-form">
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {todos?.map((todo: string, i: number) => <li key={i}>{todo}</li>)}
    </div>
  );
};

export default Todos;
