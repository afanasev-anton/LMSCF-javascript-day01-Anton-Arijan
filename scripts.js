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

//advanced ex1
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

c = Number(c);
d = Number(d);
var sum = a+b+c+d+e;

var f = '1';
var g = 15;
var h = 8;
var i = "1";

f = Number(f);
i = Number(i);

var mul=f*g*h*i;

console.log(sum/mul);

//ex 2
var arrM = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(arrM[1][1]);
console.log(arrM[4][2]);
console.log(arrM[5][3]);
console.log(arrM[2][3]);
console.log(arrM[2][1]);

//chalange
var word1 = "";
var d = [ ["Vienna","__","_","____","____"],
["______","is","_","____","____"],
["______","__","a","____","____"],
["______","__","_","nice","____"],
["______","__","_","____","city"] ];

var text="";
console.log(d);
for (var i = 0; i <= 4; i++) {
	for (var j = 0; j <= 4; j++) {
		text = text + d[i][j] ;
		console.log(i+" / "+j);
	}
	text = text + "<br>";
}

document.getElementById("vienna").innerHTML = text;

var struct = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up."
var arr = struct.split("$");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + " ";
}
document.getElementById("chalange").innerHTML = text;

console.log(struct);