const inventors = [
    { name: 'Albert', lastName: 'Einstein', year:1879, passed: 1955 },
    { name: 'Isaac', lastName: 'Newton', year: 1643, passed: 1727 },
    { name: 'Galileo', lastName: 'Galilei', year: 1564, passed: 1642 },
    { name: 'Marie', lastName: 'Curie', year: 1867, passed: 1934 },
    { name: 'Johannes', lastName: 'Kepler', year: 1571, passed: 1630 },
    { name: 'Nicolaus', lastName: 'Copernicus', year: 1473, passed: 1543 },
    { name: 'Max', lastName: 'Planck', year: 1858, passed: 1943 },
];

const people = [
    'Beck, Glenn', 'Beckett, Samuel', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Begin, Menachen', 'Belloc, Hilarie', 'Bellow, Saul', 'Beneson, Peter', 'Albarrán, Aida', 'Ben-Curion, David'
];

//1. Filter the inventors list for those who were born in the 1500

console.log(inventors);
const inventorsFiltered = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
   
console.log(inventorsFiltered);

//2. With map, get an array of the inventory first and last names

const inventorsMap = inventors.map(inventor => `${inventor.name} ${inventor.lastName}`);
console.log(inventorsMap);


