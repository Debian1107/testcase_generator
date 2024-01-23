import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      typ: "",
      start: 1,
      end: 100,
      len: 10,
      len2: 10,
      text: "hola using reducers",
    },
  ],
};

export const mySlice = createSlice({
  name: "myslice",
  initialState,
  reducers: {
    addVal: (state, action) => {
      //   const myslice = {
      //     id: nanoid(),
      //     text: action.payload,
      //   };
      const { t, a, b, l1, l2 } = action.payload;
      state.todos[0].typ = t;
      state.todos[0].start = a;
      state.todos[0].end = b;
      state.todos[0].len = l1;
      state.todos[0].len2 = l2;
      //   state.todos[0].text = action.payload;
    },
    remVal: (state, action) => {
      state.todos = state.todos.filter(
        (myslice) => myslice.id !== action.payload
      );
    },
  },
});
export const { addVal, remVal } = mySlice.actions;

export default mySlice.reducer;
