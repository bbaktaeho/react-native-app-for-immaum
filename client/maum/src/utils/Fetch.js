const maumAppFetch = (url, method, body = {}) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      //'Content-Type': 'application/x-www-form-urlencoded',
    },
    method,
    body: JSON.stringify(body),
  };
  if (method == 'GET') delete options.body;
  return new Promise(async (resolve, reject) => {
    console.log(options);

    await fetch(url, options)
      .then(response => response.json())
      .then(res => resolve(res))
      .catch(err => {
        reject(err.message);
      });
  });
};

export default maumAppFetch;
