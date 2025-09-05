'use client';

import {ArrowLeft} from 'lucide-react';
import FormPage from "@/app/components/chatFormComponents/form";
import {Body, H1} from '@/app/components/ui/TypographyComponents';
import LinkComponent from '@/app/components/ui/LinkComponentWithVariants';
import Card from '@/app/components/ui/CardComponentWithVariants';

export default function ChatFormPage() {
    return (
        <div className="min-h-screen bg-background py-8">
            <div className="container mx-auto px-6">
                <div className="mb-6">
                    <LinkComponent
                        href="/"
                        variant="ghost"
                        className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        홈으로 돌아가기
                    </LinkComponent>
                </div>

                <Card variant="hover" className="max-w-5xl mx-auto overflow-hidden">
                    <div className="text-center p-8 bg-card border-b border-border">
                        <H1 className="mb-2">채용 공고 생성</H1>
                        <Body className="text-foreground-muted max-w-2xl mx-auto">
                            AI 챗봇과 대화하여 완벽한 채용 공고를 만들어보세요.
                            텍스트와 이미지를 함께 입력하시면 더욱 생생한 공고를 생성해드립니다.
                        </Body>
                    </div>
                    <div className="p-8">
                        <FormPage />
                    </div>
                </Card>
            </div>
        </div>
    );
}