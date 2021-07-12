let arr = [1,1,1,1,1];

let same =true;
let i=1;
while (i<arr.length && same)
{
	same = arr[0] === arr[i]; // в условии не сказано, как именно трактовать одинаковость
	i++;
}
console.log(same);
	