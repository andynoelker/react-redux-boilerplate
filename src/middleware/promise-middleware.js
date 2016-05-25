var promiseMiddleware = function() {
  return (next) => (action) => {
  const { promise, types, ...rest } = action

  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types

  next({...rest, type: REQUEST})

  return promise().then(r => r.json())
                  .then(result => {
                    next({...rest, result, type: SUCCESS})
                  })
                  .catch(error => {
                    next({...rest, error, type: FAILURE})
                  })
  }
}

export default promiseMiddleware
