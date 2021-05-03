form4free.injectStyles()

// form4free.create({
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

form4free.createForm(
    ["@Persona What are you going to use Fready for?", 
        "$questionmark Work", 
        "$no-concept My own thing", 
        ["$bugg University", 
            ['@UniDiscipline What discipline?',
                '$social Social Sciences',
                "$stem STEM",
                '$money Economics',
                '$law Law',
                '$art Art',
                '$other Other'
            ],
            ['@LMS Which one does your school use?',
                "Canvas",
                "Blackboard",
                "Brightspace",
                "Schoology",
                "Google Classroom"
            ]
        ]
    ], 
    ["@Problem What are you seeking to improve?", 
        "$focus Focus", 
        "$time Time", 
        "$comprehension Comprehension",
        "$mountain I don't know"
    ],
    ["@File-Type What document type do you mostly use?",
        "$pdf PDF",
        "$google Google Docs",
        "$epub ePub",
        "$word MS Word",
        "$article Online Articles"
    ]
    ).on('done', function(results) {
     this.html(end)
     console.log('DONEE', results)
    })
    .appendTo('body')


// freeform.ask(question).then(answer =>{
//     freeform.ask(question).then
// })
