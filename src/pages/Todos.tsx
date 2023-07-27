import { useState } from 'react';

type State = any;
type Action = any;
type Reducer = (state: State, action: Action) => State;
type Listener = () => void;

const createStore = (reducer: Reducer) => {
  let state: State;
  const listeners: Listener[] = [];
  reducer(state, {
    type: 'init',
  });

  return {
    dispatch: (action: Action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
      return action;
    },
    subscribe: (listener: Listener) => listeners.push(listener),
    getState: () => state,
  };
};

const initState = {
  todos: [],
};

const reducer: Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const onSubmit = (e: any) => {
    e.preventDefault();
    store.dispatch({ type: 'add', payload: '할일 추가' });
  };

  return (
    <div>
      {todos?.map((todo: string, i: number) => <li key={i}>{todo}</li>)}
      <form onSubmit={onSubmit}>
        <input type="text" id="todo" name="todo" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Todos;
