// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
  return '' + this.string;
};

const paragraphSplit = (text) => {
  const expr = /\r\n|\r|\n/g;
  const lines = Array.isArray(text) ? text.join('').split(expr) : text.split(expr);
  const output = lines.filter(line => line).reduce((a, b) => `${a}<p>${b}</p>`, '');
  return new SafeString(output);
};

export default paragraphSplit;


