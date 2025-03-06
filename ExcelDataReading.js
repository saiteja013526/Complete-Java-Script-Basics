const XLSX = require('xlsx');

//reading the file

const file = XLSX.readFile('./Names.xlsx');  // this is an object now
//console.log(typeof(file));


//get the first sheet name
const sheetName = file.SheetNames[1];  //0

//get the sheet data
const sheet = file.Sheets[sheetName];

//convert sheet data to json format
const jsonData= XLSX.utils.sheet_to_json(sheet);
//console.log(jsonData);




//////////////////////////////////////////////////////////////////////////////////////////////

/*
another way / approach to read the excel file data
 */

const reader = require('xlsx');

//reading the required file
const File = reader.readFile('./Names.xlsx');
let data =[]; //taking an empty array

const sheets = file.SheetNames;   //--> this prints an array in which there will be sheet names.
//console.log(sheets);  // [ 'sheet 1', 'sheet 2' ]   




for(let i = 0; i < sheets.length-1; i++){
  const temp = reader.utils.sheet_to_json(File.Sheets[File.SheetNames[i]])
  temp.forEach((res) => {
    data.push(res)
  })

}
console.log(data);

