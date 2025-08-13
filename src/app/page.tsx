'use client';

import {ArrowRight, BotMessageSquare, CheckCircle, Clock, ImageIcon, Sparkles, Target, Zap} from 'lucide-react';
import Image from 'next/image';
import {Body, BodyMuted, H1, H2} from '@/app/components/ui/TypographyComponents';
import Button from '@/app/components/ui/ButtonComponentWithVariants';
import Card from '@/app/components/ui/CardComponentWithVariants';
import LinkComponent from '@/app/components/ui/LinkComponentWithVariants';
import Badge from '@/app/components/ui/BadgeComponent';
import Grid from '@/app/components/ui/GridComponent';
import Navbar from '@/app/components/ui/NavbarWithMobileMenu';

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
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 py-4">
                <Navbar
                    navItems={[
                        { icon: '', href: '#features',label:'기능' },
                        { icon: '', href: '#how-it-works',label:'사용법' },
                    ]}
                    showAuth={false}
                />
            </div>
        </header>
    );
}

function HeroSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="outline" className="mb-6 px-4 py-2">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI 기반 채용 공고 생성 도구
                    </Badge>

                    <H1 className="text-hero mb-6">
                        <span className="block">AI 챗봇과 대화로</span>
                        <span className="block text-foreground-muted">완벽한 채용 공고 완성</span>
                    </H1>

                    <Body className="text-foreground-muted max-w-2xl mx-auto mb-8">
                        복잡한 채용 공고 작성을 AI 챗봇이 도와드립니다.
                        간단한 대화와 이미지 첨부만으로 전문적이고 매력적인 채용 공고를 몇 분 안에 완성하세요.
                    </Body>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button variant="primary" size="lg" className="w-full sm:w-auto">
                            <LinkComponent href="/chatForm" variant="ghost" className="text-inherit flex items-center">
                                무료로 시작하기
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </LinkComponent>
                        </Button>
                    </div>

                    <Card variant="hover" className="max-w-4xl mx-auto overflow-hidden">
                        <div className="bg-border/20 px-4 py-2 flex items-center gap-2">
                            <div className="flex gap-1">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <BodyMuted className="ml-4">ChatJobmoa - AI 채용 공고 생성기</BodyMuted>
                        </div>
                        <div className="p-2">
                            <Image
                                src="/mainPageImage/ChatJobmoa_create_gemini.png"
                                alt="AI 챗봇 인터페이스"
                                width={800}
                                height={500}
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </Card>
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
            icon: <ImageIcon className="w-6 h-6" />,
            title: "이미지 기반 분석",
            description: "회사 로고, 사무실 사진 등을 업로드하여 더욱 생생하고 매력적인 공고를 만들어보세요.",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "빠른 생성 속도",
            description: "기존 수시간 걸리던 작업을 몇 분 만에 완료할 수 있어 업무 효율성을 극대화합니다.",
        },
    ];

    return (
        <section id="features" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <H2 className="mb-4">왜 ChatJobmoa인가요?</H2>
                    <Body className="text-foreground-muted">
                        전문적인 채용 공고 작성이 이렇게 쉬워도 되나요?
                    </Body>
                </div>

                <Grid columns={{ default: 1, md: 3 }} gap="lg" className="max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <Card key={index} variant="hover" className="p-6 text-center h-full">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-card border border-border rounded-lg mb-4">
                                {feature.icon}
                            </div>
                            <H2 className="mb-3 text-h2">{feature.title}</H2>
                            <BodyMuted>{feature.description}</BodyMuted>
                        </Card>
                    ))}
                </Grid>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    const steps = [
        {
            title: "기본 정보 입력",
            description: "채용하려는 직무, 필요한 기술, 경력 수준 등을 챗봇에게 알려주세요. 회사 이미지도 함께 업로드할 수 있습니다.",
            imgSrc: "/mainPageImage/Default_Text_Input_gemini.png",
        },
        {
            title: "AI 분석 및 생성",
            description: "AI가 입력된 정보와 이미지를 분석하여 최적화된 채용 공고를 자동으로 생성합니다.",
            imgSrc: "/mainPageImage/Analysis_and_Generation_gemini.png",
        },
        {
            title: "검토 및 완성",
            description: "생성된 공고를 검토하고 필요시 수정하여 완벽한 채용 공고를 완성합니다.",
            imgSrc: "/mainPageImage/Success_image_gemini.png",
        },
    ];

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <H2 className="mb-4">3단계로 완성하는 채용 공고</H2>
                    <Body className="text-foreground-muted">
                        복잡한 과정 없이 누구나 쉽게 전문적인 채용 공고를 만들 수 있습니다.
                    </Body>
                </div>

                <div className="max-w-4xl mx-auto space-y-20">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                            <div className="flex-1">
                                <Card variant="hover" className="overflow-hidden">
                                    <Image
                                        src={step.imgSrc}
                                        alt={step.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </Card>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <Badge variant="primary" className="w-8 h-8 rounded-full mb-4 flex items-center justify-center">
                                    {index + 1}
                                </Badge>
                                <H2 className="mb-3">{step.title}</H2>
                                <Body className="text-foreground-muted">{step.description}</Body>
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
                <Card variant="hover" className="max-w-4xl mx-auto p-8 text-center">
                    <H2 className="mb-6">실제 사용자들의 성과</H2>
                    <Grid columns={{ default: 1, md: 3 }} gap="md">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center justify-center gap-2">
                                {benefit.icon}
                                <Body>{benefit.text}</Body>
                            </div>
                        ))}
                    </Grid>
                </Card>
            </div>
        </section>
    );
}

function CtaSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <H2 className="mb-4">지금 바로 시작해보세요</H2>
                    <Body className="text-foreground-muted mb-8">
                        몇 분만 투자하여 완벽한 채용 공고를 만들어보세요.
                        가입이나 결제 없이 바로 이용 가능합니다.
                    </Body>
                    <Button variant="primary" size="lg">
                        <LinkComponent href="/chatForm" variant="ghost" className="text-inherit flex items-center">
                            무료로 채용 공고 만들기
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </LinkComponent>
                    </Button>
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
                        <H2 className="font-bold">ChatJobmoa</H2>
                    </div>
                    <div className="text-center md:text-right">
                        <BodyMuted>&copy; {new Date().getFullYear()} ChatJobmoa. All rights reserved.</BodyMuted>
                        <BodyMuted className="mt-1">AI 기반 채용 공고 생성 도구</BodyMuted>
                    </div>
                </div>
            </div>
        </footer>
    );
}