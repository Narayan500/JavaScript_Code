const accountId = 144667
let accountEmail = "rahul@gmail.com"
var accountPassword = "1234"
accountCity = "kol"
let accountState;

//accountId = 2 not allowed
accountEmail = "nothing@gmail.com"
accountPassword = "9898"
accountCity = "bihar"

console.log(accountId);
/*
Prefer not  use  var
because of issue in block scope and ffunctional scope

*/

//if print all varubles in one times then i use table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
