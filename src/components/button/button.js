

const Button = (props) => {
    return(
        <button 
        onClick={() => {
            alert(`a label desse botão é ${props.label}`)
        }}>{props.label}</button>
    )
}

Button.defaultProps ={
    label: "Baixar CV"
}

export default Button