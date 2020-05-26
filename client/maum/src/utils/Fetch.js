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
    console.log(options);

    await fetch(url, options)
      .then(response => response.json())
      .then(res => resolve(res))
      .catch(err => {
        console.log(err);

        reject(err.message);
      });
  });
};

export default maumAppFetch;
