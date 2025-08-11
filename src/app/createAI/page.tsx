'use client'

import {useState} from 'react';

export default function Page() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChat = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: 'Hello, how are you?' }),
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
            <button onClick={handleChat} disabled={loading}>
                {loading ? '로딩 중...' : 'AI에게 질문하기'}
            </button>
            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
            )}
        </div>
    );
}