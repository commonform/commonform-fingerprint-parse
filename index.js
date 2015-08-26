var re = /^commonform@(\d+\.\d+\.\d+)#([a-f0-9]{64})$/

module.exports = function(string) {
  var match = re.exec(string)
  if (match) {
    return {
      version: match[1],
      digest: match[2] } }
  else {
    return false } }
