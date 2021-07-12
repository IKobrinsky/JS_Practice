let input = prompt("Введите число");

let checkedNumber = + input;

if(typeof(checkedNumber)!="number" || isNaN(checkedNumber))
	console.log("Упс, кажется, вы ошиблись");
else
{
	console.log(checkedNumber%2==0? "четное" : "нечетное" );	
}