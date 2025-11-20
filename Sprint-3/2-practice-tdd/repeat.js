function repeat(str, count) {
  const numCount = Math.floor(count);

  if (numCount >= 1) {
    return str.repeat(count);
  }
  else if (numCount === 0) {
    return "";
  }
  else if (numCount < 0) {
    return "invalid count";
  }
}

module.exports = repeat;

