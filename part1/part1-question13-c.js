let student = { 
    name:'Sarah', 
    major: 'Computer Science',
    'Grade Year': '2022',
    greeting: function () { console.log('hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS41']

    };

console.log(student.name);  
console.log(student["Grade Year"]);
student.greeting();
console.log(student["Favorite Teacher"].name);


