import OutputScreen from "./OutputScreen"
import { useState } from 'react'

const Button = (label, onClick) => {
    return (
      <input
          type='button'
          value={label}
          className='btn'
          onClick={onClick}
      />
    )
  }
  
const Calculator = () => {

    const buttons = [
        '0', '.', '=', '/', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', 'Del', '%'
    ]

    const [question, setQuestion] = useState('')
    let [answer, setAnswer] = useState('')

    const onClick =  (e) => {
        
        const value = e.target.value

        switch (value) {
            case '=': {
                if (question !== '') {
                    //let ans = ''
                    try {
                        answer = eval(question)
                    }
                    catch(err) {
                        setAnswer("Math Error")
                    }
                    if (answer === undefined)
                        setAnswer("Math Error")
                    else {
                        setAnswer(answer)
                        //setQuestion('')
                    }
                }
                break
            }
            case 'C' : {
                setAnswer('')
                setQuestion('')
                break
            }
            case 'Del' : {
                let str = question
                str = str.substring(0, str.length-1)
                setQuestion(str)
                break
            }
            default: {
                setQuestion(question + value)
                console.log(value)
                break
            }
        }
    }

  return (
    <div className='frame'>
        <div className='calculator-title'>
        <h1 className='heading'>CALCULATOR</h1>  
    </div>
        <div className='main'>
            <OutputScreen question={question} answer={answer}/>
            <div className='btns'>
                {buttons.map((btn)=><Button label={btn} onClick={onClick} />)}
            </div>
        </div>
    </div>
  )
}

export default Calculator
