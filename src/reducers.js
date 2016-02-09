const initialState = {
  something: ''
}

export function test(state = initialState,action) {
  switch (action.type) {
    case 'GET_TEST_SUCCESS':
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
}
