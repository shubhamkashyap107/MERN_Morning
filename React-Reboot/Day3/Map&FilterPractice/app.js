// const users = [{ name: 'Alice', age: 24 }, { name: 'Bob', age: 30 }, { name: 'Cathy', age: 28 }];

// const filteredArray = users.filter((item) => {
//     return item.age > 28
// })

// console.log(filteredArray)









// Filter employees who work in the 'Engineering' department 
// and have experience > 3 years.

// const employees = [
//   { name: 'Alice', dept: 'Engineering', experience: 5 },
//   { name: 'Bob', dept: 'HR', experience: 4 }
// ];


// let filteredArray = employees.filter((item) => {
//     return item.dept == "Engineering" && item.experience > 3
// })








// Filter books that contain the keyword 'JavaScript' in their title.

// const books = [
//   { title: 'Learn JavaScript' },
//   { title: 'CSS Mastery' }
// ];

// let filteredArray = books.filter((item) => {
//     return item.title.includes("JavaScript")
//     return item.title.includes("JavaScript") == true
// })

// console.log(filteredArray)



// Filter comments with more than 10 likes and not marked as spam.

// const comments = [
//   { text: 'Nice post!', likes: 15, spam: false },
//   { text: 'Buy followers', likes: 100, spam: true }
// ];

// let filteredArray = comments.filter((item) => {
//     // return item.likes > 10 && item.spam == false
//     return item.likes > 10 && !item.spam
// })

// console.log(filteredArray)




// Filter users who have at least one social link.

// const users = [
//   { name: 'Alice', social: ['twitter'] },
//   { name: 'Bob', social: [] }
// ];

// let filteredArray = users.filter((item) => {
//     // return item.social.length > 0
//     return item.social.length
// })

// console.log(filteredArray)



//MAP



// Get an array of usernames from a list of user objects.

// const users = [{ name: 'Alice' }, { name: 'Bob' }];

// let ans = users.map((item) => {
//     return item.name
// })

// console.log(ans)



// Create an array of product names with prices formatted 
// as strings (e.g., "Pen - $10").

// const products = [{ name: 'Pen', price: 10 }, { name: 'Book', price: 25 }];

// let ans = products.map((item) => {
//     return `${item.name} - $${item.price}`  
// })

// console.log(ans)


// Return an array of user emails in lowercase.

// const users = [{ email: 'John@Example.com' }, { email: 'JANE@GMAIL.com' }];

// let ans = users.map((i) => {
//     return i.email.toLowerCase()
// })

// console.log(ans)



// Append a domain to usernames to create email addresses.

// const usernames = ['shubham', 'alex'];
// const domain = '@noisy.co.in';


// let ans = usernames.map((item) => {
//     return item + domain
// })

// console.log(ans)