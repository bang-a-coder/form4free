import {_p,_e, util, Pragma} from 'pragmajs'

const Answer = (content) => _p().as(_e(`
    <div class="answer">${content}</div>
`.trim()))

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
            self = this
            let answer = Answer(element)
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