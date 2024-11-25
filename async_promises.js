// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate/

// async function getData() {
//     if( "id" !=0){
//     fetch("https://sbahle03.github.io/userdata/userdata/userdata.json")
//       .then(res => res.json())  
//       .then(data => console.log(data))
        
//     }else{
//         throw new Error("Code did not work");
        
//     }
 
// }console.log(getData())

// let myVariable = fetch("https://sbahle03.github.io/userdata/userdata/userdata.json").json
// const thisVariable = myVariable.filter(filteredFunction)
// function filteredFunction(thisVariable) {
//     if ( "id" !=0){
//         console.log(thisVariable)
//     }else{
//         throw new Error("Wrong code");
        
//     }
    
// }
// filteredFunction()
 const y = await fetch  ("https://sbahle03.github.io/userdata/userdata/userdata.json")
.then(y => y.json)
.then(data => console.log(data))
.catch(error =>console.error(error));


// / TODO: Create a function that 
// uses template literals for HTML generation



// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately
// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling


// // TODO: Create a Promise that simulates fetching user data
// // - The Promise should resolve after 1.5 seconds
// // - If userId is positive, resolve with user data object
// // - If userId is negative or zero, reject with an error
// // // - User data should include: id, name, email, and registrationDate
// let p = new Promise (function(resolve , reject) {
//     setTimeout (() =>{   
//       fetch("https://sbahle03.github.io/userdata/userdata/userdata.json")
//       .then(respose =>{
//         return respose.json();
//        })
//       .then(data => {
//          data.forEach( data =>{
//             if (data.id > 0 ){
//                 resolve (data)
            
                
//             }else{
//                 reject ("Oops , your userID is leass than ")
//             }
            
//         });
//       })
    
//       .catch(error =>{
//         console.error(error)
//         })
//     }, 1500)
    
// });


// p.then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.error(error);
// });



// // TODO: Create a function that
// // uses template literals for HTML generation
// function myTemplate (heading1 , heading2 , para ,footer){
//     return `
//     <html>
//     <head>
//     <head>
//     <div>
//     <body>
//     <h1> ${heading1}</h1>
//     <h2> ${heading2}</h2>
    
//     <p>${para}</p>
//     </div>
    
//     </body>
//     <footer>${footer}</footer>
//     </html>

//     `
// } 
// console.log(myTemplate( "Welcome to my Youtbe Channel" , "In this page we yal all thing fashion , healthy lifestyle  and travel", "How does Tik Tok decrease your attetion span" ,"ABCDEFGHIJKLMNOPQRSTUVWXYZ","Copyright 2024"))

// // TODO: Create a Promise that simulates fetching user posts
// // - Should resolve after 1 second
// // - Return an array of post objects
// // - Each post should have: id, title, content, and userId
// // - If userId doesn't exist, reject with error


// let myUserpromise = new Promise (function(resolve , reject) {
//     setTimeout (() =>{   
//       fetch("https://sbahle03.github.io/userdata/userdata/userdata.json")
//       .then(respose =>{
//         return respose.json();
//        })
//       .then(data => {
//          data.forEach( data =>{
//             if (data.id == undefined ){
//                 reject ("Oops , your userID is undefined ")
            
                
//             }else{
//                 resolve(data)
//             }
            
//         });
//       })
    
//       .catch(error =>{
//         console.error(error)
//         })
//     }, 1000)
    
// });


// myUserpromise.then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.error(error);
// });








// let promise = new Promise (function (resolve , reject){
//     setTimeout (()=>{
//         fetch ('https://sbahle03.github.io/userdata/userdata/userdata.json') // dont forget to create an api for this question
//         .then(response => response.json())
//         .then(data => {
//             for (let i = 0; i < data.length; i++){
//                 if (data[i].id >= 0){
//                     resolve(data)
//                 }else {
//                     reject("UserID does not exists")
//                 }
                    
//             } 
//         })
//         .catch(error => reject(error));


//     },1000);

// });

// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.error(error);
// });


// // TODO: Create a function that chains multiple Promises together
// // - First fetch user data
// // - Then fetch their posts
// // - Combine the data into a single object
// // - Handle any errors that occur in the chain


// // function multiplePromises(){
// //     const mypromise = new Promise ((resolve , reject) => {
// //         setTimeout (()=>{
// //          fetch ('https://sbahle03.github.io/userdata/userdata/userdata.json') // dont forget to create an api for this question
// //          .then(response => response.json())
// //         // .then(data => {
// //         .then (()=>{
// //             return new Promise ((resolve , reject ) => {
// //                 setTimeout (()=>{
// //                     fetch('https://sbahle03.github.io/userdata/userdata/userdata.json')
// //                     .then (result => result.json())
// //                     resolve()
// //                 })

// //             })


// //         })



// //         })


// //     });

// // }

    
let userdata = 'https://sbahle03.github.io/userdata/userdata/userdata.json';
let userpost = "https://sbahle03.github.io/userdata/userdata/userdata.json"; // REMEMBER TO CREATE AN API FOR USERPOST  !!!!! DONOT FORGET

// return new Promise(function(resolve, reject) {
    setTimeout(() => {
        fetch(userdata)
            .then(response => {  // we are fetching the data from the api and converting it to json file 
                return response.json(); // and converting it to json file 
            })
            
    }, 1000);
