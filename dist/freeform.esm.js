import { Pragma, _p, _e, util } from 'pragmajs';

var styles = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);body{background-color:black}body h1{font-family:'IBM Plex Mono',monospace;color:whitesmoke;font-size:32px;font-weight:400}.parent{height:100vh;width:70%;margin:auto}.quetion{width:fit-content}.quetion .answers{width:80%;font-family:'IBM Plex Sans',sans-serif;color:whitesmoke}";
var styles$1 = {
	styles: styles
};

const Answer = (content,subQ) => _p(content.toString())
                                    .as(_e(`<div class="answer">${content}</div>`.trim()))
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
        this.parseTitle(title);

        this.createEvent('answer');
        this.createAnswers(answers);
        this.as(Template(this))
            .run(()=> {
                this.element.find('.answers').append(...this.answers);
            });

    }

    parseTitle(title){
        if (title[0]!= '@') return this.title=title

        this.codeName =  title.substring(0,title.indexOf(" "));
        this.title = title.substring(title.indexOf(" "),title.length);
        console.log(this.codeName,this.title);
    }

    createAnswers(answerList){
        answerList.forEach(element => {
            let content = element;
            let subQ;
            if (Array.isArray(content)){
                content = content[0];
                subQ = element[1];
            }

            self = this;
            let answer = Answer(content,subQ);
                            answer.listenTo('click', function(){
                                self.triggerEvent('answer', answer);
                                
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
    function createQ(question){
        
        new Question(...question).appendTo(form).on('answer', (ans) => {
            if (index == 0) {form.triggerEvent('started', ans);}
            results.push({[question[0]]: ans.key});
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
    }

    createQ(params[0]);
    return form
}

function injectStyles(){
    util.addStyles(styles$1['styles']);

}

export { createForm, init, injectStyles };
