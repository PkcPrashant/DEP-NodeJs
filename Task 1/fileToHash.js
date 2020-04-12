const fs = require('fs');
const crypto = require('crypto');

const fileToHash = (file,algo) => {
	const file_buffer = fs.readFileSync(file);
	let sum = crypto.createHash(algo);
	sum.update(file_buffer);
	return sum.digest('hex');
}

module.exports = fileToHash;