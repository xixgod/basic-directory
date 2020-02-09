// @flow

const initData = {};

const TestReducer = (state: Object = initData, action: Object) => {
  switch (action.type) {
    case "test":
      return {
        ...state,
        test: "lily"
      };
    default:
      return state;
  }
};

export default TestReducer;
