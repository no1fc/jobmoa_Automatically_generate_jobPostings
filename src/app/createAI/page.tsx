'use client'

import {useState} from 'react';

const threadAsync = async () => {
    await fetch('http://localhost:3001/api/assistantsChat/create-thread', {


    })
}


export default function Page() {
    //thread 생성

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChat = async (messsage:string) => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    threadId: 'test',
                    message: messsage
                }),
            });

            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('요청 실패:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="text" className={'userMessage'} name={'message'} onChange={e => e.target.value}/>
            <button disabled={loading}>
                {loading ? '로딩 중...' : 'AI에게 질문하기'}
            </button>
            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
            )}
        </div>
    );
}