'use client';

import {ArrowRight, BotMessageSquare, CheckCircle, Clock, Sparkles, Target, Zap} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <BenefitsSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-6 py-4">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-h2 font-sans font-bold">
                        <div className="p-2 bg-card rounded-md shadow-sm">
                            <BotMessageSquare className="w-5 h-5 text-foreground" />
                        </div>
                        <span>ChatJobmoa</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="#features" className="text-body text-foreground-muted hover:text-foreground transition-colors">
                                기능
                            </Link>
                            <Link href="#how-it-works" className="text-body text-foreground-muted hover:text-foreground transition-colors">
                                사용법
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="/chatForm"
                        className="px-4 py-2 bg-foreground text-background rounded-lg text-body font-semibold hover:opacity-90 transition-opacity"
                    >
                        시작하기
                    </Link>
                </nav>
            </div>
        </header>
);
}

function HeroSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-caption text-foreground-muted mb-6">
                        <Sparkles className="w-4 h-4" />
                        AI 기반 채용 공고 생성 도구
                    </div>

                    <h1 className="text-hero font-sans mb-6">
                        <span className="block">AI 챗봇과 대화로</span>
                        <span className="block text-foreground-muted">완벽한 채용 공고 완성</span>
                    </h1>

                    <p className="text-body text-foreground-muted max-w-2xl mx-auto mb-8">
                        복잡한 채용 공고 작성을 AI 챗봇이 도와드립니다.
                        간단한 대화만으로 전문적이고 매력적인 채용 공고를 몇 분 안에 완성하세요.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="/chatForm"
                            className="w-full sm:w-auto px-8 py-3 bg-foreground text-background rounded-lg text-body font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            무료로 시작하기
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                            <div className="bg-border/20 px-4 py-2 flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <span className="text-caption text-foreground-muted ml-4">ChatJobmoa - AI 채용 공고 생성기</span>
                            </div>
                            <Image
                                src="/jobmoa_Automatically_generate_jobPostings/mainPageImage/ChatJobmoa_create_gemini.png"
                                alt="AI 챗봇 인터페이스"
                                width={800}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturesSection() {
    const features = [
        {
            icon: <BotMessageSquare className="w-6 h-6" />,
            title: "간단한 AI 프롬프트 생성",
            description: "챗봇이 최소한의 정보로 채용 요구사항을 파악하고 맞춤형 공고를 생성합니다.",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "빠른 생성 속도",
            description: "기존 수시간 걸리던 작업을 몇 분 만에 완료할 수 있어 업무 효율성을 극대화합니다.",
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "정확한 매칭",
            description: "직무별 특성과 기업 문화를 반영하여 적합한 인재를 끌어들이는 공고를 작성합니다.",
        },
    ];

    return (
        <section id="features" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-h1 font-sans mb-4">
                        왜 ChatJobmoa인가요?
                    </h2>
                    <p className="text-body text-foreground-muted">
                        전문적인 채용 공고 작성이 이렇게 쉬워도 되나요?
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-h2 font-sans mb-3">{feature.title}</h3>
                            <p className="text-caption text-foreground-muted">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    const steps = [
        {
            title: "기본 정보 입력",
            description: "채용하려는 직무, 필요한 기술, 경력 수준 등을 챗봇에게 알려주세요.",
            imgSrc: "/jobmoa_Automatically_generate_jobPostings/mainPageImage/Default_Text_Input_gemini.png",
        },
        {
            title: "AI 분석 및 생성",
            description: "AI가 입력된 정보를 분석하여 최적화된 채용 공고를 자동으로 생성합니다.",
            imgSrc: "/jobmoa_Automatically_generate_jobPostings/mainPageImage/Analysis_and_Generation_gemini.png",
        },
        {
            title: "검토 및 완성",
            description: "생성된 공고를 검토하고 필요시 수정하여 완벽한 채용 공고를 완성합니다.",
            imgSrc: "/jobmoa_Automatically_generate_jobPostings/mainPageImage/Success_image_gemini.png",
        },
    ];

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-h1 font-sans mb-4">
                        3단계로 완성하는 채용 공고
                    </h2>
                    <p className="text-body text-foreground-muted">
                        복잡한 과정 없이 누구나 쉽게 전문적인 채용 공고를 만들 수 있습니다.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-20 last:mb-0`}>
                            <div className="flex-1">
                                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                                    <Image
                                        src={step.imgSrc}
                                        alt={step.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-foreground text-background rounded-full text-caption font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-h2 font-sans mb-3">{step.title}</h3>
                                <p className="text-body text-foreground-muted">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BenefitsSection() {
    const benefits = [
        { icon: <Clock className="w-5 h-5" />, text: "작업 시간 90% 단축" },
        { icon: <CheckCircle className="w-5 h-5" />, text: "전문적인 공고 품질" },
        { icon: <Target className="w-5 h-5" />, text: "높은 지원자 만족도" },
    ];

    return (
        <section className="py-16 bg-card">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg p-8 text-center">
                    <h3 className="text-h2 font-sans mb-6">실제 사용자들의 성과</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center justify-center gap-2 text-body">
                                {benefit.icon}
                                <span>{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CtaSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-h1 font-sans mb-4">
                        지금 바로 시작해보세요
                    </h2>
                    <p className="text-body text-foreground-muted mb-8">
                        몇 분만 투자하여 완벽한 채용 공고를 만들어보세요.
                        가입이나 결제 없이 바로 이용 가능합니다.
                    </p>
                    <Link
                        href="/chatForm"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg text-body font-semibold hover:opacity-90 transition-opacity"
                    >
                        무료로 채용 공고 만들기
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="py-12 bg-card border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <BotMessageSquare className="w-5 h-5" />
                        <span className="text-h2 font-sans font-bold">ChatJobmoa</span>
                    </div>
                    <div className="text-caption text-foreground-muted text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} ChatJobmoa. All rights reserved.</p>
                        <p className="mt-1">AI 기반 채용 공고 생성 도구</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}