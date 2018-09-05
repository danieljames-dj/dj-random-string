var stringLength = 6
var charSet = "abcdefghijklmnopqrstuvwxyz0123456789"

module.exports.setStringLength = function(length) {
	stringLength = length
}

module.exports.addCharSet = function(char) {
	charSet += char
}

module.exports.generateRandomString = function() {
	var string = ""
	for (var i = 0; i < stringLength; i++) {
		string += charSet.charAt(Math.floor(Math.random() * charSet.length))
	}
	return string
}