import { INC, DEC } from "./actionTypes.js";

export const increment = (payload = 1) => ({ type: INC, payload });
export const decrement = (payload = 1) => ({ type: DEC, payload });

//actions are type dispacther
