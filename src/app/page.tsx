'use client'; // 이 줄을 추가

import {BotMessageSquare, Briefcase, CheckCircle, Sparkles} from 'lucide-react';
import './globals.css';
import Image from 'next/image'

// 페이지 전체를 감싸는 메인 컴포넌트
export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background items-center justify-center">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}

// 헤더 컴포넌트
function Header() {
    return (
        <header className="container py-4">
            <nav className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 font-bold text-h2">
                    <Briefcase className="w-6 h-6" />
                    <span>AutoJD</span>
                </a>
                <a
                    href="#"
                    className="px-4 py-2 text-sm font-semibold transition-colors rounded-full bg-foreground text-background hover:bg-opacity-80"
                >
                    지금 시작하기
                </a>
            </nav>
        </header>
    );
}

// 히어로 섹션
function HeroSection() {
    return (
        <section className="py-16 text-center md:py-24">
            <div className="container">
                <h1 className="text-hero">
                    AI 챗봇으로 채용 공고 작성을 자동화한다
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground-muted">
                    단 몇 분 만에 최고의 인재를 끌어당기는 매력적인 채용 공고가 완성된다. 반복적인 업무는 줄이고 핵심에 집중하게 된다.
                </p>
                <div className="mt-8">
                    <a
                        href="#"
                        className="px-8 py-3 font-bold transition-transform duration-300 transform rounded-full shadow-lg bg-foreground text-background hover:scale-105"
                    >
                        무료로 채용 공고 만들기
                    </a>
                </div>
                {/* --- 이미지 추가 --- */}
                <div className="mt-12 md:mt-16">
                    <Image
                        src="https://placehold.co/900x500/1a202c/ffffff?text=AI+Chatbot+UI"
                        alt="AI 챗봇 인터페이스 예시"
                        className="w-full max-w-4xl mx-auto border rounded-lg shadow-lg border-border"
                        width={900}
                        height={500}
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/900x500/e2e8f0/4a5568?text=Image+Not+Found'; }}
                    />
                </div>
            </div>
        </section>
    );
}

