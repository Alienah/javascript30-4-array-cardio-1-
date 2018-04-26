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

//3. with sort, order by bithdate, oldest to youngest

const inventorsSortedByBithday = inventors.sort((a , b) => a.year > b.year)

console.log(inventorsSortedByBithday);

//4. Reduce. How many years did the inventor live?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
},0);

console.log(totalYears);

//5. Sorte by years live

const inventorsSortedByYearsOld = inventors.sort((a , b) => 
    a.passed - a.year > b.passed - b.year
);

console.log(inventorsSortedByYearsOld);

//6. Create a list of Boulevards in Paris that contain 'de' in the name http://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// const linksWithDe = links.map(link => link.outerText).filter(name => name.includes('de'));

//7. Sort people list by lastName

const peopleSortedByLastName = people.sort( (a, b) => {
    const [aLast, aName] = a.split(', ');
    const [bLast, bName] = b.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(peopleSortedByLastName);

//8. Reduce. Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'bike'];

const dataSum = data.reduce((total, item )=>{
    if(!total[item]) {
        total[item] = 0;
    }
    total[item]++;
    return total;
}, {});

console.log(dataSum);




