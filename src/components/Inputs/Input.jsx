import './input.scss'

const Input = ({id, placeholder, type, label, value}) => {
     return (
        <div className="Input">
            <label>{label}</label>
            <input id={id}placeholder={placeholder} type={type} value={value}/>
        </div>
        )
}
export default Input;




    