// function SumArguuements(...numbers){
//     let sum=numbers.reduce(function(acc,curr){
//         return acc+curr;

//     },0)
//     return sum;
// }
// console.log(SumArguuements(10,20));

// *******************************




// const students=[
//     { name: "mithun",
//       mark:95
//     },
//     {
//         name:"kumar",
//         mark : 87
//     }

// ]
// function checkResults(name)



// *********************************



// function CalculateCartValue(...numbers){
//     let result=numbers.reduce(function(acc,curr){
//         return (acc+curr);

//     },0)
//     console.log(result)
// }
// CalculateCartValue(100,100,100);
// CalculateCartValue(1000,2000,340,65,67,78);


// *********************************


// function generateotp(){
//     let otp=[];
//     for(let i =0 ;i<4;++i ){
//         let a=Math.floor(Math.random() * (10 - 1) + 1)
//         otp.push(a);

// }
// let num=otp.join("");
// return num;
// }


// console.log(generateotp());


// **********************************



// const students=[
//         { name: "mithun",
//           mark:95
//         },
//         {
//             name:"kumar",
//             mark : 87
//         }
    
// ]

// const checkResults=(name)=>{
//     for(let student of students){
//         if(student.name===name){
//             return student.mark>90 ? (console.log(`congratulation ${name} you have passed`)) : (console.log(`sorry ${name} not cleared`));
//         }
//         else{
//             console.log("invalid user")
//         }
//     }
// }

// (checkResults("mithun"));



// *********************************






// const users=[
//         { name: "mithun",
          
//         },
//         {
//             name:"kumar",
            
//         }
    
// ]

// const checkUserName=(name)=>{
//     for(let user of users){
//         if(user.name===name){
//             return console.log(`${name} is a valid user `)
//         }
//         else{
//             console.log(`${name} is a invalid user`)
//         }
//     }
// }

// (checkUserName("mithun"));


// ******************************




// const products = [
//     { name: "Laptop", price: 120000 },
//     { name: "Mobile", price: 70000 },
//     { name: "Laptop Bag", price: 20000 },
//     { name: "Watch", price: 20000 },
//     { name: "Mobile Charger", price: 1500 },
//   ];
  
//   let max = { name: "", price: 0 };
//   let min = { name: "", price: Number.MAX_VALUE };
  
//   for (let product of products) {
//     if (product.price > max.price) {
//       max=product;
//     }
//     if (product.price < min.price) {
//       min = product;
//     }
//   }
  
//   console.log(
//     `The product with maximum ammount is ${max.name} which is priced at Rs. ${max.price}`
//   );
//   console.log(
//     `The product with minimum ammount is ${min.name} which is priced at Rs. ${min.price}`
//   );


// ***********************************************


// const guests = ["Anurag", "Mithun", "Alka", "Prabir", "Shivam", "Farman"];
// console.log(guests.join(","));


// const productDetails = {
//     name: "Apple 2020 MacBook Air Laptop",
//     price: 82000,
//     color: "Grey",
//     hardDisk: "256 GB",
//   };

  
// for(let keys of Object.keys(productDetails)){
//     console.log(`${keys}:`, `${productDetails[keys]}`);
// }



// *********************************



// const CalculateRemainingDays=(eventdate)=>{
//     const todaydate=new Date();
//     const evendatetime=new Date(eventdate);

//     const timediff=evendatetime-todaydate;
//     const Remaingdays=Math.floor(timediff/(1000*24*60*60));

//     console.log(Remaingdays);

// }

// const eventdate='2023-08-16';
// CalculateRemainingDays(eventdate);
