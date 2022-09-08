const OutputScreen = ({question, answer}) => {
  return (
    <div className='screen'>
        <div className='screen-row'>
          <input 
            type='text' readOnly 
            value={question} 
          />  
        </div>
        <div className='screen-row'>
          <input 
            type='text' readOnly 
            value={answer} 
          />  
        </div>
    </div>
  )
}

export default OutputScreen
