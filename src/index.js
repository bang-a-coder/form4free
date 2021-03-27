import {_p,_e, util, Pragma} from 'pragmajs'
import styles from './styles/styles.json'
import {Question} from './pragmas/question'


export function init(){
    console.log('lick my ass')

    util.addStyles(styles['styles'])
}

export function createForm(...params){

    console.log(params)
    let parent = _p('parentPragma')
                    .as(_e('div.parent#'))
                    .appendTo('body')

    let index = 0
    function createQ(question){
        let q = new Question(...question).appendTo(parent).on('answer', (ans) => {
            if (index == params.length-1){
                return
            }
            index++

             console.log(ans)
            createQ(params[index]) 

        })
    }

    createQ(params[0])

}

export function injectStyles(){
    util.addStyles(styles['styles'])

}
 