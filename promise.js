const axios = require('axios');

function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  return axios.get(url)
    .then(response => {
      const incompletedTodos = response.data.filter(todo => !todo.completed);
      return incompletedTodos.slice(0, 10);
    })
    .catch(error => {
      console.error(error.message);
      return [];
    });
}

fetchData()
  .then(data => {
    console.log(data);
  });
