//const tinderUser = new Object()//output={}//diffenece ya hai ki ya singleton hai
// const tinderUser = {}//output={}//diffenece ya hai ki ya singleton nahi hai

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "narayan",
            lastname: "bhandari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);//

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }//... mean sprit karna bol
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "narayan"
}

//course.courseInstructor
const { courseInstructor } = course
console.log(courseInstructor);


/*const navbar=({company})=>{

}
 navbar(company ="ram")*//*this is called destructra*/


