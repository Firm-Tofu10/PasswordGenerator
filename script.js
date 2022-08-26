//The following arrays are used to specify the character being inserted to the generator output.
const lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

const coolSymbol = ['!', '@', '#', '$', '%', '^', '&', '*'];

const uperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const coolNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//Set all the IDs to false till checked
let checkBoxMap = {
	up: false,
	digit: false,
	sym: false
	// if ("checkBoxValue".checked === true) {
// }
};
//Set the password field to empty
var passwordDisplay = "";
//Checks if the checkbox is checked
function checkCheckbox(element) {
	const checkboxValue = document.getElementById(element).checked
	checkBoxMap[element] = checkboxValue
	if (checkboxValue) {
		console.log("true");
		return true;
	}
		else 
		{
		console.log("false"); 
		return false;
	}
};

//Generates the password field from the bigArrays below based on the checkbox values
	const gen = () => {
		passwordDisplay = ""
		var characterAmount = document.getElementById("characterAmount").value;
		var bigArray = [...lowerCase]
		if (checkBoxMap['sym']) { bigArray = [...bigArray,...coolSymbol]
		}
		if (checkBoxMap['digit']) { bigArray =  [...bigArray,...coolNumber]
		}
		if (checkBoxMap['up']) { bigArray = [...bigArray,...uperCase]
		}
		for (let i = 0; i < characterAmount; i++) {
			const random = Math.floor(Math.random() * bigArray.length);
			passwordDisplay += bigArray[random]
		}

		document.getElementById('passwordDisplay').innerHTML = passwordDisplay;

		
	};