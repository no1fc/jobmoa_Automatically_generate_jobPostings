'use client';

// React 훅과 아이콘, UI 컴포넌트 임포트
import {useRef, useState} from 'react';
import {BotMessageSquare, CheckCircle, ImageIcon, RefreshCw, Send, Upload, X} from 'lucide-react';
import {Body, BodyMuted, H2} from '@/app/components/ui/TypographyComponents';
import Button from '@/app/components/ui/ButtonComponentWithVariants';
import Input from '@/app/components/ui/InputComponentWithErrorHandling';
import TextArea from '@/app/components/ui/TextAreaComponent';
import Card from '@/app/components/ui/CardComponentWithVariants';
import Badge from '@/app/components/ui/BadgeComponent';
import Grid from '@/app/components/ui/GridComponent';

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
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <h2 style="font-size: 28px; font-weight: bold; color: #3366FF; border-bottom: 2px solid #3366FF; padding-bottom: 10px; margin: 50px 0 20px 0;">
                                🚀 안정적인 성장을 함께할 당신을 기다립니다
                            </h2>
                            <p style="font-size: 16px; line-height: 1.7; color: #333; margin: 0;">
                                2001년 5월 24일 설립된 ${companyName}는 자동차 부품 산업의 핵심적인 역할을 수행하며 꾸준히 성장해 온 강소기업입니다. 현재 111명의 임직원이 함께 전문성을 발휘하며, 고객사의 신뢰를 바탕으로 안정적인 미래를 만들어가고 있습니다. 저희와 함께 다음 단계로 도약할 열정적인 인재를 찾습니다.
                            </p>
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <h2 style="font-size: 28px; font-weight: bold; color: #3366FF; border-bottom: 2px solid #3366FF; padding-bottom: 10px; margin: 50px 0 20px 0;">
                                📋 주요 업무
                            </h2>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">핵심 고객사(한국지엠) 납품 관리 및 긴밀한 커뮤니케이션을 담당합니다.</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">매출 실적을 분석하고 체계적인 물류 프로세스를 관리합니다. (상차 등 육체 작업 없음)</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">고객사의 생산 계획에 연동된 정밀한 판매 계획을 수립하고 예측합니다.</span>
                                </li>
                            </ul>
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <h2 style="font-size: 28px; font-weight: bold; color: #3366FF; border-bottom: 2px solid #3366FF; padding-bottom: 10px; margin: 50px 0 20px 0;">
                                🔧 자격 요건
                            </h2>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 2년 이상의 유관 경력 (자동차 부품, 영업관리, 물류 등)</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 고객사 및 내부 유관부서와의 원활한 소통 능력이 필요합니다.</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 데이터 기반의 분석적 사고와 계획 수립 능력을 갖추어야 합니다.</span>
                                </li>
                            </ul>
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <h2 style="font-size: 28px; font-weight: bold; color: #3366FF; border-bottom: 2px solid #3366FF; padding-bottom: 10px; margin: 50px 0 20px 0;">
                                🌟 우대 사항
                            </h2>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">자동차 부품 업계 영업 및 물류관리 경험 보유자</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">운전면허 소지 및 실제 운전 가능자</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">MS Office (Word, Excel) 활용 능력 우수자</span>
                                </li>
                            </ul>
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <h2 style="font-size: 28px; font-weight: bold; color: #3366FF; border-bottom: 2px solid #3366FF; padding-bottom: 10px; margin: 50px 0 20px 0;">
                                🎁 혜택 및 복지
                            </h2>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 4대 보험, 퇴직금, 연차 등 법정 복리후생 보장</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 명절 선물/상여금 지급</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 업무 성과에 따른 인센티브 제도 운영</span>
                                </li>
                                <li style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                                    <span style="display: inline-block; flex-shrink: 0; width: 8px; height: 8px; background-color: #3366FF; margin-right: 12px; margin-top: 8px;"></span>
                                    <span style="font-size: 16px; line-height: 1.7; color: #333;">(추천) 차량 유지비 / 유류비 지원</span>
                                </li>
                            </ul>
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <h2 style="font-size: 28px; font-weight: bold; color: #3366FF; border-bottom: 2px solid #3366FF; padding-bottom: 10px; margin: 50px 0 30px 0;">
                                📝 지원 방법 및 절차
                            </h2>
                            <div style="display: flex; justify-content: center; align-items: center; text-align: center; padding: 20px 0;">
                                <div style="padding: 12px 24px; background-color: #F0F4FF; border: 1px solid #3366FF; border-radius: 8px; color: #333; font-weight: bold; font-size: 16px;">
                                    서류 전형
                                </div>
                                <span style="font-size: 24px; font-weight: bold; color: #FF8A00; margin: 0 20px;">→</span>
                                <div style="padding: 12px 24px; background-color: #F0F4FF; border: 1px solid #3366FF; border-radius: 8px; color: #333; font-weight: bold; font-size: 16px;">
                                    실무진 면접
                                </div>
                                <span style="font-size: 24px; font-weight: bold; color: #FF8A00; margin: 0 20px;">→</span>
                                <div style="padding: 12px 24px; background-color: #3366FF; border: 1px solid #3366FF; border-radius: 8px; color: #FFFFFF; font-weight: bold; font-size: 16px;">
                                    최종 합격
                                </div>
                            </div>
                            <p style="font-size: 14px; line-height: 1.6; color: #666; margin: 20px 0 0 0; text-align: center;">
                                각 전형 결과는 합격자에 한해 개별적으로 안내됩니다.
                            </p>
            
                            <div style="margin-bottom: 50px;"></div>
            
                            <div style="background-color: #F8F9FA; padding: 40px; border-radius: 8px; text-align: center;">
                                <h3 style="font-size: 22px; font-weight: bold; color: #111; margin: 0 0 15px 0;">
                                    ${companyName}와 함께 성장할 인재를 찾습니다
                                </h3>
                                <p style="font-size: 16px; line-height: 1.7; color: #333; margin: 0 0 30px 0;">
                                    지난 20여 년간 쌓아온 노하우와 안정성을 바탕으로<br/>새로운 20년을 함께 만들어갈 당신의 소중한 지원을 기다립니다.
                                </p>
                                <a href="#saramin-apply-link" style="display: inline-block; background-color: #3366FF; color: #FFFFFF; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; transition: background-color 0.2s;">
                                    사람인에서 지원하기
                                </a>
                            </div>
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
    id: number;                    // 메시지 고유 ID
    type: 'user' | 'assistant';   // 메시지 타입 (사용자 또는 AI)
    content: string;              // 메시지 내용
    timestamp: Date;              // 메시지 전송 시간
}

