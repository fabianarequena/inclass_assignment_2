// Task 1: Working with Arrays

// let products = [
//     { name: "Laptop", price: 1200, category: "Electronics"},
//     { name: "Desk Chair", price: 1250, category: "Furniture"}
// ];

// function getProductsByCategory(products, category) {
//     return products.filter(product => product.category === category)
// }

// console.log(getProductsByCategory(products, "Electronics"));

// Task 2: Array methods - Map

// let products = [
//     { name: "Laptop", price: 1200, category: "Electronics"},
//     { name: "Desk Chair", price: 1250, category: "Furniture"}
// ];

// function applyDiscount(products, discountRate) {
//     return products.map(product => ({
//         ...product,
//         price: product.price - (product.price * discountRate) 
//     }
//     ))
// }

// console.log(applyDiscount(products, .1));



// function sum3 (x, y, z) {
//     return x+y+z
// }

// let numbers = [1,2,3]
// console.log(sum3(...numbers));


// Task 3: Array Methods - Reduce

// let sales = [250, 400, 300, 500, 800, 950];
// function calculateTotalRevenue(sales) {
   
//     return sales.reduce((total, sale)=> total + sale, 0) // 0 is starting number for total

// }

// console.log(calculateTotalRevenue(sales));


// Task 4: Object Manipulation

let employee = {
    name: "Fabi",
    salary: 800000,
    position: "Duke"
};

function updateSalary(employee, percentageIncrease) {
    employee.salary += employee.salary * percentageIncrease;
};

updateSalary(employee, .1)

console.log(employee)
