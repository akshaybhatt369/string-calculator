function add(numbers) {
  if (numbers.length <= 0) return 0;

  let delimiter = /,|\n/;
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
module.exports = add;
