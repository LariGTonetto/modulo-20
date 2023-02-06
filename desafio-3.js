let Soma = 0
function getSoma() 
{
for (var a = 0; a < 1000; a++) 
{if (a % 5 == 0 || a % 7 == 0) 
{Soma += a;}
}
return Soma
}
console.log(getSoma())
export default Soma
