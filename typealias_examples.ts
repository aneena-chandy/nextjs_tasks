/*Create a Product type having
id
name
price
stock
Then create two products.*/

type Product = {
    id:number;
    name :string;
    price:number;
    stock:number;
}

const laptop :Product ={
    id:1,
    name:"HP",
    price:65000,
    stock:10
};
 const mobile : Product ={
    id: 2,
    name: "iPhone",
    price: 90000,
    stock: 5
 };

 console.log(laptop);