// 1. Using Promises and try...catch
// a. Create a function fetchData that returns a Promise.
// b. Use fetch to get data from an API endpoint (e.g., JSONPlaceholder).
// c. If the fetch is successful, resolve the Promise with the data.
// d. If there&#39;s an error (network issue, invalid URL, etc.), reject the Promise with an
// appropriate error message.
// e. Call fetchData and handle the resolved data and errors using then, catch, and finally.

const fetchData =()=> {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error.message));
  });
}


fetchData()
  .then((data) => {
    console.log("Data successfully fetched:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    console.log("Fetch operation completed.");
  });
