alert(new Date());
function cha(){
	var x=document.getElementById('par1').style;
	x.color='darkorange';
	x.backgroundColor='black';
	x.fontFamily='Arial';
	x.textAlign='center';
	x.fontSize='3em';
}
function ftc(){
	var x = (20-32)*5/9;
	document.getElementById('res').innerHTML = 'The result is '+x+'celsius';
}
function sum(){
	var a = parseFloat(prompt('enter the first number'));
	var b = parseFloat(prompt('enter the second number'));
	alert(a+b);
}
function wgu(){
	var a = prompt('enter your first name');
	var b = prompt('enter your second name');
	alert('nice to meet you '+ a +' '+b);
} 
