import {_p,_e, util, Pragma} from 'pragmajs'
import styles from './styles/styles.json'
import {Question} from './pragmas/question'

export function createForm(...params){
    let results = []
    console.log(params)
    let form = _p('formPragma')
                    .as(_e('div.form#'))
                    .appendTo('body')
                    .createEvents('done', 'update', 'start')

    let index = 0
    let currentQuestion = null
    async function createQ(question){
        
        // remove previous question
        if (currentQuestion) {
                
                console.log('hiding')
            await fadeTo(currentQuestion.element, 500, 0)
        }

        currentQuestion = new Question(...question)
                        .css('opacity 0')
                        .run(function(){
                            fadeTo(this.element, 5000, 1)
                        })
                        .appendTo(form)
                        .on('answer', (ans) => {
                            if (index == 0) {form.triggerEvent('started', ans)}
                            results.push({[currentQuestion.codeName ?? question[0]]: ans.key})
                            form.triggerEvent('update', results)
                            console.log("RESUKTS",results)
                            if (index == params.length-1){
                                form.triggerEvent('done', results)
                                return 
                            }

                            if (ans.subQ){
                                return createQ(ans.subQ)

                            }

                        

                            console.log('NEXTQ',ans.nextQ)
                            index++

                            console.log(ans)
                            createQ(params[index]) 

                        })


    }

    createQ(params[0])
    return form
}

export function injectStyles(){
    util.addStyles(styles['styles'])

}

function fadeTo(element, timeout, opacity) {
    return new Promise((resolve,reject)=> {
        console.log(timeout)
        element.css(`
            transition: all ${timeout/1000}s ease;
            opacity: ${opacity};
        `)
        setTimeout(() => {
            if (opacity == 0) element.hide()

            resolve()
        }, timeout);
    })
}
 