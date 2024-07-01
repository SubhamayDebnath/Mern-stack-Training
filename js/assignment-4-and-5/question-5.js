// 5. Handling Asynchronous Operations with Error Handling
// a. Create a function fetchDataWithRetry that takes a URL and a maximum retry count as
// parameters.
// b. Use a closure to maintain the retry count and a private function fetchData that returns a
// Promise for fetching data from the URL.
// c. Implement the fetchData function with error handling to retry fetching the data up to the
// maximum retry count.
// d. Demonstrate the function by calling fetchDataWithRetry with a URL and handling the
// resolved data or errors.

function fetchDataWithRetry(url, maxRetryCount) {
    let retryCount = 0;
  
    function fetchData() {
      return new Promise((resolve, reject) => {
        function fetchOnce() {
          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => resolve(data))
            .catch(error => {
              retryCount++;
              if (retryCount <= maxRetryCount) {
                console.log(`Retrying (${retryCount}/${maxRetryCount})...`);
                fetchOnce();
              } else {
                reject(`Failed to fetch data after ${maxRetryCount} retries. Last error: ${error}`);
              }
            });
        }
  
        fetchOnce();
      });
    }
  
    return fetchData();
  }
  

  const url = 'https://jsonplaceholder.typicode.com/posts/1'; 
  const maxRetryCount = 3;
  
  fetchDataWithRetry(url, maxRetryCount)
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  