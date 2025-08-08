import {InputType, TextAreaType} from "./types/inputType";

export function InputTag({title, type, value, onChange, classMethod, id, name}: InputType) {
    return (
        <div className="input-field-container">
            <label
                htmlFor={id}
                className="input-label"
            >
                {title}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`input-field ${classMethod}`}
                id={id}
                name={name}
                placeholder={`${title}을(를) 입력해주세요`}
            />
        </div>
    )
}

export function TextArea({title, value, onChange, classMethod, id, name, cols, rows}: TextAreaType){
    return (
        <div className="input-field-container">
            <label
                htmlFor={id}
                className="input-label"
            >
                {title}
            </label>
            <textarea
                value={value}
                onChange={onChange}
                className={`textarea-field ${classMethod}`}
                id={id}
                name={name}
                cols={cols}
                rows={rows}
                placeholder={`${title}에 대한 내용을 자세히 작성해주세요`}
            />
        </div>
    )
}