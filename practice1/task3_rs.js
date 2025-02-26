/*You have an array called productPrices with various product prices.

Apply a 10% discount to all prices using the map method and
store the results in a new array called discountedPrices.

Use the filter method to create a new array called affordableProducts
containing only products priced below $50

Calculate the total cost of all items in the affordableProducts array
using the reduce method.*/ 

let product_prices = [10,99.5,567,99,0.5,43.3,76,89,46,69]
disc_10list = product_prices.map(prod1=>prod1-(prod1/10)).filter(prod1=>prod1<50).reduce((prod1,prod2)=>prod1+prod2)
console.log(disc_10list)