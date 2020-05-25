const maumAppFetch = ({url, method, body = {}}) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body,
  };
  if (method == 'GET') delete options.body;
  return new Promise(async (resolve, reject) => {
    await fetch(url, options)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err.message);
      });
  });
};

export default maumAppFetch;
