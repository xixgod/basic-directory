// @flow

const CREATE_TEST_ACTION = "CREATE_TEST_ACTION";

const createTestAction = (payload: Object) => {
  return {
    type: CREATE_TEST_ACTION,
    payload
  };
};

export default createTestAction;
