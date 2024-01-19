/* eslint-disable react/prop-types */
import Label from "./Label"
import Input from "./Input"

const InputForm = (props) => {
    const { 
        label = null, 
        name, 
        type, 
        placeholder,
        icon = null, 
    } = props;

    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} icon={icon}/>
        </div>
    );
};

export default InputForm;