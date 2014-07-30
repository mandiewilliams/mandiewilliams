//alert("Hello World");
/* myArr = ["snoopy", "charlie brown", "lucy"];
var snoopyPosition = myArr.indexOf("snoopy");
//alert(snoopyPosition);
console.log(myArr[snoopyPosition]);
console.log(":)");*/

var femaleSingers = ["beyonce", "alison mosshart", "lorde"];
var maleSingers = ["jack white", "drake", "johnny cash"];
var singers = [femaleSingers, maleSingers];
console.log(singers [0] [0], singers [1] [0]);

var x = 5;
var y = 10;
var res = x+y;
console.log(res);

var fname = "Amanda";
var lname = "Williams";
var fullName = fname + " " + lname;
console.log(fullName);

var music = ["metal", "rock", "folk"];
var inst = ["guitar", "bass", "drums"];
var hobbies = [music, inst];
console.log(hobbies [0] [0], hobbies [1] [1]);
console.log(hobbies [0] [1], hobbies [1] [0]);
console.log(hobbies [0] [2], hobbies [1] [2]);

if (2<10) {
	console.log("yes");
}
else {
	console.log("more than 10");
}	

var x = 10;

if (x<10) {
	console.log("this is less than 10")
}
else if(x===10) {
	console.log("you entered 10")
}
else{
	console.log("the variable is "+x+" and it's greater than 10")
}

function alertName(somename) {
	return alert(somename);
}
//alertName("amanda");
function falseAlarm() {
	return alert("boo");
}
falseAlarm();

function winner(door) {
	if (door === 1) {
		alert("you win a pig")
	}else if (door === 2) {
		alert("you win a car")
	}else {
		alert("you win nothing")
	}
}
winner(3);