// 폼 데이터 인터페이스 정의
interface FormData {
    companyName: string;          // 회사명
    position: string;             // 채용 포지션
    requirements: string;         // 자격 요건
    benefits: string;             // 복리후생
    additionalInfo: string;       // 추가 정보
    images?: File[];              // 첨부 이미지 파일 배열 (선택사항)
}

// === 추가 인터페이스 정의 ===
interface JobPostingRequest {
    formData: FormData;
    // chatMessages: ChatMessage[];
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

    /**
     * 채용 공고 생성 API 호출 함수
     * @param requestData - 폼 데이터, 채팅 메시지, 이미지 포함
     * @returns API 응답 데이터
     */
    const createJobPostingAPI = async (requestData: JobPostingRequest): Promise<JobPostingResponse> => {
        const formData = new FormData();

        // 기본 폼 데이터 추가
        formData.append('companyName', requestData.formData.companyName);
        formData.append('position', requestData.formData.position);
        formData.append('requirements', requestData.formData.requirements);
        formData.append('benefits', requestData.formData.benefits);
        formData.append('additionalInfo', requestData.formData.additionalInfo);

        // 채팅 메시지 JSON으로 변환하여 추가
        // formData.append('chatMessages', JSON.stringify(requestData.chatMessages));

        // 이미지 파일들 추가
        requestData.uploadedImages.forEach((image, index) => {
            formData.append(`image_${index}`, image);
        });

        // 각 이미지별로 확인
        console.log("=== FormData 이미지 확인 ===");
        console.log("총 이미지 개수:", requestData.uploadedImages.length);

        for (let i = 0; i < requestData.uploadedImages.length; i++) {
            const imageFile = formData.get(`image_${i}`);
            console.log(`image_${i}:`, imageFile);
            if (imageFile instanceof File) {
                console.log(`  - 파일명: ${imageFile.name}`);
                console.log(`  - 파일 크기: ${imageFile.size} bytes`);
                console.log(`  - 파일 타입: ${imageFile.type}`);
            }
        }

        // 모든 키 확인
        console.log("FormData의 모든 키:", Array.from(formData.keys()));


        //TODO 실제 API 주소로 변경 및 설정
        try {

            return {
                success:true,
                data:{
                    jobPosting:generateTestJobPostingData().jobPosting,
                    htmlContent:generateTestJobPostingData().htmlContent,
                    id:generateTestJobPostingData().id
                }
            };

            // const response = await fetch('/api/create-job-posting', {
            //     method: 'POST',
            //     body: formData,
            // });
            //
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
            //
            // const result: JobPostingResponse = await response.json();
            // return result;

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
     * - 폼 데이터 검증
     * - API 호출
     * - 결과 처리
     */
    const sendCreateJobPosting = async () => {
        // === 필수 데이터 검증 ===
        if (!formData.companyName.trim()) {
            alert('회사명을 입력해주세요.');
            return;
        }

        if (!formData.position.trim()) {
            alert('채용 포지션을 입력해주세요.');
            return;
        }

        setIsGenerating(true);

        try {
            // API 호출용 데이터 준비
            const requestData: JobPostingRequest = {
                formData,
                // chatMessages: messages,
                uploadedImages: uploadedImages
            };

            console.log('채용 공고 생성 요청 데이터:', requestData);

            // API 호출
            const result = await createJobPostingAPI(requestData);

            if (result.success && result.data) {
                console.log("result.success: ", result.success);
                console.log("result.data: ", result.data);
                console.log("result.data.jobPosting: ", result.data.jobPosting);

                // 성공 시 처리
                setGeneratedJobPosting(result.data.jobPosting);
                setShowResult(true);

                // 성공 메시지를 채팅에 추가
                const successMessage: ChatMessage = {
                    id: messages.length + 1,
                    type: 'assistant',
                    content: '🎉 채용 공고가 성공적으로 생성되었습니다! 아래에서 결과를 확인해주세요.',
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, successMessage]);

                // 결과 영역으로 스크롤
                setTimeout(() => {
                    document.getElementById('job-posting-result')?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 100);

            } else {
                // 실패 시 처리
                const errorMessage = result.error || '채용 공고 생성에 실패했습니다.';
                alert(errorMessage);

                // 에러 메시지를 채팅에 추가
                const errorChatMessage: ChatMessage = {
                    id: messages.length + 1,
                    type: 'assistant',
                    content: `❌ 오류가 발생했습니다: ${errorMessage}`,
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, errorChatMessage]);
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
     * @param format - 다운로드 형식 ('html' | 'txt')
     */
    const downloadJobPosting = (format: 'html' | 'txt') => {
        if (!generatedJobPosting) return;

        let content = generatedJobPosting;
        let mimeType = 'text/plain';
        let fileName = `채용공고_${formData.companyName}_${formData.position}`;

        if (format === 'html') {
            // HTML 형식으로 감싸기
            content = `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${formData.companyName} - ${formData.position} 채용</title>
                <style>
                    body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
                    h1, h2 { color: #3366FF; }
                    .highlight { background-color: #F0F4FF; padding: 20px; border-radius: 8px; margin: 20px 0; }
                </style>
            </head>
            <body>
                ${generatedJobPosting}
            </body>
            </html>`;
            mimeType = 'text/html';
            fileName += '.html';
        } else {
            // HTML 태그 제거하여 텍스트만 추출
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = generatedJobPosting;
            content = tempDiv.textContent || tempDiv.innerText || '';
            fileName += '.txt';
        }

        // 파일 다운로드
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

    // === JSX 부분에 추가할 결과 표시 컴포넌트 ===
    const JobPostingResult = () => {
        console.log('JobPostingResult 실행');
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
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadJobPosting('txt')}
                        >
                            TXT 다운로드
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadJobPosting('html')}
                        >
                            HTML 다운로드
                        </Button>
                    </div>
                </div>

                {/* 생성된 채용 공고 미리보기 */}
                <div
                    className="bg-card border border-border rounded-lg p-6 max-h-96 overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: generatedJobPosting }}
                />

                {/* 추가 액션 버튼들 */}
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setShowResult(false);
                            setGeneratedJobPosting('');
                        }}
                    >
                        다시 생성하기
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            // 채용 사이트로 연동하는 로직 추가 가능
                            alert('사람인, 잡코리아 등의 채용 사이트 연동 기능을 추가할 예정입니다.');
                        }}
                    >
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
    // 채팅 메시지 목록 상태 (초기값: 환영 메시지)
    const [messages, setMessages] = useState<ChatMessage[]>([chatBotStartMessage]);

