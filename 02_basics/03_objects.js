//singleton
//agar construt se object karte hai to singleton

// Object.create
// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Narayan",
    "full name": "Narayan Kumar Bhandari",
    [mySym]: "mykey1",//assess symbol ka liye
    age: 20,
    location: "kol",
    email: "narayan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);//print karne ka first way
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.email = "narayankr@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "narayan@yahoo.com"
console.log(JsUser)


JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);//agar same refarence lena hai to this use karna hai
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());