// 기능 소개 섹션
function FeaturesSection() {
    const features = [
        {
            icon: <BotMessageSquare className="w-8 h-8 text-foreground" />,
            title: "대화형 AI 기반 생성",
            description: "챗봇과 대화하며 직무, 요구 기술, 기업 문화를 입력하면 AI가 맞춤형 공고를 생성한다.",
        },
        {
            icon: <Sparkles className="w-8 h-8 text-foreground" />,
            title: "매력적인 문구 자동 완성",
            description: "지원자의 시선을 끄는 효과적인 헤드라인과 직무 설명을 제안하여 지원율을 높인다.",
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-foreground" />,
            title: "일관성 있는 톤앤매너",
            description: "여러 채용 공고에 일관된 목소리와 브랜딩을 적용하여 전문적인 기업 이미지를 구축한다.",
        },
    ];

    return (
        <section id="features" className="py-16 bg-card md:py-24">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-h1">왜 AutoJD를 선택해야 하는가?</h2>
                    <p className="mt-2 text-foreground-muted">AutoJD는 단순한 자동화를 넘어 채용의 질을 높인다.</p>
                </div>
                <div className="grid gap-8 mt-12 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 text-center border rounded-lg bg-background border-border shadow-sm">
                            <div className="inline-block p-3 mb-4 rounded-full bg-card">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-h2">{feature.title}</h3>
                            <p className="text-caption text-foreground-muted">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {/* --- 이미지 캐러셀 추가 --- */}
                <div className="mt-16">
                    <h3 className="mb-6 text-center text-h2">주요 기능 미리보기</h3>
                    <div className="flex gap-4 pb-4 overflow-x-auto">
                        <div className="flex-shrink-0 w-4/5 md:w-1/3">
                            <Image
                                src="https://placehold.co/600x400/1a202c/ffffff?text=Feature+1"
                                alt="기능 1"
                                className="object-cover w-full border rounded-md aspect-video border-border"
                                width={600}
                                height={400}
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image'; }} />
                        </div>
                        <div className="flex-shrink-0 w-4/5 md:w-1/3">
                            <Image
                                src="https://placehold.co/600x400/1a202c/ffffff?text=Feature+2"
                                alt="기능 2"
                                className="object-cover w-full border rounded-md aspect-video border-border"
                                width={600}
                                height={400}
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image'; }} />
                        </div>
                        <div className="flex-shrink-0 w-4/5 md:w-1/3">
                            <Image
                                src="https://placehold.co/600x400/1a202c/ffffff?text=Feature+3"
                                alt="기능 3"
                                className="object-cover w-full border rounded-md aspect-video border-border"
                                width={600}
                                height={400}
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Image'; }}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 작동 방식 섹션
function HowItWorksSection() {
    const steps = [
        {
            title: "핵심 정보 입력",
            description: "채용할 직무, 필수 요건, 주요 기술 스택 등 기본적인 정보를 챗봇에게 알려준다.",
            imgSrc: "https://placehold.co/500x350/1a202c/ffffff?text=Step+1:+정보+입력",
            align: "left"
        },
        {
            title: "AI 생성 및 검토",
            description: "AI가 입력된 정보를 바탕으로 채용 공고 초안을 몇 초 만에 생성한다. 원하는 대로 수정하고 다듬을 수 있다.",
            imgSrc: "https://placehold.co/500x350/1a202c/ffffff?text=Step+2:+AI+생성",
            align: "right"
        },
        {
            title: "완성 및 게시",
            description: "최종 완성된 공고를 복사하여 바로 채용 플랫폼에 게시한다. 시간을 획기적으로 절약할 수 있다.",
            imgSrc: "https://placehold.co/500x350/1a202c/ffffff?text=Step+3:+완성+및+게시",
            align: "left"
        }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-h1">3단계로 끝나는 채용 공고 작성</h2>
                    <p className="mt-2 text-foreground-muted">누구나 쉽게 사용할 수 있도록 설계되었다.</p>
                </div>
                <div className="mt-12 space-y-16 md:mt-20">
                    {steps.map((step, index) => (
                        <Step key={index} title={step.title} description={step.description} imgSrc={step.imgSrc} align={step.align}  />
                    ))}
                </div>
            </div>
        </section>
    );
}

// 작동 방식 각 단계를 나타내는 컴포넌트 (이미지 포함)
/**
 * @param {{
 * title: string;
 * description: string;
 * imgSrc: string;
 * align: string;
 * }} props
 */
function Step({ title, description, imgSrc, align }: {
        title: string;
        description: string;
        imgSrc: string;
        align: string;
    }) {
    const isRightAlign = align === 'right';
    return (
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isRightAlign ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
                <Image
                    src={imgSrc}
                    alt={title}
                    className="w-full border rounded-lg shadow-md border-border"
                    width={500}
                    height={350}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x350/e2e8f0/4a5568?text=Image+Not+Found'; }}
                />
            </div>
            <div className="w-full text-center md:w-1/2 md:text-left">
                <h3 className="text-h2">{title}</h3>
                <p className="mt-2 text-foreground-muted">{description}</p>
            </div>
        </div>
    );
}


// 최종 CTA 섹션
function CtaSection() {
    return (
        <section className="py-16 text-center md:py-24 bg-card">
            <div className="container">
                <h2 className="text-h1">이제, 채용 공고 작성의 미래를 경험할 시간이다.</h2>
                <p className="max-w-2xl mx-auto mt-4 text-foreground-muted">
                    지금 바로 시작해서 채용 프로세스의 효율을 극대화해야 한다.
                </p>
                <div className="mt-8">
                    <a
                        href="#"
                        className="px-8 py-3 font-bold transition-transform duration-300 transform rounded-full shadow-lg bg-foreground text-background hover:scale-105"
                    >
                        첫 공고 무료로 생성하기
                    </a>
                </div>
            </div>
        </section>
    );
}

// 푸터 컴포넌트
function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container text-center text-caption text-foreground-muted">
                <p>&copy; {new Date().getFullYear()} AutoJD. All rights reserved.</p>
                <p className="mt-2">개발자: 남상도</p>
            </div>
        </footer>
    );
}
