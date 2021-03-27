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
    ["What are you going to use Fready for?", 
        "Work", 
        "My own thing", 
        ["University", [
            'What discipline?',
            'Lay',
            "Gay",
            'Stem'
        ]]
    ], 
    ["What are you seeking to improve?", 
    "Focus", 
    "Time", 
    "Comprehension",
    "IDK"
 ])


// freeform.ask(question).then(answer =>{
//     freeform.ask(question).then
// })
