
/*Before Promises, asynchronous operations were handled using callbacks.*/

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});