const Button = (props) => {
  return (
    <input
        type='button'
        value={props.label}
        className='btn'
        onClick={props.onClick}
    />
  )
}

export default Button
