
function fetchData() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const data = { name: "Ramesh", age: 30 };
        // Simulating successful response
        resolve(data);
        //  error response
        // reject("Failed to fetch data");
      }, 2000); // 2-second delay
    });
  }
  
  // Using the promise
  console.log("Start");
  
  fetchData()
    .then((data) => {


      console.log("Data received:", data);
    })
    .catch((error) => {


      console.error("Error:", error);
    })
    .finally(() => {


      console.log("Promise completed");
    });
  
  console.log("End");
  