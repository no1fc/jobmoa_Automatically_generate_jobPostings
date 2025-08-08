import {ChangeEvent} from "react";

/**
 * InputType
 *
 * @param title Input labels 제목
 * @param type Input 속성중 글,파일,숫자,등을 지정
 * @param value Input 속성중 입력 값을 지정
 * @param onChange Input 값 변경 핸들러
 * @param classMethod Input class 값을 지정
 * @param id Input id 고유 값을 지정
 * @param name Input name param 값 지정
 *
 */
export type InputType = {
    title: string,
    type: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    classMethod: string,
    id: string,
    name: string
}


/**
 * TextArea
 *
 * @param value TextArea 속성중 입력 값을 지정
 * @param onChange TextArea 값 변경 핸들러
 * @param classMethod TextArea class 값을 지정
 * @param id TextArea id 고유 값을 지정
 * @param name TextArea name param 값 지정
 * @param cols TextArea 가로 길이
 * @param rows TextArea 세로 길이
 *
 */
export type TextAreaType = {
    value: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    classMethod: string,
    id: string,
    name: string,
    cols: number,
    rows: number
}