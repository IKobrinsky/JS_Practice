let arr = [1,2,0,"aaa",1.5];
 
printParityStatus(arr);

function printParityStatus(arr)
{
if (Array.isArray(arr))
{
	let oddCount = 0;
	let evenCount = 0;
	let zeroCount = 0;

	for(let x of arr)
	{
		if(typeof(x)=="number" && !isNaN(x))
  	{
  		if (x==0) zeroCount++;
    	else
    	{
	      if(x%2==0) evenCount++;
	      if(x%2==1) oddCount++;
  	  }
  	}
	}

	console.log(`четных - ${evenCount}, нечетных - ${oddCount} `);
	if (zeroCount>0)
		console.log(`нулей - ${zeroCount}`);
}
else
	console.log(`это не массив`);
}