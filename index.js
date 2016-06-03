var ssi = require('ssi')
var path = require('path')
module.exports = function(content,file,setting){
  	var parser = new ssi(process.cwd(),process.cwd(),file.rExt,true)
  	var data = parser.parse(path.join(process.cwd(),file.subpath),content)
  	file.setContent(data.contents)
  	return data.contents
}