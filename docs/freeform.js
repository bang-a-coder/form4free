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
    ["QWERTYU?", 
        "asdfg", 
        "ASDFGH", 
        ["University", [
            'What discipline?',
            'Lay',
            "Gay",
            'Stem'
        ]]
    ], 
    ["QWERTYU?", 
    "asdfg", 
    "ASDFGH", 
    ["University", [
        'What discipline?',
        'Lay',
        "Gay",
        'Stem'
    ]]
 ])


// freeform.ask(question).then(answer =>{
//     freeform.ask(question).then
// })
