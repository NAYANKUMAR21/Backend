//reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "dec":
      return {
        ...state,
        count: state.count - action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === action.payload.title
            ? { ...item, status: !item.status }
            : item
        ),
      };
    default: {
      return state;
    }
  }
};
//initial state
const initial = {
  count: 0,
};

class Store {
  constructor(reducer, initial) {
    this.reducer = reducer;
    this.state = initial;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

var store = new Store(reducer, { count: 0 });
console.log(reducer(initial, { type: "add", payload: 20 }), "plane JS");

store.dispatch({ type: "add", payload: 40 });
store.dispatch({ type: "add", payload: 30 });
store.dispatch({ type: "add", payload: 20 });
store.dispatch({ type: "add", payload: 10 });
console.log(store.getState());

// console.log(store.getState())
