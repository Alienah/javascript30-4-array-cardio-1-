const inventors = [
    { name: 'Albert', lastName: 'Einstein', year:1879, passed: 1955 },
    { name: 'Isaac', lastName: 'Newton', year: 1643, passed: 1727 },
    { name: 'Galileo', lastName: 'Galilei', year: 1564, passed: 1642 },
    { name: 'Marie', lastName: 'Curie', year: 1867, passed: 1934 },
    { name: 'Johannes', lastName: 'Kepler', year: 1571, passed: 1630 },
    { name: 'Nicolaus', lastName: 'Copernicus', year: 1473, passed: 1543 },
    { name: 'Max', lastName: 'Planck', year: 1858, passed: 1943 },
];

//1. Filter the inventors list for those who were born in the 1500

console.log(inventors);
const inventorsFiltered = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
   
console.log(inventorsFiltered);

//2. With map, get an array of the inventory first and last names

const inventorsMap = inventors.map(inventor => `${inventor.name} ${inventor.lastName}`);
console.log(inventorsMap);

//3. with sort, order by bithdate, oldest to youngest

const inventorsSortedByBithday = inventors.sort((a , b) => a.year > b.year ? 1 : -1);

console.log(inventorsSortedByBithday);

// 4. Reduce. How many years did the inventor live?

const totalYears = inventors.reduce((accumulator, inventor) => {
    return accumulator + (inventor.passed - inventor.year);
},0);

console.log(totalYears);

//5. Sorted by years live

// const inventorsSortedByYearsOld = inventors.sort((inventorA , inventorB) => 
//     inventorA.passed - inventorA.year > inventorB.passed - inventorB.year ? 1 : -1
// );

// console.log(inventorsSortedByYearsOld);

//6. Create a list of Boulevards in Paris that contain 'de' in the name http://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// const linksWithDe = links.map(link => link.outerText).filter(name => name.includes('de'));

const people = [
    'Beck, Glenn', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Beckett, Samuel', 'Begin, Menachen', 'Bellow, Saul', 'Bellow, Hilarie', 'Beneson, Peter', 'Albarrán, Aida', 'Ben-Curion, David'
];

//7. Sort people list by lastName

const peopleSortedByLastName = people.sort( (personA, personB) => {
    const personALastName = personA.split(', ')[0];
    const personBLastName = personB.split(', ')[0];
    return personALastName > personBLastName ? 1 : -1;
});

console.log(peopleSortedByLastName);

//If we want to sort by last and firstname:

const alpha = people.sort(function (personA, personB) {
    const personALastName = personA.split(', ')[0];
    const personBLastName = personB.split(', ')[0];

    if (personALastName > personBLastName) {
        return 1;

    } else if (personALastName < personBLastName) {
        return -1;

    } else {
        const personAFirstName = personA.split(', ')[1];
        const personBFirstName = personB.split(', ')[1];

        if (personAFirstName > personBFirstName) {
            return 1;

        } else if (personAFirstName < personBFirstName) {
            return -1;
        }
    }
});

console.log(alpha);


//8. Reduce. Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'bike'];

const dataSum = data.reduce((accumulator, currentValue )=>{
    if(!accumulator.hasOwnProperty(currentValue)) {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
}, {});

console.log(dataSum);




