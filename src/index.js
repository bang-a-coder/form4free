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
    function createQ(question){
        
        // remove previous question
        if (currentQuestion) currentQuestion.element.hide()
        
        setTimeout(() => {
            
        }, 3000);

        currentQuestion = new Question(...question).appendTo(form).on('answer', (ans) => {
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


        currentQuestion.element.show()
    }

    createQ(params[0])
    return form
}

export function injectStyles(){
    util.addStyles(styles['styles'])

}
 