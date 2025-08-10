'use client';

import FormPage from "@/app/components/chatFormComponents/form";
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';

export default function ChatFormPage() {
    return (
        <div className="min-h-screen bg-background py-8">
            <div className="container mx-auto px-6">
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        홈으로 돌아가기
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-h1 font-sans mb-2 text-foreground">채용 공고 생성</h1>
                        <p className="text-body text-foreground-muted max-w-2xl mx-auto">
                            AI 챗봇과 대화하여 완벽한 채용 공고를 만들어보세요.
                            입력하신 정보를 바탕으로 전문적인 채용 공고를 자동으로 생성해드립니다.
                        </p>
                    </div>
                    <FormPage />
                </div>
            </div>
        </div>
    );
}