const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

	let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
	let separator = options.separator ? options.separator : '+';
	let addition = options.addition !== undefined ? String(options.addition) : '';
	let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
	let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
	
	let additionString = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
	
	return (str + additionString + separator).repeat(repeatTimes - 1) + str + additionString;

}

module.exports = {
  repeater
};
