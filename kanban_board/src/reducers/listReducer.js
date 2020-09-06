const initialState = [
  {
    title: "Welcome!",
    id: 0,
    cards: [
      {
        id: 0,
        text: "welcome to react frame work",
      },
      {
        id: 1,
        text: "Basic start",
      },
    ],
  },
  {
    title: "Welcome!",
    id: 1,
    cards: [
      {
        id: 0,
        text: "welcome to react frame work",
      },
      {
        id: 1,
        text: "Basic start",
      },
      {
        id: 2,
        text: "Basic start",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
