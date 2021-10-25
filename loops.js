// Activity1
 let favFilm = ["f1", "f2", "f3", "f4", "f5"];
 favFilm.push("f6", "f7"); 
 for (let i = 0; i < favFilm.length; i++){
     console.log(favFilm[i]);
 }



// Activity2
 let randomNumber = 5
 for (let i = 0; i < 6; i++) {
     randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1
     console.log(randomNumber);
 }




// Activity3
 for (let i = 0; i < 10; i++){
     console.log(i);
 }
 for (let i = 9; i > -1; i--){
     console.log(i);
 }



// Activity4
 let favFilm = ["f1", "f2", "ghostbusters", "f4"];
 for (let i = 0; i < favFilm.length; i++){
      console.log(favFilm[i]);
 } if (favFilm[2] == "ghostbusters") {
     console.log("yay it is ghostbusters");
 } else {
     console.log("boo! we want ghostbusters!")
  }



// Activity5
 let randomNumber = 5
  for (let i = 0; i < 6; i++) {
     randomNumber = Math.floor(Math.random() * (30 - 1 + 1)) + 1

     console.log(randomNumber);
      if (randomNumber % 7 == 0) {
          console.log("yes");
      } else {
          console.log("no")
      }
  }


// Activity6
 let BobsFollowers = ["f1", "f2", "f3", "f4"];
 let HannahsFollowers = ["f1", "f7", "f3", "f5"];
 for (let i = 0; i < 4; i++) if (
     BobsFollowers[i] == HannahsFollowers[i]
 )
 {
     console.log(BobsFollowers[i]);
 }

//  Activity 7


let text = "";
let i = 0;
do {
    text = "The number is " + i;
    console.log(text)
    i++;
}
while (i < 5);

i = 0;

for (i = 0; i < 5; i++) {
    text = "The number is " + i ;
    console.log(text)
}

i = 0;

while (i < 5) {
    text = "The number is " + i;
    console.log(text)
    i++;
}






// Activity1/
  let favSongs = ["f1", "f2", "f3", "f4"];
  console.log(favSongs);
  favSongs.push("f12", "f14")
 console.log(favSongs);
 favSongs.pop()
  console.log(favSongs);

//  Activity 2 

let numbers = [4, 9, 16, 25];
let map = numbers.map(Math.sqrt)
let shift = numbers.shift()
let unshift = numbers.unshift(36)
let splice = numbers.splice(2, 0, "Lemon", "Kiwi")

console.log(map, shift, unshift)








