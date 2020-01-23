//document.write("my name is BART")
console.log("help me, browser speaks with me");
var name="Bart";
console.log("My name is "+name);
var age="25";
console.log("I am "+age+" years old");
var players=["Martin","Thomas","Peter","Mathias","Niki"];
var playerAge=[12,14,3,5,67,88,33];
console.log(players.slice(2,4));
console.log("my name is "+players[3]+", i am "+playerAge[3]);

var a = true;
console.log(a);
a=10<4;
console.log(a);

var b = 45;
console.log(b);
a = b-2;
console.log(a);

var cars=["Tesla","Audi","Renault","Volvo","Mazda","Fiat","Ferrari"];

console.log(cars.sort());

document.getElementById("print").innerHTML = cars;

//fruits example
var fruits=["Apple","Banana","Kiwi"];
fruits[3]="Orange";
console.log(fruits);

console.log(fruits.slice(0,3));

//animals example
var animals=["Monkey","Horse","Dog"];
console.log(animals);
console.log(animals.sort());
animals[3]="Cat";
console.log(animals);
console.log(animals.sort());

//exersize 3
var myString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

var text = "";
var length = myString.length;
console.log(length);

do {
var posOfslash = myString.search("/");
text = text + myString.slice(0,posOfslash) + "<br>";
myString = myString.slice(posOfslash+1,myString.length);
console.log(myString.length);
} while (myString.length>posOfslash)
document.getElementById("fruit").innerHTML = text;

myString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var arr = myString.split("/");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}
document.getElementById("fruit_1").innerHTML = text;

//console.log(myString.length);