'use client';

import {InputTag, TextArea} from './InputTag';
import {useFormState} from './formState/useFormState';

export default function FormPage(){
    const {inputValue, setInputValue, textAreaValue, setTextAreaValue} = useFormState();

    return (
        <form>
            <InputTag
                title="내용 작성"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                classMethod="w-full"
                id=""
                name=""
            />
            <TextArea
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                classMethod="w-full"
                id=""
                name=""
                cols={30}
                rows={10}/>
        </form>
    )
}