// });


// // TODO: Convert the above Promise chain to use async/await
// // - Use try/catch for error handling
// // - Log each step of the process
// // - Return combined user and posts data
// // Define two API URLs
// const AwaitusersApi = 'https://api.example.com/users';
// const  AwaitpostsApi = 'https://api.example.com/posts';

// async function fetchAndCombineData() {
//     try {
//         console.log("Fetching users data...");

//         // Fetch users data
//         const usersResponse = await fetch(usersApi);
//         const users = await usersResponse.json();
//         console.log("Users data fetched:", users);

//         console.log("Fetching posts data...");

//         // Fetch posts data
//         const postsResponse = await fetch(postsApi);
//         const posts = await postsResponse.json();
//         console.log("Posts data fetched:", posts);

//         // Combine users with their posts
//         const combinedData = users.map(user => {
//             user.posts = posts.filter(post => post.userId === user.id);
//             return user;
//         });

//         console.log("Combined data:", combinedData);

//         return combinedData; // Return the combined data
//     } catch (error) {
//         console.error("Error:", error); // Handle errors if something goes wrong
//     }
// }

// // Call the function and log the result
// fetchAndCombineData()
//     .then(combinedData => {
//         console.log("Final Combined Data:", combinedData);
//     })
//     .catch(error => {
//         console.error("Error in final step:", error);
//     });


//  // TODO: Create a function that fetches multiple users in parallel
// // - Take an array of userIds
// // - Fetch all users simultaneously using Promise.all
// // - Handle errors for individual user fetches
// // - Return array of successfully fetched users

//     // Function to fetch users in parallel
// async function fetchMultipleUsers(userIds) {
//     const userPromises = userIds.map(userId => {
//         // For each userId, create a promise that fetches the user
//         return fetch(`https://api.example.com/users/${userId}`)
//             .then(response => {
//                 if (!response.ok) {
//                     // If the response is not OK, throw an error
//                     throw new Error(`User with ID ${userId} not found`);
//                 }
//                 return response.json();
//             })
//             .catch(error => {
//                 // Handle individual fetch errors (user fetch failed)
//                 console.error(`Error fetching user with ID ${userId}:`, error);
//                 return null;  // Return null if the fetch failed
//             });
//     });

//     try {
//         // Use Promise.all to fetch all users simultaneously
//         const users = await Promise.all(userPromises);

//         // Filter out any null values (failed fetches) and return the successful ones
//         const successfulUsers = users.filter(user => user !== null);

//         return successfulUsers;  // Return only the successfully fetched users
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         return [];  // Return an empty array if any unexpected error occurs
//     }
// }

// // Example usage
// const userID = [1, 2, 3, 4];  // Example user IDs to fetch
// fetchMultipleUsers(userIds)
//     .then(successfulUsers => {
//         console.log("Successfully fetched users:", successfulUsers);
//     })
//     .catch(error => {
//         console.error("Error in fetching users:", error);
//     });




// // Function to fetch users and their posts in parallel
// async function fetchUsersAndPosts(userIds) {
//     try {
//         // Fetch user data for multiple users
//         const userPromises = userIds.map(userId => 
//             fetch(`https://api.example.com/users/${userId}`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`User with ID ${userId} not found`);
//                     }
//                     return response.json();
//                 })
//                 .catch(error => {
//                     console.error(`Error fetching user with ID ${userId}:`, error);
//                     return null; // Return null if user fetch failed
//                 })
//         );


//  // TODO: Create a function that fetches users and their posts in parallel
// // - Fetch user data for multiple users
// // - Once user data is received, fetch all their posts in parallel
// // - Combine user and posts data
// // - Handle errors appropriately

//         // Fetch all users' data concurrently
//         const users = await Promise.all(userPromises);
        
//         // Filter out any null values (failed user fetches)
//         const successfulUsers = users.filter(user => user !== null);

//         // Fetch posts for each successful user concurrently
//         const postPromises = successfulUsers.map(user => 
//             fetch(`https://api.example.com/posts?userId=${user.id}`)
//                 .then(response => response.json())
//                 .then(posts => {
//                     user.posts = posts; // Add posts to the user object
//                     return user;
//                 })
//                 .catch(error => {
//                     console.error(`Error fetching posts for user with ID ${user.id}:`, error);
//                     user.posts = []; // If posts fetch fails, assign empty array
//                     return user;
//                 })
//         );

//         // Wait for all posts to be fetched
//         const usersWithPosts = await Promise.all(postPromises);

//         // Return the array of users with their posts
//         return usersWithPosts;
        
//     } catch (error) {
//         console.error("Error fetching users and posts:", error);
//         return [];  // Return an empty array if any unexpected error occurs
//     }
// }

// // Example usage
// const userIds = [1, 2, 3, 4]; // Example user IDs to fetch
// fetchUsersAndPosts(userIds)
//     .then(usersWithPosts => {
//         console.log("Users with posts:", usersWithPosts);
//     })
//     .catch(error => {
//         console.error("Error in final step:", error);
//     });

// // TODO: Test success cases
// // - Test single user fetch
// // - Test multiple user fetch
// // - Test error handling