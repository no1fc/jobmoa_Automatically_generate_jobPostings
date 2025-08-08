# Next.js 14+ 개발 중 자주 만나는 오류와 해결법
## 목차
1. [SVG 이미지 로딩 오류](#svg-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A1%9C%EB%94%A9-%EC%98%A4%EB%A5%98)
2. [React Form 필드 onChange 오류](#react-form-%ED%95%84%EB%93%9C-onchange-%EC%98%A4%EB%A5%98)
3. [React Hook 사용 규칙 오류](#react-hook-%EC%82%AC%EC%9A%A9-%EA%B7%9C%EC%B9%99-%EC%98%A4%EB%A5%98)
4. [TypeScript 구조 분해 할당 오류](#typescript-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9-%EC%98%A4%EB%A5%98)

## SVG 이미지 로딩 오류
### 🚨 오류 메시지
``` 
The requested resource has type "image/svg+xml" but dangerouslyAllowSVG is disabled. 
Consider adding the "unoptimized" property to the <Image>.
```
### 🔍 원인
Next.js가 보안상의 이유로 SVG 파일을 기본적으로 차단하기 때문입니다. 특히 placehold.co 같은 외부 플레이스홀더 서비스에서 SVG 형식으로 이미지를 제공할 때 발생합니다.
### ✅ 해결 방법
#### 방법 1: next.config.ts에서 SVG 허용 설정 (권장)
``` typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 외부 이미지 호스트 허용 설정
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // SVG 이미지 허용
    dangerouslyAllowSVG: true,
    // SVG에 대한 Content Security Policy 설정
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
```
#### 방법 2: Image 컴포넌트에 unoptimized 속성 추가
``` 
<Image
    src="https://placehold.co/900x500/1a202c/ffffff?text=AI+Chatbot+UI"
    alt="AI 챗봇 인터페이스 예시"
    width={900}
    height={500}
    unoptimized  // 추가
    className="w-full border rounded-lg shadow-lg"
/>
```
> **💡 팁**: 방법 1을 사용하면 Next.js의 이미지 최적화 기능을 계속 활용할 수 있어 권장합니다.
>

## React Form 필드 onChange 오류
### 🚨 오류 메시지
``` 
You provided a `value` prop to a form field without an `onChange` handler. 
This will render a read-only field.
```
### 🔍 원인
React에서 prop을 제공했지만 `onChange` 핸들러가 없어서 입력 필드가 읽기 전용이 됩니다. `value`
### ✅ 해결 방법
#### 1. useState와 onChange 핸들러 추가
**타입 정의 (inputType.ts)**
``` typescript
import { ChangeEvent } from 'react';

export type InputType = {
    title: string;
    type: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className: string;
    id: string;
    name: string;
}

export type TextAreaType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className: string;
    id: string;
    name: string;
    cols: number;
    rows: number;
}
```
**컴포넌트 구현 (InputTag.tsx)**
``` 
'use client'

import { InputType, TextAreaType } from "./types/inputType";

export function InputTag({ title, type, value, onChange, className, id, name }: InputType) {
    return (
        <div>
            <label htmlFor={id} className="block mb-2">{title}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange}
                className={className} 
                id={id} 
                name={name} 
            />
        </div>
    )
}

export function TextArea({ value, onChange, className, id, name, cols, rows }: TextAreaType) {
    return (
        <textarea 
            value={value} 
            onChange={onChange}
            className={className} 
            id={id} 
            name={name} 
            cols={cols} 
            rows={rows}
        />
    )
}
```
**폼 컴포넌트 (Form.tsx)**
``` 
'use client';

import { useState } from 'react';
import { InputTag, TextArea } from './InputTag';

export default function FormPage() {
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    return (
        <form>
            <InputTag 
                title="내용 작성" 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full" 
                id="content-input" 
                name="content" 
            />
            <TextArea 
                value={textAreaValue}
                onChange={(e) => setTextAreaValue(e.target.value)}
                className="w-full" 
                id="content-textarea" 
                name="description" 
                cols={30} 
                rows={10} 
            />
        </form>
    )
}
```
## React Hook 사용 규칙 오류
### 🚨 오류 메시지
``` 
React Hook "useState" is called in function "formPage" that is neither a React function component nor a custom React Hook function. 
React component names must start with an uppercase letter.
```
### 🔍 원인
React Hook은 React 컴포넌트(대문자로 시작) 또는 커스텀 Hook(use로 시작) 내에서만 사용할 수 있습니다. `formPage`는 소문자로 시작하므로 일반 함수로 인식됩니다.
### ✅ 해결 방법
#### 함수명을 대문자로 변경 (React 컴포넌트)
``` 
// ❌ 잘못된 예시
export default function formPage() {
    const [inputValue, setInputValue] = useState(''); // 오류!
    // ...
}

// ✅ 올바른 예시
export default function FormPage() {
    const [inputValue, setInputValue] = useState(''); // 정상 작동
    // ...
}
```
**사용 시**
``` 
'use client'

import FormPage from "@/app/components/chatFormComponents/Form";

export default function ChatForm() {
    return (
        <div>
            <FormPage />  {/* JSX 컴포넌트로 사용 */}
        </div>
    )
}
```
### 📝 React 명명 규칙
- **React 컴포넌트**: 대문자로 시작 (, ) `FormPage``InputTag`
- **커스텀 Hook**: `use`로 시작 (, `useInput`) `useFormState`
- **일반 함수**: 소문자로 시작 (Hook 사용 불가)

## TypeScript 구조 분해 할당 오류
### 🚨 오류 메시지
``` 
Type must have a [Symbol.iterator]() method that returns an iterator.
```
### 🔍 원인
객체를 반환하는 함수에서 배열 구조 분해 할당을 시도했을 때 발생합니다.
### ✅ 해결 방법
#### 커스텀 Hook 구현
**useFormState.ts**
``` typescript
import { useState, Dispatch, SetStateAction } from "react";

interface FormState {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    textAreaValue: string;
    setTextAreaValue: Dispatch<SetStateAction<string>>;
}

export function useFormState(): FormState {
    const [inputValue, setInputValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    
    return {
        inputValue,
        setInputValue,
        textAreaValue,
        setTextAreaValue,
    };
}
```
**사용 방법**
``` 
// ✅ 객체 구조 분해 할당 (중괄호 사용)
const { inputValue, setInputValue, textAreaValue, setTextAreaValue } = useFormState();

// ❌ 배열 구조 분해 할당 (오류 발생)
const [inputValue, setInputValue, textAreaValue, setTextAreaValue] = useFormState();
```
### 🔍 구조 분해 할당 구분
``` typescript
// 객체 구조 분해 (중괄호)
const { a, b } = { a: 1, b: 2 };

// 배열 구조 분해 (대괄호)
const [x, y] = [1, 2];
```
## 💡 마무리
Next.js 14+에서 개발할 때 자주 만나는 오류들을 정리해봤습니다. 이러한 오류들은 대부분 다음과 같은 베스트 프랙티스를 따르면 예방할 수 있습니다:
1. **보안 설정**: 외부 리소스 사용 시 적절한 설정 적용
2. **React 규칙 준수**: 컴포넌트 명명 규칙과 Hook 사용 규칙 따르기
3. **타입 안전성**: TypeScript를 활용한 타입 정의
4. **상태 관리**: 적절한 상태 관리와 이벤트 핸들러 구현

이 가이드가 Next.js 개발 시 도움이 되길 바랍니다! 🚀
**태그**: #NextJS #React #TypeScript #개발오류 #웹개발
