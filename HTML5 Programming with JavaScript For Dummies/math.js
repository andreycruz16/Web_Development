function DoAdd(arguments) {
	 // Obtain the current values of Value1 and Value2.
	 var Value1 = new Number(document.getElementById("Value1").value);
	 var Value2 = new Number(document.getElementById("Value2").value);

	 // Set the result to reflect the addition
	 // of the two numbers.
	 document.getElementById("Result").setAttribute('value', (Value1 + Value2).toFixed(2));
}

function DoSub(argument) {
	var Value1 = new Number(document.getElementById('Value1').value);
	var Value2 = new Number(document.getElementById('Value2').value);
	document.getElementById('Result').setAttribute('value', (Value1 - Value2).toFixed(2));
}

function DoMul(argument) {
	var Value1 = new Number(document.getElementById('Value1').value);
	var Value2 = new Number(document.getElementById('Value2').value);
	document.getElementById('Result').setAttribute('value', (Value1 * Value2).toFixed(2)); /*USE TO FIEXED TO SET THE DECIMAL POINT*/
}

function DoDiv(argument) {
	var Value1 = new Number(document.getElementById('Value1').value);
	var Value2 = new Number(document.getElementById('Value2').value);
	document.getElementById('Result').setAttribute('value', (Value1 / Value2).toFixed(2));
}

/*(Value1 + Value2).toFixed(2));*/