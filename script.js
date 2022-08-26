//The following arrays are used to specify the character being inserted to the generator output.
const lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

const coolSymbol = ['!', '@', '#', '$', '%', '^', '&', '*'];

const uperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const coolNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


var passwordDisplay = "";

function checkCheckbox(element) {
	console.log(element);
	const checkbox = document.getElementById(element);
		console.log(checkbox);
	if (checkbox.checked) {
		console.log("true");
		return true;
	}
	else {
		console.log("false");
		return false;
	}
};


	const gen = () => {
		passwordDisplay = ""
		var characterAmount = document.getElementById("characterAmount").value;

		for (let i = 0; i < characterAmount; i++) {
			const random = Math.floor(Math.random() * lowerCase.length);
			passwordDisplay += lowerCase[random]
		}

		document.getElementById('passwordDisplay').innerHTML = passwordDisplay;

		var bigArray = [...uperCase, ...coolSymbol, ...coolNumber, ...lowerCase]
	};

	//The for loops below are used to generate the random arrays to the required length.

	// for (var i = 0; i <= passwordLength; i++) {
	// 	var randomNumber = Math.floor(Math.random() * lowerCase.length);
	// 	password += chars.substring(randomNumber, randomNumber + 1);
	// }

	// for (var i = 0; i <= passwordLength; i++) {
	// 	var randomNumber = Math.floor(Math.random() * upperCase.length);
	// 	password += chars.substring(randomNumber, randomNumber + 1);
	// }

	// for (var i = 0; i <= passwordLength; i++) {
	// 	var randomNumber = Math.floor(Math.random() * coolSymbol.length);
	// 	password += chars.substring(randomNumber, randomNumber + 1);
	// }

	// for (var i = 0; i <= passwordLength; i++) {
	// 	var randomNumber = Math.floor(Math.random() * coolNumber.length);
	// 	password += chars.substring(randomNumber, randomNumber + 1);
	// }

// function gen(){document.getElementById("btnGenerate").addEventListener("onclick")};

