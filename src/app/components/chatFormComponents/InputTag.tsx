import {InputType, TextAreaType} from "./types/inputType";

export function InputTag({title,type,value,onChange,classMethod,id,name}:InputType) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2">
                {title}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={classMethod}
                id={id}
                name={name}/>
        </div>
    )
}

export function TextArea({value, onChange, classMethod, id, name, cols, rows}:TextAreaType){
    return (
        <textarea
            value={value}
            onChange={onChange}
            className={classMethod}
            id={id}
            name={name}
            cols={cols}
            rows={rows}></textarea>
    )
}