// Callbacks are essentially functions that 
// take in another function as a parameter

const helloSir = (name) => {
    alert("Hello Sir: " + name);
    return name
}

const saveUsername = (callback) => {
    let username = prompt("Please enter a name")
    callback(username);
    console.log ("Finished")
}

saveUsername(helloSir)

//Promises 

/* 
A promise is a placeholder for some data,
available immeditaley, some time in the future or 
never at all
*/ 

//Catch -- If or when an error happens how do we handle it

let prom = new Promise((resolve, reject) => {
    let theNumberTen = 5 + 5;
    if (theNumberTen === 3) {
        resolve(console.log("yay"));
    } else {
        reject(console.log("Oh no"))
    }

});

//.then .catch 
