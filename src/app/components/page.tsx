'use client';

import {useState} from 'react';
import {ArrowRight, Heart, MessageCircle, Share2, Sparkles, Star, Upload} from 'lucide-react';
import Button from '@/app/components/ui/ButtonComponentWithVariants';
import Card from '@/app/components/ui/CardComponentWithVariants';
import Input from '@/app/components/ui/InputComponentWithErrorHandling';
import TextArea from '@/app/components/ui/TextAreaComponent';
import {Body, BodyMuted, H1, H2} from '@/app/components/ui/TypographyComponents';
import Link from '@/app/components/ui/LinkComponentWithVariants';
import Grid from '@/app/components/ui/GridComponent';
import Badge from '@/app/components/ui/BadgeComponent';
import Navbar from '@/app/components/ui/NavbarWithMobileMenu';

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textAreaError, setTextAreaError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputError) setInputError('');
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    if (textAreaError) setTextAreaError('');
  };

  const validateInput = () => {
    if (!inputValue.trim()) {
      setInputError('이 필드는 필수입니다.');
    }
  };

  const validateTextArea = () => {
    if (!textAreaValue.trim()) {
      setTextAreaError('내용을 입력해주세요.');
    }
  };

  // 임시 이미지 데이터
  const sampleImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop",
      title: "비즈니스 미팅",
      description: "현대적인 오피스에서의 팀 미팅"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
      title: "팀워크",
      description: "협업하는 개발팀"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=700&fit=crop",
      title: "여성 리더",
      description: "자신감 있는 비즈니스 여성"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      title: "창의적 사고",
      description: "아이디어를 구상하는 남성"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=650&fit=crop",
      title: "노트북 작업",
      description: "집중해서 일하는 모습"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=450&fit=crop",
      title: "스타트업",
      description: "활기찬 스타트업 분위기"
    },
  ];

  return (
      <div className="min-h-screen bg-[#F8F9FF]">
        {/* Global Navigation */}
        <Navbar />

        <div className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <H1 className="mb-4">Pinterest 스타일 컴포넌트 라이브러리</H1>
              <BodyMuted>재사용 가능한 UI 컴포넌트들을 확인해보세요</BodyMuted>
            </div>

            {/* Navigation Component Section */}
            <section className="mb-16">
              <H2 className="mb-6">네비게이션 컴포넌트</H2>
              <Card variant="hover">
                <div className="space-y-6">
                  <div>
                    <Body className="mb-4 font-medium">글로벌 네비게이션바</Body>
                    <BodyMuted className="mb-4">
                      위쪽에 고정된 네비게이션바를 확인해보세요. 반응형 디자인으로 모바일에서도 완벽하게 작동합니다.
                    </BodyMuted>
                    <div className="bg-[#E5E7FF] p-4 rounded-xl">
                      <Body className="text-[#5472ff] font-medium">
                        ✨ 현재 페이지 상단의 네비게이션바가 이 컴포넌트입니다!
                      </Body>
                    </div>
                  </div>

                  <div className="border-t border-[#E1E1E1] pt-6">
                    <Body className="mb-3 font-medium">주요 기능:</Body>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Badge variant="primary">반응형 디자인</Badge>
                        <Badge variant="success">모바일 메뉴</Badge>
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary">커스터마이징 가능</Badge>
                        <Badge variant="warning">인증 버튼 포함</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Buttons Section */}
            <section className="mb-16">
              <H2 className="mb-6">버튼 컴포넌트</H2>
              <Card variant="hover" className="mb-8">
                <div className="space-y-6">
                  <div>
                    <Body className="mb-4 font-medium">기본 버튼</Body>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary">Primary Button</Button>
                      <Button variant="secondary">Secondary Button</Button>
                      <Button variant="outline">Outline Button</Button>
                    </div>
                  </div>

                  <div>
                    <Body className="mb-4 font-medium">크기별 버튼</Body>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Button variant="primary" size="sm">Small</Button>
                      <Button variant="primary" size="md">Medium</Button>
                      <Button variant="primary" size="lg">Large</Button>
                    </div>
                  </div>

                  <div>
                    <Body className="mb-4 font-medium">아이콘이 있는 버튼</Body>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary" className="gap-2">
                        <Sparkles size={16} />
                        시작하기
                      </Button>
                      <Button variant="secondary" className="gap-2">
                        자세히 보기
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Forms Section - Updated with TextArea */}
            <section className="mb-16">
              <H2 className="mb-6">폼 컴포넌트</H2>
              <Card variant="hover">
                <div className="max-w-2xl space-y-6">
                  <div>
                    <Body className="mb-4 font-medium">Input 컴포넌트</Body>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                          label="이메일"
                          type="email"
                          placeholder="example@email.com"
                          value={inputValue}
                          onChange={handleInputChange}
                          onBlur={validateInput}
                          error={inputError}
                      />
                      <Input
                          label="비밀번호"
                          type="password"
                          placeholder="비밀번호를 입력하세요"
                      />
                    </div>
                    <div className="mt-4">
                      <Input
                          label="검색"
                          type="search"
                          placeholder="검색어를 입력하세요..."
                      />
                    </div>
                  </div>

                  <div className="border-t border-[#E1E1E1] pt-6">
                    <Body className="mb-4 font-medium">TextArea 컴포넌트</Body>
                    <div className="space-y-4">
                      <TextArea
                          label="메시지"
                          placeholder="메시지를 입력하세요..."
                          value={textAreaValue}
                          onChange={handleTextAreaChange}
                          onBlur={validateTextArea}
                          error={textAreaError}
                          rows={4}
                          helperText="최대 500자까지 입력 가능합니다."
                      />

                      <TextArea
                          label="상세 설명"
                          placeholder="프로젝트에 대한 상세한 설명을 작성해주세요..."
                          rows={6}
                          helperText="마크다운 문법을 사용할 수 있습니다."
                      />

                      <TextArea
                          label="피드백"
                          placeholder="의견을 남겨주세요..."
                          rows={3}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-[#E1E1E1]">
                    <Button variant="primary" className="flex-1 gap-2">
                      <Upload size={16} />
                      제출하기
                    </Button>
                    <Button variant="outline">
                      취소
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Cards Section */}
            <section className="mb-16">
              <H2 className="mb-6">카드 컴포넌트</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="hover">
                  <div className="space-y-4">
                    <H2 className="text-lg">기본 카드</H2>
                    <Body>이것은 기본 카드 컴포넌트입니다. 호버 효과가 적용되어 있습니다.</Body>
                    <Button size="sm">더 보기</Button>
                  </div>
                </Card>

                <Card variant="pin" className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5472ff] to-[#3b5bdb] opacity-90"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <H2 className="text-white mb-2">Pin 스타일 카드</H2>
                    <BodyMuted className="text-white/80">Pinterest 스타일의 핀 카드입니다.</BodyMuted>
                  </div>
                </Card>

                <Card variant="default">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary">New</Badge>
                      <div className="flex gap-2">
                        <Heart size={18} className="text-[#919191] hover:text-[#5472ff] cursor-pointer" />
                        <Share2 size={18} className="text-[#919191] hover:text-[#5472ff] cursor-pointer" />
                      </div>
                    </div>
                    <H2 className="text-lg">인터랙션 카드</H2>
                    <Body>아이콘과 배지가 포함된 카드입니다.</Body>
                  </div>
                </Card>
              </div>
            </section>

            {/* Grid Section with Images */}
            <section className="mb-16">
              <H2 className="mb-6">그리드 레이아웃</H2>
              <div className="space-y-8">
                <div>
                  <Body className="mb-4 font-medium">표준 그리드</Body>
                  <Grid variant="standard">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Card key={i} variant="hover" className="min-h-[120px] flex items-center justify-center">
                          <Body>카드 {i + 1}</Body>
                        </Card>
                    ))}
                  </Grid>
                </div>

                <div>
                  <Body className="mb-4 font-medium">이미지 그리드</Body>
                  <Grid variant="standard">
                    {sampleImages.slice(0, 6).map((image) => (
                        <Card key={image.id} variant="hover" className="overflow-hidden">
                          <div className="relative">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRTVFN0ZGIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM1NDcyRkYiLz4KPHN2Zz4K';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200">
                              <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex gap-2">
                                  <Heart size={20} className="cursor-pointer hover:text-red-400" />
                                  <Share2 size={20} className="cursor-pointer hover:text-blue-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <H2 className="text-base mb-1">{image.title}</H2>
                            <BodyMuted>{image.description}</BodyMuted>
                          </div>
                        </Card>
                    ))}
                  </Grid>
                </div>

                <div>
                  <Body className="mb-4 font-medium">Pinterest 스타일 Masonry 그리드 (이미지 포함)</Body>
                  <Grid variant="masonry">
                    {sampleImages.map((image, i) => (
                        <Card
                            key={image.id}
                            variant="pin"
                            className={`mb-4 overflow-hidden cursor-pointer group`}
                            style={{ height: i % 3 === 0 ? '350px' : i % 2 === 0 ? '280px' : '320px' }}
                        >
                          <div className="relative h-full">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjM2IiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDIzNiAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMzYiIGhlaWdodD0iMzUwIiBmaWxsPSIjRTVFN0ZGIi8+CjxwYXRoIGQ9Ik0xMDggMTUwSDEyOFYxNzBIMTA4VjE1MFoiIGZpbGw9IiM1NDcyRkYiLz4KPHR4dCB4PSIxMTgiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNTQ3MkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSAke2kgKyAxfTwvdGV4dD4KPHN2Zz4K`;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center justify-between text-white">
                                  <div>
                                    <Body className="text-white font-medium">{image.title}</Body>
                                    <BodyMuted className="text-white/80 text-xs">{image.description}</BodyMuted>
                                  </div>
                                  <div className="flex gap-2">
                                    <Heart size={18} className="cursor-pointer hover:text-red-400" />
                                    <Share2 size={18} className="cursor-pointer hover:text-blue-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                    ))}
                  </Grid>
                </div>
              </div>
            </section>

            {/* Typography Section */}
            <section className="mb-16">
              <H2 className="mb-6">타이포그래피</H2>
              <Card variant="hover">
                <div className="space-y-6">
                  <div>
                    <H1>Heading 1 - 메인 제목</H1>
                  </div>
                  <div>
                    <H2>Heading 2 - 섹션 제목</H2>
                  </div>
                  <div>
                    <Body>Body Text - 일반적인 본문 텍스트입니다. 가독성을 위해 적절한 줄 간격과 크기로 설정되어 있습니다.</Body>
                  </div>
                  <div>
                    <BodyMuted>Muted Text - 보조 정보나 설명을 위한 텍스트입니다.</BodyMuted>
                  </div>

                  <div className="bg-[#5472ff] p-6 rounded-2xl">
                    <H2 className="text-white text-6xl">Large Display Text</H2>
                  </div>
                </div>
              </Card>
            </section>

            {/* Links Section */}
            <section className="mb-16">
              <H2 className="mb-6">링크 컴포넌트</H2>
              <Card variant="hover">
                <div className="space-y-4">
                  <div>
                    <Body className="mb-2 font-medium">기본 링크</Body>
                    <Link href="#" variant="default">일반적인 링크입니다</Link>
                  </div>
                  <div>
                    <Body className="mb-2 font-medium">강조된 링크</Body>
                    <Link href="#" variant="highlighted">중요한 링크입니다</Link>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="#" variant="highlighted">홈</Link>
                    <Link href="#" variant="highlighted">소개</Link>
                    <Link href="#" variant="highlighted">서비스</Link>
                    <Link href="#" variant="highlighted">연락처</Link>
                  </div>
                </div>
              </Card>
            </section>

            {/* Badges Section */}
            <section className="mb-16">
              <H2 className="mb-6">배지 컴포넌트</H2>
              <Card variant="hover">
                <div className="space-y-6">
                  <div>
                    <Body className="mb-4 font-medium">기본 배지</Body>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="primary">Primary</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                    </div>
                  </div>

                  <div>
                    <Body className="mb-4 font-medium">아이콘이 있는 배지</Body>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="primary" className="gap-1">
                        <Star size={12} />
                        Featured
                      </Badge>
                      <Badge variant="success" className="gap-1">
                        <MessageCircle size={12} />
                        New Message
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Color Palette Section */}
            <section className="mb-16">
              <H2 className="mb-6">컬러 팔레트</H2>
              <Card variant="hover">
                <div className="space-y-6">
                  <div>
                    <Body className="mb-4 font-medium">Primary Colors</Body>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#5472ff] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#5472ff</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#8299ff] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#8299ff</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#3b5bdb] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#3b5bdb</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#748ffc] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#748ffc</BodyMuted>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Body className="mb-4 font-medium">Background Colors</Body>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>White</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#F8F9FF] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#F8F9FF</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#EDF2FF] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#EDF2FF</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#E5E7FF] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#E5E7FF</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#D0DCFF] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>#D0DCFF</BodyMuted>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Body className="mb-4 font-medium">Semantic Colors</Body>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#00A876] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>Success</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FF8C00] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>Warning</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FF4757] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>Error</BodyMuted>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#5472ff] rounded-xl mx-auto mb-2"></div>
                        <BodyMuted>Info</BodyMuted>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Footer */}
            <div className="text-center py-8">
              <BodyMuted>
                이 컴포넌트들은 Pinterest 테마를 기반으로 제작되었습니다.
                프로젝트 전반에서 일관된 디자인을 유지하기 위해 사용해주세요.
              </BodyMuted>
            </div>
          </div>
        </div>
      </div>
  );
}