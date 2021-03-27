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

const end = `
<div class='end-message'>
    <h1> Thanks for participating </h1>
</div>
`

freeform.createForm(
    ["@Persona What are you going to use Fready for?", 
        "$work Work", 
        "$bigbrain My own thing", 
        ["$university University", [
            '@UniDiscipline What discipline?',
            '$social Social Sciences',
            "$stem STEM",
            '$money Economics',
            '$law Law',
            '$art Art',
            '$other Other'
        ]]
    ], 
    ["@Problem What are you seeking to improve?", 
    "$focus Focus", 
    "$time Time", 
    "$comprehension Comprehension",
    "$mountain I don't know"
 ]).on('done', function(results) {
     this.html(end)
     console.log('DONEE', results)
    })


// freeform.ask(question).then(answer =>{
//     freeform.ask(question).then
// })
