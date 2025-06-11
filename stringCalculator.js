function add(numbers) {
      let delimiter = /,|\n/;
  if (numbers.length <= 0) return 0;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterLine = parts[0];

    const matches = delimiterLine.match(/\[([^\]]+)\]/g);
    if (matches) {
      const delimiters = matches.map((d) => d.slice(1, -1));
      delimiter = new RegExp(delimiters.map((d) => escapeRegex(d)).join("|"));
    } else {
      delimiter = new RegExp(escapeRegex(delimiterLine.slice(2)));
    }

    numbers = parts.slice(1).join("\n");
  }

  const values = numbers.split(delimiter);
  const listOfNumbers = values.map(Number);
  const negativeNumberList = listOfNumbers.filter((num) => num < 0);
  if (negativeNumberList.length)
    throw new Error(
      `negative numbers not allowed <${negativeNumberList.join(",")}>`
    );
  if (values.length === 1) return parseInt(values.join(""));
  else return values.map(Number).reduce((acc, num) => acc + num);
}
function escapeRegex(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
module.exports = add;
