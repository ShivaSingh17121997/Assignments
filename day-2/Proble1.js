const fetch = require('node-fetch');

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

//show all data
const displayData = async () => {
  try {
    const data = await fetchData();
    console.log('Fetched Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Call the displayData function to fetch and display the data
displayData();
