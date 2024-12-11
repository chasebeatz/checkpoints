//Iterating with Async/Await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function iterateWithAsyncAwait(arr) {
    for (const item of arr) {
      console.log(item);
      await delay(1000); // Wait 1 second before logging the next item
    }
  }



  //Awaiting a Call

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function awaitCall() {
    console.log("Fetching data...");
    const data = await fetchDataFromAPI();
    console.log("Data fetched:", data);
  }
  
  async function fetchDataFromAPI() {
    await delay(1000); // Simulate API latency
    return { data: "API response simulated data" };
  }


  //Awaiting Concurrent Requests

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function mockAPIResponse(id) {
    console.log(`Starting request ${id}`);
    await delay(1000); // Simulate network latency
    console.log(`Finished request ${id}`);
    return `Response ${id}`;
  }
  
  async function concurrentRequests() {
    const results = await Promise.all([
      mockAPIResponse(1),
      mockAPIResponse(2),
    ]);
    console.log("Combined Results:", results);
  }