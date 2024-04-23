const character = "!";
console.log(character);
const count = 10;
const rows = [];
let inverted = false
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//Change code to a different kind of loop
for (let i = 1; i <= count; i++) {
  if(inverted){
    rows.unshift(padRow(i, count));
  }
  else{
    rows.push(padRow(i, count));
  }
}
//Remember: false, 0, "", null, undefined, and NaN are falsy values
//let done = 0;
/*while(rows.length < count){
  //done++;
  rows.push(padRow(rows.length + 1,count));
};*/
/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/
let result = "";
console.log(result);
for (const row of rows){
  result = result + "\n" + row;
};