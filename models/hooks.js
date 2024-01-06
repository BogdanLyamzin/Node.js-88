export function setUpdateSettings(next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
}
