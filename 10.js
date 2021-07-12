let input = prompt("Введите натуральльное число не более 1000");

if(input.length>0)
  checkPrime(input);

function checkPrime(input)
{
let checkedNumber = + input;

if(isNaN(checkedNumber))
{
  console.log("Это не число!");
  return -1;
}
if (checkedNumber<=0)
{
  console.log("Число должно быть больше 0!");
  return -1;
}

if (checkedNumber>1000)
{
  console.log("Число должно быть не больше 1000!");
  return -1;
}

if(checkedNumber.toString().includes("."))
{
  console.log("Число должно быть целым!");
  return -1;
}

if(checkedNumber===1)
{
  console.log("1 не является ни простым ни составным числом");
  return -1;
} 
 
let i=2;

while(i<Math.sqrt(checkedNumber) )
{
  if (checkedNumber%i==0)
  {
  	console.log("Это составное число");
    return 1;
  }
	i++;
}

console.log("Это простое число");
return 0;
}