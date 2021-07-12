
let y = 1;
//let y = '1';
//let y = true;

printType(y);

function printType(x)
{
switch (typeof(x))
{
case 'number':
	console.log("число");
  break;
case 'boolean':
	console.log("логический тип");
  break;
case 'string':
	console.log("строка");
  break;
default:
console.log("тип не определен");
}
}