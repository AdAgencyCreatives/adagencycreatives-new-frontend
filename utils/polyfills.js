// utils/polyfills.js
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(str, newStr) {
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}