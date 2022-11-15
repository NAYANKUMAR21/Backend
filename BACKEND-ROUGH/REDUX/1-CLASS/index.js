import { decrement, increment } from "./redux/actions.js";
import { store } from "./redux/store.js";
console.log("_______")


console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch(decrement())
console.log(store.getState())


