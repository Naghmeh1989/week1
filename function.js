//  Activity 1

const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else{
        return (n * factorial(n-1));
    }
    
}
console.log (factorial(33));

// Activity 2
let orderCount = 0;

const takeOrder = (topping, topping2) => {
    console.log(`Pizza with ${topping} and ${topping2}`)
    orderCount ++;
}


//Activity3

const coffeeShop = {
    branch: "wood",
    drinks: [
        ["water"],
        ["1.5"],
        ["iced water"],
        ["2.54"],
        ["tea"],
        ["2"]
    ],
    food: {
        bread: 1,
        rice: 2.5,
        oats: 2.7,
        potato: 3.43
    },
    drinksOrdered(drink1, drink2) {

        // take items from array object and put into another array
        let result = coffeeShop.drinks.map(element => element.join())

        let i1 = result.indexOf(drink1)
        let i2 = result.indexOf(drink2)
        let m1 = result.indexOf(drink1) + 1
        let m2 = result.indexOf(drink2) + 1

        let price = parseFloat(((result[m1]) + (result[m2])))
        let pricefixed = price.toFixed(2)
        console.log(`your order is ${result[i1]} and ${result[i2]}. your total is £${pricefixed}`);


    },
    foodOrdered(food1, food2) {

        //Object.keys and Object.values takes the keys and value of an object and put them into an array

        let food = Object.keys(coffeeShop.food);
        let prices = Object.values(coffeeShop.food)

        //using indexOf to find the index of the foods in the array we just created. Index is later used to find the food in the array depending on what arguements are passed when calling the function
        let f1 = food.indexOf(food1)
        let f2 = food.indexOf(food2)

        //index of food matches index of array so food name index is used find price and put in an equation
        let price = parseFloat(((prices[f1]) + (prices[f2])).toFixed(2))

        console.log(`your order is ${food[f1]} and ${food[f2]}. your total is £${price}`);

    }
}
console.log(coffeeShop.drinksOrdered("iced water", "water"))
coffeeShop.foodOrdered("oats", "potato")

takeOrder("pineapple", "pepperoni");
takeOrder("ham", "extra cheese");
console.log(orderCount);
