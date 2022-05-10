function drawCharacterSquare() {
	const measure = Number(document.getElementById('input-size').value);
	const userCharacter = document.getElementById('input-charac').value;
	console.log(measure, userCharacter);
	
	let arrayCharacterLine = [];
	let arrayCharacterSquare = [];
	let arraySquareFormat = [];
	

	for (let index = 0; index < measure; index++) {
		arrayCharacterLine = userCharacter.repeat(measure)

		arrayCharacterSquare.push(`${arrayCharacterLine} \n`)

    	arraySquareFormat = arrayCharacterSquare.join(``)
		
	}
	console.log(arraySquareFormat);

	document.getElementById('result').innerHTML = arraySquareFormat;
}
