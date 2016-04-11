export function getTest () {
  return {
    types: ['GET_TEST_REQUEST',
            'GET_TEST_SUCCESS',
            'GET_TEST_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        $.ajax({
          type: 'GET',
          dataType: 'json',
          url: '/frpapi/test/',
          success: resolve,
          error: reject
        });
      });
    }
  };
}
