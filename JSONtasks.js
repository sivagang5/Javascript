// Problem 0 - Part A

var cat = {
name: 'Fluffy',
activities: ['play', 'eat cat food'],
catFriends: [{name: 'bar',
activities: ['be grumpy', 'eat bread omlet'],
weight: 8,
furcolor: 'white'}, 
{name: 'foo',
activities: ['sleep', 'pre-sleep naps'],
weight: 3}]
}
console.log(cat);

// Add height and weight to Fluffy
cat.weight=50
cat.height=60

// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name='Fluffyy'

// List all the activities of Fluffyy’s catFriends
console.log(cat.catFriends[0].activities)
console.log(cat.catFriends[1].activities)

// Print the catFriends names
console.log(cat.catFriends[0].name)
console.log(cat.catFriends[1].name)

// Print the total weight of catFriends
console.log(cat.catFriends[0].weight+cat.catFriends[1].weight)

// Print the total activities of all cats (op:6)
console.log(cat.activities.length+cat.catFriends[0].activities.length+
cat.catFriends[1].activities.length)

// Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push('activity2','activity3')
cat.catFriends[1].activities.push('activity2','activity3')

// Update the fur color of bar
cat.catFriends[0].furcolor='red'

// Problem 0 - Part B

var myCar = {
make: 'Bugatti',
model: 'Bugatti La Voiture Noire',
year: 2019,
accidents: [
{
date: '3/15/2019',
damage_points: '5000',
atFaultForAccident: true
},
{
date: '7/4/2022',
damage_points: '2200',
atFaultForAccident: true
},
{
date: '6/22/2021',
damage_points: '7900',
atFaultForAccident: true
}
]
}

// Loop over the accidents array. Change atFaultForAccident from true to false.
a=myCar.accidents.length
for (i=0;i<a;i++) {
    myCar.accidents[i].atFaultForAccident=false
}

// Print the date of my accidents
a=myCar.accidents.length
for (i=0;i<a;i++) {
    console.log(myCar.accidents[i].date)
}

// Problem 1

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};

// Write a function called “printAllValues” which returns an newArray of all the input object’s values.
function printAllValues(ob) {
    arr = Object.values(ob)
    console.log(arr)
}
printAllValues(obj)

// Problem 2

// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
function printAllKeys(ob) {
    arr = Object.keys(ob)
    console.log(arr)
}
printAllKeys(obj)

// Problem 3

// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertObjecttoList(ob) {
    arr = Object.entries(ob)
    console.log(arr)
}
convertObjecttoList(obj)

// Problem 4

// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with the first element of 
// the array as the object’s key, and the last element of the array as that key’s value.

var arr = ['GUVI', 'I', 'am', 'Geek'];

function transformFirstAndLast(ar) {
    obj={}
    obj[ar[0]]=ar[3]
    console.log(obj)
}
transformFirstAndLast(arr)

// Problem 5

// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements 
// in the array as a key-value pair.

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(ar) {
a={}
for (x in ar) {
    a[ar[x][0]]=ar[x][1];
}
console.log(a)
}
fromListToObject(arr)

// Problem 6

// Write a function called 'transformEmployeeData' that transforms some set of data from one format to another.

var ar = [[['firstName', 'Vasanth'], ['lastName', 'Kumar'], ['age', 24], ['role', 'JSWizard']], 
         [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 27], ['role', 'Coder']]];

function transformEmployeeData(arr) {
arr2=[]
for (x in arr) {
    obj={}
    for (y in arr[x]) {  
        obj[ arr[x][y][0] ] = arr[x][y][1]
    }
    arr2.push(obj)
}
console.log(arr2)
}
transformEmployeeData(ar)

// Problem 7

// Write an “assertObjectsEqual” function from scratch

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}

function assertObjectsEqual(a,b){
    exp=JSON.stringify(a)
    act=JSON.stringify(b)
    if (exp===act) {console.log('Objects are equal')}
    else {console.log('Objects are not equal')}
}
assertObjectsEqual(expected,actual)

// Problem 8

I have a mock data of security Questions and Answers. Your function should take the object and a pair of strings 
and should return if the quest is present and if its valid answer

var securityQuestions = [
    {question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'},
    {question: 'What was the model year of your first car?',
    expectedAnswer: '1985'},
    {question: 'What city were you born in?',
    expectedAnswer: 'NYC'}
   ]
var ques='What city were you born in?'
var ans='NYC'

function chksecurityQuestions(sq, q, a){
qn=[]; qa=[]
quesans=q+a
    for (x in sq) {
        qn.push(sq[x].question);
        qa.push(sq[x].question+sq[x].expectedAnswer)
    }
    if (!qn.includes(q))
    {console.log('Invalid question')}
    else if (!qa.includes(quesans))
    {console.log('Invalid answer')}
    else {console.log('Valid answer')}
}
chksecurityQuestions(securityQuestions, ques, ans);

// Problem 9

// Write a function to return the list of characters below 20 age

var students = [
{ name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
{name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
{name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},  
{name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
{name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
{name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
{name:'Devdas',age: 56} 
];

function returnMinors(stu){
min = stu.filter((x)=>x.age<20)
console.log(min)
}
returnMinors(students);