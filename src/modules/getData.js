const getData = (str) => {
  return fetch(
    `https://test-4f952-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
