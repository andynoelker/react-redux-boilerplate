import formatUrl from '../../utils/src/formatGetUrl'

export function getTest (something) {
  let url = formatUrl('/frp/test', {
    param: something,
  })

  return {
    types: ['GET_TEST_REQUEST',
            'GET_TEST_SUCCESS',
            'GET_TEST_FAILURE'],
    promise: () => {
      return fetch(url)
    }
  };
}
