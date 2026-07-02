/*A Promise represents a value that may be available now, later, or never.
Promise States
Pending
Resolved (Fulfilled)
Rejected
*/

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation Successful");
    } else {
        reject("Operation Failed");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

//Real Example

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John"
            });
        }, 2000);
    });
}

fetchUser()
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.log(err);
    });

//Runs multiple promises together.

const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });