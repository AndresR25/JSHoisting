console.log(hello);                                   
var hello = 'world';   //undefined


var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle); //magnet
}


var brendan = 'super cool';
function print(){
	brendan = 'only okay';

}
console.log(brendan);//super cool


var food = 'chicken';
console.log(food);//chicken
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);//half-chicken
	var food = 'gone';
}


mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);//I don't know, maybe an error



console.log(genre);//undefined
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);//rock
	var genre = "r&b";
	console.log(genre);//r&b
}
console.log(genre);//disco


dojo = "san jose";
console.log(dojo);//san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);//seattle
	var dojo = "burbank";
	console.log(dojo);//burbank
}
console.log(dojo);//san jose

