//question 1
const people = [{name:"Alice",age:17},
                {name:"Eunice",age:22},
                {name:"Charlie",age:14},
                {name:"Max",age:19},
];

function getAboveEighteen(people){
    var result = [];
    for(var i = 0; i<people.length; i++){
        if (people[i].age >= 18){
            result.push(people[i].name);
        }
    }
    return result;
}
console.log(getAboveEighteen(people))

//question 2

const products = [{name:"laptop",price:1200,category:"electronics"},
                  {name:"shirt",price:25,category:"clothing"},
                  {name:"headphones",price:80,category:"electronics"},
                  {name:"shoes",price:60,category:"clothing"},                 
];

const groupCategory = products.reduce((group, product) =>{
    const {category} = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
},{});

console.log(groupCategory);

//question3

const students = [{name:"John",scores:[90,80,85]},
                  {name:"Jane",scores:[95,92,88]},
                  {name:"Jim",scores:[70,80,75]},
                  {name:"Jill",scores:[85,90,84]},
];
function averageScore(students) {
    return students.filter(student=> {
        const totalScore = student.scores.reduce((acc, current) => acc + current,) /
        student.scores.length;
        return totalScore >=85;
    }).map(student => student.name);   
}
const totalMarks = averageScore(students)
console.log(totalMarks);


//question 4

const car = {
             make:"Ford",
             model:"Ranger",
             year:2023,
             displayInfo:function(){
                const myCar = (`make:${this.make},model:${this.model},year:${this.year}`);
                console.log(myCar)
},
};
function newMethod(car) {
    car["age"]= (2024-car.year)
    console.log(car)
}
newMethod(car)





