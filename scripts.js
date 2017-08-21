var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
var value = (a*a)+(2*a*b)-(b*b);
alert('Wynik to: ' + value);
if(value<0)
{
	alert('Wynik jest ujemny');
} 

else alert('Wynik jest dodatni');

console.log('Triangle field with base a: ' + a + ' and height h: ' + b + ' is equal to: ' + value);