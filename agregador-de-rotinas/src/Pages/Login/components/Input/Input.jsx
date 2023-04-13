import './Input.css'
export const Input = ({placeholder, onchange, value}) =>{
    return(
        <input placeholder={placeholder} className='input-form' onChange={onchange}></input>
    )
}