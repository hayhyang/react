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

export default store;
