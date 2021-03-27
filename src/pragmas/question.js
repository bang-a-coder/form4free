import {_p,_e, util, Pragma} from 'pragmajs'

const Answer = (content,subQ) => _p()
                                    .as(_e(`<div class="answer">${content}</div>`.trim()))
                                    .run(function() {
                                        this.subQ = subQ
                                    })

const Template = (pragma) => `
    <div class="quetion" id="${pragma.key}">
        <h1>${pragma.title}</h1>
        <div class="answers">
        </div>
    </div>
`.trim()

export class Question extends Pragma {
    constructor(title, ...answers){
        super()
        this.title = title
        this.answers = []


        this.createEvent('answer')
        this.createAnswers(answers)
        this.as(Template(this))
            .run(()=> {
                this.element.find('.answers').append(...this.answers)
            })

    }

    createAnswers(answerList){
        answerList.forEach(element => {
            let content = element
            let subQ
            if (Array.isArray(content)){
                content = content[0]
                subQ = element[1]
            }

            self = this
            let answer = Answer(content,subQ)
                            answer.listenTo('click', function(){
                self.triggerEvent('answer', answer)
            })
            this.answers.push(answer)

        });

        console.log(answerList)
    }

    get answerList(){
        return this.answers.map(e => e.html()).join('\n')
    }

}