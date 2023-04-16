const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		message = message.toUpperCase();
		key = key.toUpperCase();

		for (let i = 0, j = 0; i < message.length; i++) {
			const messageChar = message[i];
			const messageCharCode = alphabet.indexOf(messageChar);

			if (messageCharCode === -1) {
				result += messageChar;
				continue;
			}

			const keyChar = key[j % key.length];
			const keyCharCode = alphabet.indexOf(keyChar);
			const encryptedCharCode = (messageCharCode + keyCharCode) % alphabet.length;
			const encryptedChar = alphabet[encryptedCharCode];

			result += encryptedChar;
			j++;
		}

		return this.direct ? result : result.split('').reverse().join('');
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error('Incorrect arguments!');
		}

		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();

		for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
			const encryptedChar = encryptedMessage[i];
			const encryptedCharCode = alphabet.indexOf(encryptedChar);

			if (encryptedCharCode === -1) {
				result += encryptedChar;
				continue;
			}

			const keyChar = key[j % key.length];
			const keyCharCode = alphabet.indexOf(keyChar);
			const decryptedCharCode = (encryptedCharCode - keyCharCode + alphabet.length) % alphabet.length;
			const decryptedChar = alphabet[decryptedCharCode];

			result += decryptedChar;
			j++;
		}

		return this.direct ? result : result.split('').reverse().join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
