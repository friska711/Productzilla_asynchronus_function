const axios = require('axios');

function fetchData(callback) {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  axios.get(url)
    .then(response => {
      const completedTodos = response.data.filter(todo => todo.completed);
      const selectedTodos = completedTodos.slice(0, 10);
      callback(null, selectedTodos);
    })
    .catch(error => {
      callback(error, null);
    });
}

fetchData((error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(data);
});
