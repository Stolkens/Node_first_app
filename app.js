const fs = require('fs');
const { stringify } = require('querystring');

const genders = ['M', 'F'];
const maleNames = ['Franek', 'Zdzicho', 'Stach', 'Max', 'Jan', 'Kris', 'Maciek', 'Michał', 'Filip', 'Marcel'];
const femaleNames = ['Iga', 'Aga', 'Iza', 'Ola', 'Asia', 'Olga', 'Ela', 'Kinga', 'Zosia', 'Maja', 'Julia']; 
const lastNames = ['Nowak', 'Lenart', 'Bzik', 'Kukiz', 'Byczek', 'Burak', 'Filas', 'Kraken', 'Mucha', 'Bąk']
const people = [];

const randChoice = (arr) => {
  const randIndex = Math.floor(Math.random()*arr.length);
  return arr[randIndex]
}

for (let i = 0; i < 20; i++) {
  const obj = {};
  obj.gender = randChoice(genders);
  if(obj.gender==='M'){
    obj.name = randChoice(maleNames);
  }
  else {
    obj.name = randChoice(femaleNames)
  }
  obj.lastName = randChoice(lastNames);
  
  const min = 18;
  const max = 78;
  obj.age = Math.floor(Math.random() * (max - min + 1)) + min;
  people.push(obj);

}

const json = JSON.stringify(people);

fs.writeFile('people.json', json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});