    // 현재 입력 중인 메시지 상태
    const [currentMessage, setCurrentMessage] = useState('');

    // 업로드된 이미지 파일 배열 상태
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);

    // AI 응답 로딩 상태
    const [isLoading, setIsLoading] = useState(false);

    // 폼 입력 데이터 상태
    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        position: '',
        requirements: '',
        benefits: '',
        additionalInfo: ''
    });

    // === ref 객체들 ===
    // 숨겨진 파일 input 엘리먼트 참조
    const fileInputRef = useRef<HTMLInputElement>(null);
    // 메시지 영역 하단 스크롤 위치 참조
    const messagesEndRef = useRef<HTMLDivElement>(null);

    /**
     * 이미지 파일 업로드 핸들러
     * @param event - 파일 input 변경 이벤트
     */
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            // 선택된 파일들을 배열로 변환하고 최대 3개로 제한
            const newImages = Array.from(files).slice(0, 3);
            // 기존 이미지와 합쳐서 최대 3개까지만 유지
            setUploadedImages(prev => [...prev, ...newImages].slice(0, 3));
        }
    };

    /**
     * 업로드된 이미지 제거 핸들러
     * @param index - 제거할 이미지의 인덱스
     */
    const removeImage = (index: number) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
    };

    /**
     * 메시지 전송 핸들러
     * - 사용자 메시지를 채팅에 추가
     * - AI 응답을 시뮬레이션
     */
    const handleSendMessage = async () => {
        // 메시지나 이미지가 없으면 전송하지 않음
        if (!currentMessage.trim() && uploadedImages.length === 0) return;

        // 새 사용자 메시지 객체 생성
        const newUserMessage: ChatMessage = {
            id: messages.length + 1,
            type: 'user',
            content: currentMessage,
            timestamp: new Date(),
        };

        // 메시지 목록에 사용자 메시지 추가
        setMessages(prev => [...prev, newUserMessage]);

        // 입력 필드들 초기화
        setCurrentMessage('');
        setUploadedImages([]);
        setIsLoading(true);

        // TODO: 실제 AI API 호출로 대체해야 함
        // 현재는 1초 지연 후 더미 응답 생성
        setTimeout(() => {
            const assistantResponse: ChatMessage = {
                id: messages.length + 2,
                type: 'assistant',
                content: generateAIResponse(currentMessage),
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantResponse]);
            setIsLoading(false);
        }, 1000);
    };

    /**
     * AI 응답 생성 함수 (더미 데이터)
     * @param message - 사용자 입력 메시지
     * @returns 랜덤 AI 응답 문자열
     */
    const generateAIResponse = (message: string) => {
        // 실제로는 AI API를 호출하여 응답을 생성해야 함
        const responses = [
            '좋은 정보 감사합니다! 추가로 필요한 경력 수준이나 기술 요구사항이 있나요?',
            '업로드해주신 이미지를 보니 정말 멋진 회사네요! 근무 조건이나 복지 혜택에 대해 알려주세요.',
            '훌륭합니다! 이제 채용 공고 초안을 작성해보겠습니다. 추가 요청사항이 있으시면 말씀해주세요.',
        ];
        // 랜덤하게 응답 선택
        return responses[Math.floor(Math.random() * responses.length)];
    };

    /**
     * 폼 데이터 변경 핸들러
     * @param field - 변경할 필드명
     * @param value - 새로운 값
     */
    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    /**
     * 폼 전체 초기화 함수
     * - 메시지를 초기 상태로 리셋
     * - 모든 입력 필드 초기화
     */
    const resetForm = () => {
        setMessages([chatBotStartMessage]);
        setCurrentMessage('');
        setUploadedImages([]);
        setFormData({
            companyName: '',
            position: '',
            requirements: '',
            benefits: '',
            additionalInfo: ''
        });
    };

    return (
        <div className="space-y-6">
            {/* ===== 기본 정보 입력 섹션 ===== */}
            <Card variant="default" className="p-6">
                {/* 섹션 헤더 */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-foreground text-background rounded-lg">
                        <BotMessageSquare className="w-5 h-5" />
                    </div>
                    <H2>기본 정보 입력</H2>
                </div>

                {/* 회사명과 포지션 입력 (반응형 그리드) */}
                <Grid columns={{ default: 1, md: 2 }} gap="md" className="mb-6">
                    <Input
                        id="companyName"
                        label="회사명"
                        placeholder="회사명을 입력해주세요"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                    <Input
                        id="position"
                        label="채용 포지션"
                        placeholder="채용하고자 하는 직무를 입력해주세요"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                    />
                </Grid>

                {/* 자격요건과 복리후생 입력 */}
                <div className="space-y-4">
                    <TextArea
                        id="requirements"
                        label="자격 요건"
                        placeholder="필요한 경력, 기술, 학력 등의 자격 요건을 입력해주세요"
                        value={formData.requirements}
                        onChange={(e) => handleInputChange('requirements', e.target.value)}
                        rows={3}
                    />
                    <TextArea
                        id="benefits"
                        label="복리후생"
                        placeholder="급여, 근무조건, 복지혜택 등을 입력해주세요"
                        value={formData.benefits}
                        onChange={(e) => handleInputChange('benefits', e.target.value)}
                        rows={3}
                    />
                </div>

                {/* 이미지 업로드 섹션 */}
                <div>
                    {/* 업로드된 이미지 미리보기 */}
                    {uploadedImages.length > 0 && (
                        <div className="mb-4">
                            <BodyMuted className="mb-2">첨부된 이미지:</BodyMuted>
                            <div className="flex flex-wrap gap-2">
                                {uploadedImages.map((image, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
                                            <ImageIcon className="w-4 h-4" />
                                            {/* 파일명 표시 (최대 너비 제한) */}
                                            <span className="text-sm truncate max-w-32">{image.name}</span>
                                            {/* 이미지 제거 버튼 */}
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeImage(index)}
                                                className="p-1 h-auto"
                                            >
                                                <X className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 업로드 안내 텍스트 */}
                    <BodyMuted className="text-xs mt-2">
                        Enter로 전송 • 이미지는 최대 3개까지 업로드 가능
                    </BodyMuted>

                    {/* 숨겨진 파일 입력 엘리먼트 */}
                    <input
                        id="image-upload"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"  // 이미지 파일만 허용
                        multiple          // 다중 파일 선택 가능
                        className="hidden"
                    />

                    {/* 이미지 업로드 버튼 (3개 제한) */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadedImages.length >= 3}
                    >
                        <Upload className="w-4 h-4" />
                    </Button>
                </div>
            </Card>

            {/* ===== AI 채팅 인터페이스 섹션 ===== */}
            <Card variant="default" className="p-6">
                {/* 채팅 섹션 헤더 */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-foreground text-background rounded-lg">
                        <BotMessageSquare className="w-5 h-5" />
                    </div>
                    <H2>AI 채팅</H2>
                    <Badge variant="secondary">실시간 상담</Badge>
                </div>

                {/* 메시지 표시 영역 (스크롤 가능) */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto p-4 bg-card rounded-lg border border-border">
                    {/* 모든 메시지를 순회하며 표시 */}
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.type === 'user'
                                    ? 'bg-foreground text-background'  // 사용자 메시지: 어두운 배경
                                    : 'bg-background border border-border'  // AI 메시지: 밝은 배경
                            }`}>
                                {/* 메시지 내용 */}
                                <Body className={message.type === 'user' ? 'text-background' : 'text-foreground'}>
                                    {message.content}
                                </Body>

                                {/* 메시지 전송 시간 */}
                                <BodyMuted className="text-xs mt-1">
                                    {message.timestamp.toLocaleTimeString()}
                                </BodyMuted>
                            </div>
                        </div>
                    ))}

                    {/* AI 응답 로딩 중일 때 표시되는 애니메이션 */}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-background border border-border px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    {/* 점 3개 펄스 애니메이션 (각각 다른 지연시간) */}
                                    <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                    <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* 스크롤 위치 참조용 빈 div */}
                    <div ref={messagesEndRef} />
                </div>

                {/* 메시지 입력 영역 */}
                <div className="flex gap-2">
                    {/* 텍스트 입력 영역 */}
                    <div className="flex-1">
                        <TextArea
                            placeholder="메시지를 입력하세요... (이미지와 함께 업로드 가능)"
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)}
                            rows={2}
                            onKeyDown={(e) => {
                                // Enter 키로 전송 (Shift+Enter는 줄바꿈)
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage();
                                }
                            }}
                        />
                    </div>

                    {/* 액션 버튼들 */}
                    <div className="flex flex-col gap-2">
                        {/* 메시지 전송 버튼 */}
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={handleSendMessage}
                            disabled={isLoading}  // 로딩 중에는 비활성화
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
                {/* 폼 초기화 버튼 */}
                <Button variant="outline" onClick={resetForm} disabled={isGenerating}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    초기화
                </Button>

                {/* 채용 공고 생성 버튼 (메인 액션) */}
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