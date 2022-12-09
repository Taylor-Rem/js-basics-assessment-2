///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) =>
  Math.round(cartTotal * (tax + 1) * 100) / 100 - couponValue;

console.log(calcFinalPrice(summedPrice, 5, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Property 1 - customer name: used to identify the customer. The value is a string
    
    Property 2 - customer phone number: used to contact customer for order updates. The value is a number so we can easily change it use it in a method.

    Property 3 - customer email: used to send customer promotions and updates. The value is a string

    Property 4 - customer previous orders: used to see what the customer likes to order to suggest their next order. The value is an object containing arrays to allow array methods to be used as well as to label orders chronologically

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
  name: "John Doe",
  phoneNumber: 1234567890,
  email: "johndoe@email.com",
  previousOrders: {
    lastOrder: ["burger", "fries", "Coca Cola"],
    lastOrder2: ["pizza", "Dr Pepper"],
  },
};
