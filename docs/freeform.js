freeform.init()
freeform.injectStyles()

// freeform.create({
//     question: 'Why would you use fready?',
//     answers: [ "University", {
//         content: "University",
//         next: {'What discipline?'}
//     }, 
// ],
// })


freeform.createForm(
    ["@Persona What are you going to use Fready for?", 
        "$university Work", 
        "My own thing", 
        ["University", [
            '@UniDiscipline What discipline?',
            'Lay',
            "Gay",
            'Stem'
        ]]
    ], 
    ["@Problem What are you seeking to improve?", 
    "Focus", 
    "Time", 
    "Comprehension",
    "IDK"
 ]).on('done', (results)=>console.log('DONEE', results))


// freeform.ask(question).then(answer =>{
//     freeform.ask(question).then
// })
