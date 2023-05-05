const axios = require('axios');

async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    const response = await axios.get(url);
    const completedTodos = response.data.filter(todo => todo.completed);
    const incompletedTodos = response.data.filter(todo => !todo.completed);
    const selectedTodos = [...completedTodos.slice(0, 10), ...incompletedTodos.slice(0, 10)];
    return selectedTodos;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

(async function displayData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();
