import { Pragma, _p, _e, util } from 'pragmajs';

var styles = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);body{background-color:#161616}body h1{font-family:'IBM Plex Mono',monospace;color:whitesmoke;font-size:32px;font-weight:400}.parent{height:100vh;width:70%;margin:auto}.quetion{width:fit-content}.quetion .answers{width:80%;font-family:'IBM Plex Sans',sans-serif;color:whitesmoke}.quetion .answer{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:stretch;font-size:22px;border-radius:4px;height:fit-content;padding:10px 10px;margin:15px 0;background:#262626;cursor:pointer;transition:all 160ms ease}.quetion .answer:hover{background:#393939}.quetion .answer.selected{background-color:#2b6cce}.quetion .answer .icon>svg{height:18px;margin-right:11px;opacity:.7}";
var styles$1 = {
	styles: styles
};

var university = "<svg width=\"24\" height=\"28\" viewBox=\"0 0 24 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22 28H20V25C19.9984 23.6744 19.4712 22.4035 18.5338 21.4662C17.5965 20.5288 16.3256 20.0016 15 20H9C7.6744 20.0016 6.40353 20.5288 5.46619 21.4662C4.52885 22.4035 4.00156 23.6744 4 25V28H2V25C2.00217 23.1442 2.74037 21.3649 4.05265 20.0526C5.36493 18.7404 7.14415 18.0022 9 18H15C16.8558 18.0022 18.6351 18.7404 19.9474 20.0526C21.2596 21.3649 21.9978 23.1442 22 25V28Z\" fill=\"white\"/>\n<path d=\"M1 4C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V14H2V5C2 4.73478 1.89464 4.48043 1.70711 4.29289C1.51957 4.10536 1.26522 4 1 4Z\" fill=\"white\"/>\n<path d=\"M0 0V2H5V9C5 10.8565 5.7375 12.637 7.05025 13.9497C8.36301 15.2625 10.1435 16 12 16C13.8565 16 15.637 15.2625 16.9497 13.9497C18.2625 12.637 19 10.8565 19 9V2H24V0H0ZM7 2H17V5H7V2ZM12 14C10.6739 14 9.40215 13.4732 8.46447 12.5355C7.52678 11.5979 7 10.3261 7 9V7H17V9C17 10.3261 16.4732 11.5979 15.5355 12.5355C14.5979 13.4732 13.3261 14 12 14Z\" fill=\"white\"/>\n</svg>\n";
var icons = {
	university: university
};

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
    const data = parseTag(content, "$");
    console.log('parsed', data);

    this.content = data.content;
    this.icon = data.tag?.substring(1);
}
const Answer = (content,subQ) => _p()
                                    .run(function(){
                                        parseAnswerContent.bind(this)(content);


                                        console.log(this);
                                        this.key = this.content;

                                        this.as(_e(`<div class="answer">
                                            <div id='content'>${this.content}</div>
                                        </div>`.trim()));

                                        if (this.icon){
                                            let icon = icons[this.icon];
                                            icon && this.prepend(_e("div.icon#").html(icon));
                                        }
                                    })
                                    .run(function() {
                                        this.subQ = subQ;
                                    });

const Template = (pragma) => `
    <div class="quetion" id="${pragma.key}">
        <h1>${pragma.title}</h1>
        <div class="answers">
        </div>
    </div>
`.trim();

class Question extends Pragma {
    constructor(title, ...answers){
        super();
        this.title;
        this.answers = []; 
        this.codeName;
        this.answerLimit = 1; // TODO implement
        this.parseTitle(title);

        this.createEvent('answer');
        this.createAnswers(answers);
        this.as(Template(this))
            .run(()=> {
                this.element.find('.answers').append(...this.answers);
            });

    }

    parseTitle(title){
        const data = parseTag(title, '@');
        if (!data.tag) return this.title=title

        this.codeName =  data.tag;
        this.title = data.content;
    }

    createAnswers(answerList){

        const userAnswers = [];
        answerList.forEach(element => {
            let content = element;
            let subQ;
            if (Array.isArray(content)){
                content = content[0];
                subQ = element[1];
            }

            self = this;
            let answer = Answer(content, subQ);
                            answer.listenTo('click', function(){
                                userAnswers.push(answer);
                                if (userAnswers.length <= self.answerLimit){
                                    answer.addClass('selected');
                                    self.triggerEvent('answer', answer);
                                }

                            });

            this.answers.push(answer);

        });

        console.log(answerList);
    }

    get answerList(){
        return this.answers.map(e => e.html()).join('\n')
    }

}

function init(){
    console.log('lick my ass');

    util.addStyles(styles$1['styles']);
}

function createForm(...params){
    let results = [];
    console.log(params);
    let form = _p('formPragma')
                    .as(_e('div.form#'))
                    .appendTo('body')
                    .createEvents('done', 'update', 'start');

    let index = 0;
    let currentQuestion = null;
    function createQ(question){
        
        // remove previous question
        if (currentQuestion) currentQuestion.element.hide();

        currentQuestion = new Question(...question).appendTo(form).on('answer', (ans) => {
            if (index == 0) {form.triggerEvent('started', ans);}
            results.push({[currentQuestion.codeName ?? question[0]]: ans.key});
            form.triggerEvent('update', results);
            console.log("RESUKTS",results);
            if (index == params.length-1){
                form.triggerEvent('done', results);
                return 
            }

            if (ans.subQ){
                return createQ(ans.subQ)

            }

           

            console.log('NEXTQ',ans.nextQ);
            index++;

            console.log(ans);
            createQ(params[index]); 

        });


        currentQuestion.element.show();
    }

    createQ(params[0]);
    return form
}

function injectStyles(){
    util.addStyles(styles$1['styles']);

}

export { createForm, init, injectStyles };
