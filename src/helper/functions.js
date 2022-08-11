export const numberWithCommas = (num) => {
  return parseFloat(num)
    .toFixed(1)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const intToString = (value) => {
  var suffixes = ["", "K", "M", "B", "T"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(100, suffixNum) : value).toPrecision(5)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
