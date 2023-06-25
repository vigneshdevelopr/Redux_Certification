function reducer(state = 0, action) {
    switch (typeof state) {
      case "undefined":
        return (state = 0);

      default:
        break;
    }

    switch (action.type) {
      case "INCREMENT":
        return state + 1;

      case "DECREMENT":
        return state - 1;

      default:
        return state;
    }
  }
//   expect(reducer(0, { type: "INCREMENT" })).toBe(1);
//   expect(reducer(1, { type: "INCREMENT" })).toBe(2);

//   expect(reducer(1, { type: "DECREMENT" })).toBe(0);
//   expect(reducer(2, { type: "DECREMENT" })).toBe(1);

//   expect(reducer(1, { type: "SOMETHINGELSE" })).toBe(1);

//   expect(reducer(undefined, {})).toBe(0);

  console.log("All Test has been Passed");