import {_p,_e, util, Pragma} from 'pragmajs'
import icons from '../icons.json'

function parseTag(content, decorator){
            if (content[0]!= decorator) return {
                content: content,
                tag: null
            }

            return {
                tag: content.substring(0, content.indexOf(" ")),
                content: content.substring(content.indexOf(" ")+1, content.length)     
            }

        }
        
function parseAnswerContent(content){
    const data = parseTag(content, "$")
    console.log('parsed', data)

    this.content = data.content
    this.icon = data.tag?.substring(1)
}
const Answer = (content,subQ) => _p()
                                    .run(function(){
                                        parseAnswerContent.bind(this)(content)


                                        console.log(this)
                                        this.key = this.content

                                        this.as(_e(`<div class="answer">
                                            <div id='content'>${this.content}</div>
                                        </div>`.trim()))

                                        if (this.icon){
                                            let icon = icons[this.icon]
                                            icon && this.prepend(_e("div.icon#").html(icon))
                                        }
                                    })
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
        this.title
        this.answers = [] 
        this.codeName
        this.parseTitle(title)

        this.createEvent('answer')
        this.createAnswers(answers)
        this.as(Template(this))
            .run(()=> {
                this.element.find('.answers').append(...this.answers)
            })

    }

    parseTitle(title){
        
        
        const data = parseTag(title, '@')
        if (!data.tag) return this.title=title

        this.codeName =  data.tag
        this.title = data.content
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
            let answer = Answer(content, subQ)
                            answer.listenTo('click', function(){
                                self.triggerEvent('answer', answer)

                            })

            this.answers.push(answer)

        })

        console.log(answerList)
    }

    get answerList(){
        return this.answers.map(e => e.html()).join('\n')
    }

}