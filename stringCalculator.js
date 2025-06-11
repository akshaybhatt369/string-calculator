function add(numbers){
if(numbers.length <=0) return 0;

let delimiter = /,|\n/;
const values = numbers.split(delimiter)
if (values.length === 1) return parseInt(values.join(""))
else return  values.map(Number).reduce((acc,num) => acc + num)
}
module.exports = add;