
// 1.
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//     const status = true
//     if(status){
//         resolve({name:"hero"})
//     }
//     else{
//         reject("server error")
//     }
//     })
//     }
//     console.log(fetchData());
    
//     fetchData()
//     .then(res => console.log(res))
//     .catch(err =>console.log(err))
//     2.
//     function delay(ms) {
//         return new Promise(resolve => setTimeout(() => resolve("Done!"), ms));
//     }
    
//     async function fetchData() {
//         console.log("Fetching data...");
//         let result = await delay(2000);
//         console.log(result);
//     3.
//     async function myFunction() {
//         return "Hello";
//        }
    
    
//        myFunction().then(console.log);
    
//     }
//     fetchData();
//     console.log("Next task...");
    
//     4.
//     In JavaScript, what is the difference between throw and return inside a try block?
    
//     A
    
//     throw returns a value, while return raises an exception
//     B
    
//     throw raises an exception, while return exits the function
//     C
    
//     Both are used to exit a function
//     D
    
//     There is no difference between throw and return                                                                                    give me just answer
    
//     5.
//     async function myfunction() {
//         const a = await fetch("https://jsonplaceholder.typicode.com/users")
//         const b = await a.json()
//         console.log(b);
        
//         //keno then use korte hoinai ?
        
//     }
    
//     myfunction()
//     6.
//     In a fetch call, how can you check if the response was successful?
    
//     A
    
//     response.ok
//     (explore this type of feature)