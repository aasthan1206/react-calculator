import CalculatorTitle from "./CalculatorTitle"
import OutputScreen from "./OutputScreen"
import Button from "./Button"
import { useState } from 'react'

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
                str = str.substr(0, str.length-1)
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
        <CalculatorTitle value='Calculator' />
        <div className='main'>
            <OutputScreen question={question} answer={answer}/>
            <div className='btns'>
                {buttons.map((btn)=><Button label={btn} onClick={onClick} />)}
            </div>
            {/* <div className='button-row btn-row1'>
                <Button label={'C'} onClick={onClick} />
                <Button label={'Del'} onClick={onClick} />
                <Button label={'%'} onClick={onClick} />
            </div>
            <div className='button-row btn-row2'>
                <Button label={'7'} onClick={onClick} />
                <Button label={'8'} onClick={onClick} />
                <Button label={'9'} onClick={onClick} />
                <Button label={'*'} onClick={onClick} />
            </div>
            <div className='button-row btn-row3'>
                <Button label={'4'} onClick={onClick} />
                <Button label={'5'} onClick={onClick} />
                <Button label={'6'} onClick={onClick} />
                <Button label={'-'} onClick={onClick} />
            </div>
            <div className='button-row btn-row4'>
                <Button label={'1'} onClick={onClick} />
                <Button label={'2'} onClick={onClick} />
                <Button label={'3'} onClick={onClick} />
                <Button label={'+'} onClick={onClick} />
            </div>
            <div className='button-row btn-row5'>
                <Button label={'0'} onClick={onClick} />
                <Button label={'.'} onClick={onClick} />
                <Button label={'='} onClick={onClick} />
                <Button label={'/'} onClick={onClick} />
            </div> */}
        </div>
      
    </div>
  )
}

export default Calculator
