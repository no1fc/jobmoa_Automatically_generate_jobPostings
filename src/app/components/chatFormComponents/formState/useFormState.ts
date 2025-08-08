import {useState} from "react";

export function useFormState(){

    const [inputValue,setInputValue] = useState('');
    const [textAreaValue,setTextAreaValue] = useState('');

    return{
        inputValue:inputValue,
        setInputValue:setInputValue,
        textAreaValue:textAreaValue,
        setTextAreaValue:setTextAreaValue,
    }

}