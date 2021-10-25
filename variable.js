 // activity 1
 let name = 'Naghmeh';
 let age = 32;
 let favouriteColour = 'Green'
 console.log(`My name is ${name} and I am ${age} years old. My favourite colour is ${favouriteColour}.`)


 name = 'Alex';
 age = 22;
 favouriteColour = 'Red'
 console.log(`My name is ${name} and I am ${age} years old. My favourite colour is ${favouriteColour}.`)

// activity2
 let breakfast = 'toast';
 let lunch = 'pasta';
 let dinner = 'salad'
 console.log(`I have eaten ${breakfast} in morning and I had ${lunch} for lunch. I will have ${dinner} for dinner.`)

 breakfast = 'beans';
 lunch = 'pizza';
 dinner = 'rice'
 console.log(`I will have ${breakfast} in morning and I will have ${lunch} for lunch. I will have ${dinner} for dinner tommorrow.`)





// Activity1
 let age = 17;
 if (age > 17) {
     console.log("Yes I can serve you");
 }
 else {
     console.log("You aren't old enough")
 }
 let age = 18;
 let country = "UK"
 if (age > 17 && country == "UK" ) {
     console.log("Yes I can serve you");
 }
 else {
     console.log("You aren't old enough")
 }

// Activity2
 let topping = "peperroni";
 let favTopping = "chilli";
 let dontMindTopping = "sweetCorn"


  if (topping == "chilli") {
      console.log("These are important ingredients for my pizza");
  }
   else if (topping == "sweetCorn") {
        console.log(`I dont mind having ${topping} on my pizza`);
   } else {
       console.log(`${topping} should not be on a pizza `)
   }

// Activity3
 let PassWord = "123458525"
 if (PassWord.length < 8) {
     console.log("The Password is too short");
 } else {
     console.log(`${PassWord}`)
 }

 let num = 9
 if (num % 3 == 0 || num % 5 == 0) {
     console.log("This number is divisible by 3 or 5.")
 } else {
     console.log("This number is not divisible by 3 or 5.")
 }
    
// Activity4
 let num = 851
 if (num % 3 == 0) {
     console.log("fizz")
 } else if (num % 5 == 0) {
     console.log("buzz")
 } else if (num % 3 == 0 && num % 5 == 0) {
     console.log("FizzBuzz")
 } else
     console.log(`${num}`)


 // Activity 5
 num = 1001;

 let reverseNum = num.toString().split("").reverse().join("");
 if (num == reverseNum){
     console.log("It is a Palindrome");
 }else{
     console.log("It is NOT a Palindrome");
 }

 // Activity 6
 let time = 18;
 let placeOfWork = "Manchester";
 let townOfHome = "Stockport";
 if (time < 8 || time > 18){
     console.log(I am home in ${townOfHome});
 }else if (time == 8 || time == 18){
     console.log("I am commuting");
 }else{
     console.log(I am working in ${placeOfWork});
 }
 
 
// Activity 7
const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
const vowels = ['a', 'e', 'i', 'o', 'u'];

let highestIndex = 0;
let arrayLength = vowels.length;
//console.log(arrayLength.toString());

for (var i = 0; i < arrayLength; i++) {
    console.log(`${vowels[i]} ${string.lastIndexOf(vowels[i])}`);
    let lastVowelIndex = string.lastIndexOf(vowels[i]);
    if (lastVowelIndex > highestIndex){
        highestIndex = lastVowelIndex;
    }
    //console.log(vowels[i]);    
}
console.log(`highest index is ${highestIndex}`);
 

// Activity8
 let word = "dfgf"
 let i = word.length
 if (
     word[0] == word[i - 1]) {
     console.log("True")
 } else {
     console.log("False")
 }

// Activity9
 let num1 = 5
 let num2 = 6
 if ((num1 + num2) % 2 == 0) {
     console.log(num1 + num2)
 } else {
     console.log(5 * 6)
 }




