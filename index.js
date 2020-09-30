const myInformation = require('./information.js');
let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello ${myInformation.name} from the campus of ${myInformation.campus}`,
	e : "oO",
	T : "U "
}));
