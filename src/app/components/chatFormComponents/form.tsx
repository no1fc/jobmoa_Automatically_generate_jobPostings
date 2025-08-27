'use client';

// React 훅과 아이콘, UI 컴포넌트 임포트
import {useRef, useState} from 'react';
import {BotMessageSquare, Building2, CheckCircle, ImageIcon, RefreshCw, Send, Star, Upload, X} from 'lucide-react';
import {Body, BodyMuted, H2} from '@/app/components/ui/TypographyComponents';
import Button from '@/app/components/ui/ButtonComponentWithVariants';
import Input from '@/app/components/ui/InputComponentWithErrorHandling';
import TextArea from '@/app/components/ui/TextAreaComponent';
import Card from '@/app/components/ui/CardComponentWithVariants';
import Badge from '@/app/components/ui/BadgeComponent';
import Grid from '@/app/components/ui/GridComponent';
import Select, {
    companySizeOptions,
    companyTypeOptions,
    employmentTypeOptions,
    industryOptions
} from '@/app/components/ui/SelectComponent';
import Image from "next/image";

//FIXME 임시 데이터
const generateTestJobPostingData = (companyName: string = '코스모이엔지(주)', position: string = '자동차 제조 부품 영업물류 경력직') => {
    const testHtmlContent = `
            <div style="width: 100%; font-family: 'Pretendard', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; background-color: #FFFFFF;">
                <table align="center" style="width: 860px; margin: 40px auto; border-collapse: collapse; border-spacing: 0;">
                    <tbody>
                    <tr>
                        <td style="padding: 50px 60px; border: 1px solid #EAEAEA; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                            <h1 style="font-size: 36px; font-weight: 900; color: #111; margin: 0 0 10px 0; text-align: center;">
                                ${companyName}
                            </h1>
                            <p style="font-size: 20px; color: #555; margin: 0 0 40px 0; text-align: center;">
                                ${position} 채용
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>`;
    return {
        jobPosting: testHtmlContent,
        htmlContent: testHtmlContent,
        id: `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
};

// 채팅 메시지 인터페이스 정의
interface ChatMessage {
    id: number;
    type: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

// 폼 데이터 인터페이스 정의 (인터페이스에 맞게 수정)
interface FormData {
    companyName: string;            // 회사명 (필수사항)
    companyType: string;            // 기업 형태 (필수사항)
    industry: string;               // 업종 (필수사항)
    companySize: string;            // 회사 규모
    position: string;               // 채용 직무 (필수사항)
    employmentType: string;         // 고용 형태 (필수사항)
    requirements: string;           // 자격 요건 (필수사항)
    benefits: string;               // 복리 후생
    additionalInfo: string;         // 추가 정보
    companyIndustry: string;        // 회사 업종
    companyDescription: string;     // 회사 소개
    preferredQualification: string; // 우대사항
    companyCulture: string;         // 기업 문화
    brandingTone: string;           // 브랜딩/톤 & 매너
    keyMessage: string;             // 핵심 강조 메시지
    company_introduction_image?: File[];  // 기업 소개 이미지
    company_logo_image?: File;      // 기업 로고 파일
}

// 브랜딩 톤 옵션
const brandingToneOptions = [
    { value: 'professional', label: '전문적이고 신뢰감 있는' },
    { value: 'friendly', label: '친근하고 따뜻한' },
    { value: 'innovative', label: '혁신적이고 도전적인' },
    { value: 'casual', label: '캐주얼하고 편안한' },
    { value: 'formal', label: '격식 있고 엄중한' },
    { value: 'energetic', label: '활기차고 역동적인' },
    { value: 'caring', label: '배려 깊고 인간적인' },
    { value: 'ambitious', label: '야심찬 성장 지향적인' }
];

// === 추가 인터페이스 정의 ===
interface JobPostingRequest {
    formData: FormData;
    uploadedImages: File[];
}

interface JobPostingResponse {
    success: boolean;
    data?: {
        jobPosting: string;
        htmlContent: string;
        id: string;
    };
    error?: string;
}

export default function FormPage() {
    // === 상태 추가 ===
    const [generatedJobPosting, setGeneratedJobPosting] = useState<string>('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

    /**
     * 필수 필드 검증 함수
     */
    const validateRequiredFields = (): boolean => {
        const errors: Partial<FormData> = {};
        const requiredFields = [
            'companyName', 'companyType', 'industry', 'position', 'employmentType', 'requirements'
        ] as (keyof FormData)[];

        requiredFields.forEach(field => {
            if (!formData[field] || (typeof formData[field] === 'string' && !(formData[field] as string).trim())) {
                errors[field] = '필수 입력 항목입니다' as never;
            }
        });

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    /**
     * 채용 공고 생성 API 호출 함수
     */
    const createJobPostingAPI = async (requestData: JobPostingRequest): Promise<JobPostingResponse> => {
        const formData = new FormData();

        // 기본 폼 데이터 추가
        Object.entries(requestData.formData).forEach(([key, value]) => {
            if (value && typeof value === 'string') {
                formData.append(key, value);
            }
        });

        // 로고 이미지 추가
        if (requestData.formData.company_logo_image) {
            formData.append('company_logo_image', requestData.formData.company_logo_image);
        }

        // 기업 소개 이미지들 추가
        requestData.uploadedImages.forEach((image, index) => {
            formData.append(`company_introduction_image_${index}`, image);
        });

        //콘솔 로고 추가.
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        console.log(formData);

        console.log(JSON.stringify(formData))

        try {
            const responseData = await fetch('http://localhost:3001/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            return responseData.json();

            // return {
            //     success: true,
            //     data: {
            //         jobPosting: generateTestJobPostingData().jobPosting,
            //         htmlContent: generateTestJobPostingData().htmlContent,
            //         id: generateTestJobPostingData().id
            //     }
            // };
        } catch (error) {
            console.error('채용 공고 생성 API 오류:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'
            };
        }
    };

    /**
     * 채용 공고 생성 메인 함수
     */
    const sendCreateJobPosting = async () => {
        // 필수 필드 검증
        if (!validateRequiredFields()) {
            alert('필수 입력 항목을 모두 작성해주세요.');
            return;
        }

        setIsGenerating(true);

        try {
            const requestData: JobPostingRequest = {
                formData,
                uploadedImages: uploadedImages
            };

            const result = await createJobPostingAPI(requestData);

            if (result.success && result.data) {
                setGeneratedJobPosting(result.data.jobPosting);
                setShowResult(true);

                const successMessage: ChatMessage = {
                    id: messages.length + 1,
                    type: 'assistant',
                    content: '🎉 채용 공고가 성공적으로 생성되었습니다! 아래에서 결과를 확인해주세요.',
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, successMessage]);

                setTimeout(() => {
                    document.getElementById('job-posting-result')?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 100);
            } else {
                const errorMessage = result.error || '채용 공고 생성에 실패했습니다.';
                alert(errorMessage);
            }
        } catch (error) {
            console.error('채용 공고 생성 오류:', error);
            alert('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
            setIsGenerating(false);
        }
    };

    /**
     * 생성된 채용 공고 다운로드 함수
     */
    const downloadJobPosting = (format: 'html' | 'txt') => {
        if (!generatedJobPosting) return;

        let content = generatedJobPosting;
        let mimeType = 'text/plain';
        let fileName = `채용공고_${formData.companyName}_${formData.position}`;

        if (format === 'html') {
            content = `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${formData.companyName} - ${formData.position} 채용</title>
            </head>
            <body>
                ${generatedJobPosting}
            </body>
            </html>`;
            mimeType = 'text/html';
            fileName += '.html';
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = generatedJobPosting;
            content = tempDiv.textContent || tempDiv.innerText || '';
            fileName += '.txt';
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // === 결과 표시 컴포넌트 ===
    const JobPostingResult = () => {
        if (!showResult || !generatedJobPosting) return null;

        return (
            <Card variant="default" className="p-6 mt-6" id="job-posting-result">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500 text-white rounded-lg">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <H2>생성된 채용 공고</H2>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => downloadJobPosting('txt')}>
                            TXT 다운로드
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => downloadJobPosting('html')}>
                            HTML 다운로드
                        </Button>
                    </div>
                </div>

                <div
                    className="bg-card border border-border rounded-lg p-6 max-h-96 overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: generatedJobPosting }}
                />

                <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
                    <Button variant="outline" onClick={() => {
                        setShowResult(false);
                        setGeneratedJobPosting('');
                    }}>
                        다시 생성하기
                    </Button>
                    <Button variant="primary" onClick={() => {
                        alert('사람인, 잡코리아 등의 채용 사이트 연동 기능을 추가할 예정입니다.');
                    }}>
                        채용 사이트에 등록하기
                    </Button>
                </div>
            </Card>
        );
    };

    // AI 챗봇의 초기 환영 메시지 정의
    const chatBotStartMessage: ChatMessage = {
        id: 1,
        type: 'assistant',
        content: '안녕하세요! 채용 공고 작성을 도와드리겠습니다. 회사명과 채용하고자 하는 포지션을 알려주세요.',
        timestamp: new Date(),
    };

    // === 상태 관리 ===
    const [messages, setMessages] = useState<ChatMessage[]>([chatBotStartMessage]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [logoFile, setLogoFile] = useState<File | null>(null);

    // 폼 입력 데이터 상태
    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        companyType: '',
        industry: '',
        companySize: '',
        position: '',
        employmentType: '',
        requirements: '',
        benefits: '',
        additionalInfo: '',
        companyIndustry: '',
        companyDescription: '',
        preferredQualification: '',
        companyCulture: '',
        brandingTone: '',
        keyMessage: '',
        company_introduction_image: [],
        company_logo_image: undefined
    });

    // === ref 객체들 ===
    const fileInputRef = useRef<HTMLInputElement>(null);
    const logoFileInputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    /**
     * 로고 이미지 업로드 핸들러
     */
    const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setLogoFile(file);
            setFormData(prev => ({
                ...prev,
                company_logo_image: file
            }));
        }
    };

    /**
     * 기업 소개 이미지 업로드 핸들러
     */
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files).slice(0, 5); // 최대 5개
            setUploadedImages(prev => [...prev, ...newImages].slice(0, 5));
            setFormData(prev => ({
                ...prev,
                company_introduction_image: [...(prev.company_introduction_image || []), ...newImages].slice(0, 5)
            }));
        }
    };

    /**
     * 업로드된 이미지 제거 핸들러
     */
    const removeImage = (index: number) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
        setFormData(prev => ({
            ...prev,
            company_introduction_image: prev.company_introduction_image?.filter((_, i) => i !== index)
        }));
    };

    /**
     * 메시지 전송 핸들러
     */
    const handleSendMessage = async () => {
        if (!currentMessage.trim() && uploadedImages.length === 0) return;

        const newUserMessage: ChatMessage = {
            id: messages.length + 1,
            type: 'user',
            content: currentMessage,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, newUserMessage]);
        setCurrentMessage('');
        setIsLoading(true);

        setTimeout(() => {
            const responses = [
                '좋은 정보 감사합니다! 추가로 필요한 경력 수준이나 기술 요구사항이 있나요?',
                '업로드해주신 이미지를 보니 정말 멋진 회사네요! 근무 조건이나 복지 혜택에 대해 알려주세요.',
                '훌륭합니다! 이제 채용 공고 초안을 작성해보겠습니다. 추가 요청사항이 있으시면 말씀해주세요.',
            ];

            const assistantResponse: ChatMessage = {
                id: messages.length + 2,
                type: 'assistant',
                content: responses[Math.floor(Math.random() * responses.length)],
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantResponse]);
            setIsLoading(false);
        }, 1000);
    };

    /**
     * 폼 데이터 변경 핸들러
     */
    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // 에러 상태 제거
        if (formErrors[field]) {
            setFormErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    /**
     * 폼 전체 초기화 함수
     */
    const resetForm = () => {
        setMessages([chatBotStartMessage]);
        setCurrentMessage('');
        setUploadedImages([]);
        setLogoFile(null);
        setFormErrors({});
        setFormData({
            companyName: '',
            companyType: '',
            industry: '',
            companySize: '',
            position: '',
            employmentType: '',
            requirements: '',
            benefits: '',
            additionalInfo: '',
            companyIndustry: '',
            companyDescription: '',
            preferredQualification: '',
            companyCulture: '',
            brandingTone: '',
            keyMessage: '',
            company_introduction_image: [],
            company_logo_image: undefined
        });
    };

    return (
        <div className="space-y-6">
            {/* ===== 필수 기본 정보 섹션 ===== */}
            <Card variant="default" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-500 text-white rounded-lg">
                        <Building2 className="w-5 h-5" />
                    </div>
                    <H2>필수 기본 정보</H2>
                    <Badge variant="warning">필수</Badge>
                </div>

                {/* 회사 로고 업로드 (필수) */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                        기업 로고 <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-4">
                        <input
                            id="logo-image-upload"
                            type="file"
                            ref={logoFileInputRef}
                            onChange={handleLogoUpload}
                            accept="image/*"
                            className="flex-1"
                        />
                        {logoFile && (
                            <Image
                                src={URL.createObjectURL(logoFile)}
                                alt="기업 로고 미리보기"
                                width={80}
                                height={80}
                                className="rounded-lg border border-border object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* 회사명과 채용 직무 */}
                <Grid columns={{ default: 1, md: 2 }} gap="md" className="mb-6">
                    <Input
                        id="companyName"
                        label="회사명"
                        placeholder="회사명을 입력해주세요"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        error={formErrors.companyName as string}
                    />
                    <Input
                        id="position"
                        label="채용 직무"
                        placeholder="채용하고자 하는 직무를 입력해주세요"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        error={formErrors.position as string}
                    />
                </Grid>

                {/* 필수 선택 필드들 */}
                <Grid columns={{ default: 1, md: 3 }} gap="md" className="mb-6">
                    <Select
                        id="company-type"
                        label="기업 형태"
                        placeholder="기업 형태 선택"
                        value={formData.companyType}
                        onChange={(value) => handleInputChange('companyType', value)}
                        options={companyTypeOptions}
                        error={formErrors.companyType as string}
                        clearable
                    />
                    <Select
                        id="industry"
                        label="업종"
                        placeholder="업종 선택"
                        value={formData.industry}
                        onChange={(value) => handleInputChange('industry', value)}
                        options={industryOptions}
                        error={formErrors.industry as string}
                        searchable
                        clearable
                    />
                    <Select
                        id="employment-type"
                        label="고용 형태"
                        placeholder="고용 형태 선택"
                        value={formData.employmentType}
                        onChange={(value) => handleInputChange('employmentType', value)}
                        options={employmentTypeOptions}
                        error={formErrors.employmentType as string}
                        multiple
                        clearable
                    />
                </Grid>

                {/* 자격 요건 (필수) */}
                <TextArea
                    id="requirements"
                    label="자격 요건"
                    placeholder="필요한 경력, 기술, 학력 등의 자격 요건을 입력해주세요"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    error={formErrors.requirements as string}
                    rows={4}
                />
            </Card>

            {/* ===== 회사 정보 섹션 ===== */}
            <Card variant="default" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500 text-white rounded-lg">
                        <BotMessageSquare className="w-5 h-5" />
                    </div>
                    <H2>회사 정보</H2>
                    <Badge variant="secondary">추가 정보</Badge>
                </div>

                <div className="space-y-4 mb-6">
                    {/* 회사 규모 */}
                    <Select
                        id="company-size"
                        label="회사 규모"
                        placeholder="회사 규모 선택"
                        value={formData.companySize}
                        onChange={(value) => handleInputChange('companySize', value)}
                        options={companySizeOptions}
                        clearable
                    />

                    {/* 회사 소개 */}
                    <TextArea
                        id="company-description"
                        label="회사 소개"
                        placeholder="회사의 비전, 미션, 주요 사업 분야 등을 소개해주세요"
                        value={formData.companyDescription}
                        onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                        rows={4}
                    />

                    {/* 기업 문화 */}
                    <TextArea
                        id="company-culture"
                        label="기업 문화"
                        placeholder="회사의 문화, 가치관, 근무 환경 등을 설명해주세요"
                        value={formData.companyCulture}
                        onChange={(e) => handleInputChange('companyCulture', e.target.value)}
                        rows={3}
                    />
                </div>
            </Card>

            {/* ===== 채용 상세 정보 섹션 ===== */}
            <Card variant="default" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500 text-white rounded-lg">
                        <Star className="w-5 h-5" />
                    </div>
                    <H2>채용 상세 정보</H2>
                </div>

                <div className="space-y-4">
                    {/* 우대사항 */}
                    <TextArea
                        id="preferred-qualification"
                        label="우대사항"
                        placeholder="우대하는 경력, 자격증, 기술 등을 입력해주세요"
                        value={formData.preferredQualification}
                        onChange={(e) => handleInputChange('preferredQualification', e.target.value)}
                        rows={3}
                    />

                    {/* 복리후생 */}
                    <TextArea
                        id="benefits"
                        label="복리후생"
                        placeholder="급여, 근무조건, 복지혜택 등을 입력해주세요"
                        value={formData.benefits}
                        onChange={(e) => handleInputChange('benefits', e.target.value)}
                        rows={3}
                    />
                </div>
            </Card>

            {/* ===== 브랜딩 및 메시징 섹션 ===== */}
            <Card variant="default" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500 text-white rounded-lg">
                        <BotMessageSquare className="w-5 h-5" />
                    </div>
                    <H2>브랜딩 및 메시징</H2>
                    <Badge variant="outline">고급 옵션</Badge>
                </div>

                <div className="space-y-4">
                    {/* 브랜딩 톤 */}
                    <Select
                        id="branding-tone"
                        label="브랜딩 톤 & 매너"
                        placeholder="채용 공고의 전체적인 톤을 선택해주세요"
                        value={formData.brandingTone}
                        onChange={(value) => handleInputChange('brandingTone', value)}
                        options={brandingToneOptions}
                        clearable
                    />

                    {/* 핵심 강조 메시지 */}
                    <TextArea
                        id="key-message"
                        label="핵심 강조 메시지"
                        placeholder="이 채용 공고에서 가장 강조하고 싶은 메시지를 입력해주세요"
                        value={formData.keyMessage}
                        onChange={(e) => handleInputChange('keyMessage', e.target.value)}
                        rows={3}
                    />
                </div>
            </Card>

            {/* ===== 기업 소개 이미지 업로드 섹션 ===== */}
            <Card variant="default" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-500 text-white rounded-lg">
                        <ImageIcon className="w-5 h-5" />
                    </div>
                    <H2>기업 소개 이미지</H2>
                    <Badge variant="secondary">선택사항</Badge>
                </div>

                {/* 업로드된 이미지 미리보기 */}
                {uploadedImages.length > 0 && (
                    <div className="mb-4">
                        <BodyMuted className="mb-2">업로드된 이미지:</BodyMuted>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {uploadedImages.map((image, index) => (
                                <div key={index} className="relative group">
                                    <Image
                                        src={URL.createObjectURL(image)}
                                        alt={`기업 소개 이미지 ${index + 1}`}
                                        width={150}
                                        height={100}
                                        className="w-full h-24 object-cover rounded-lg border border-border"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-3 h-3" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <BodyMuted className="text-xs mb-3">
                    사무실, 팀 워크샵, 제품 사진 등 회사를 어필할 수 있는 이미지를 최대 5개까지 업로드해주세요.
                </BodyMuted>

                <input
                    id="image-upload"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    multiple
                    className="hidden"
                />

                <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadedImages.length >= 5}
                >
                    <Upload className="w-4 h-4 mr-2" />
                    이미지 업로드 ({uploadedImages.length}/5)
                </Button>
            </Card>

            {/* ===== AI 채팅 인터페이스 섹션 ===== */}
            <Card variant="default" className="p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-foreground text-background rounded-lg">
                        <BotMessageSquare className="w-5 h-5" />
                    </div>
                    <H2>AI 채팅</H2>
                    <Badge variant="secondary">실시간 상담</Badge>
                </div>

                {/* 메시지 표시 영역 */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto p-4 bg-card rounded-lg border border-border">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.type === 'user'
                                    ? 'bg-foreground text-background'
                                    : 'bg-background border border-border'
                            }`}>
                                <Body className={message.type === 'user' ? 'text-background' : 'text-foreground'}>
                                    {message.content}
                                </Body>
                                <BodyMuted className="text-xs mt-1">
                                    {message.timestamp.toLocaleTimeString()}
                                </BodyMuted>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-background border border-border px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                    <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* 메시지 입력 영역 */}
                <div className="flex gap-2">
                    <div className="flex-1">
                        <TextArea
                            placeholder="메시지를 입력하세요..."
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)}
                            rows={2}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={handleSendMessage}
                            disabled={isLoading}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </Card>

            {/* ===== 추가 정보 입력 섹션 ===== */}
            <Card variant="default" className="p-6">
                <H2 className="mb-4">추가 정보 (선택사항)</H2>
                <TextArea
                    label="기타 요청사항"
                    placeholder="특별한 요청사항이나 강조하고 싶은 내용이 있다면 입력해주세요"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    rows={4}
                />
            </Card>

            {/* ===== 최종 액션 버튼들 ===== */}
            <div className="flex justify-between items-center gap-4">
                <Button variant="outline" onClick={resetForm} disabled={isGenerating}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    초기화
                </Button>

                <Button
                    variant="primary"
                    size="lg"
                    onClick={sendCreateJobPosting}
                    disabled={isGenerating}
                >
                    {isGenerating ? (
                        <>
                            <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                            생성 중...
                        </>
                    ) : (
                        <>
                            <BotMessageSquare className="w-4 h-4 mr-2" />
                            채용 공고 생성하기
                        </>
                    )}
                </Button>
            </div>

            {/* 결과 표시 컴포넌트 */}
            <JobPostingResult />
        </div>
    );
}