'use client';

import './css/fromStyle.css'; // CSS 임포트 추가
import {InputTag} from './InputTag';
import {useFormState} from './formState/useFormState';
import {BotMessageSquare, Briefcase, Building, CheckCircle, Gift, Mail, RotateCcw, Send, User} from 'lucide-react';
import React from "react";

export default function FormPage(){
    const {
        position, setPosition,
        company, setCompany,
        duties, setDuties,
        requirements, setRequirements,
        preferred, setPreferred,
        benefits, setBenefits,
        application, setApplication,
        textAreaValue, setTextAreaValue
    } = useFormState();

    // 섹션별로 분리하여 가독성 개선
    const basicInfoFields = [
        {
            title: '채용 포지션',
            id: 'position',
            name: 'position',
            icon: <Briefcase className="w-4 h-4" />,
            value: position,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPosition(e.target.value)
        },
        {
            title: '회사 소개',
            id: 'company',
            name: 'company',
            icon: <Building className="w-4 h-4" />,
            value: company,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)
        },
    ];

    const jobInfoFields = [
        {
            title: '주요 업무',
            id: 'duties',
            name: 'duties',
            icon: <User className="w-4 h-4" />,
            value: duties,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDuties(e.target.value)
        },
        {
            title: '자격 요건',
            id: 'requirements',
            name: 'requirements',
            icon: <CheckCircle className="w-4 h-4" />,
            value: requirements,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setRequirements(e.target.value)
        },
    ];

    const benefitFields = [
        {
            title: '우대 사항',
            id: 'preferred',
            name: 'preferred',
            icon: <Gift className="w-4 h-4" />,
            value: preferred,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPreferred(e.target.value)
        },
        {
            title: '혜택 및 복지',
            id: 'benefits',
            name: 'benefits',
            icon: <Gift className="w-4 h-4" />,
            value: benefits,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setBenefits(e.target.value)
        },
        {
            title: '지원 방법 및 절차',
            id: 'application',
            name: 'application',
            icon: <Mail className="w-4 h-4" />,
            value: application,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setApplication(e.target.value)
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 폼 제출 로직
        console.log({
            position,
            company,
            duties,
            requirements,
            preferred,
            benefits,
            application,
            textAreaValue
        });
    };

    const handleReset = () => {
        setPosition('');
        setCompany('');
        setDuties('');
        setRequirements('');
        setPreferred('');
        setBenefits('');
        setApplication('');
        setTextAreaValue('');
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <div className="form-header-icon">
                    <BotMessageSquare className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="form-title">AI 챗봇과 채용 공고 작성</h2>
                    <p className="form-description">
                        단계별로 정보를 입력하시면 AI가 최적화된 채용 공고를 생성해드립니다.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="form-content">
                {/* 기본 정보 섹션 */}
                <div className="form-section">
                    <div className="section-header">
                        <h3 className="section-title">
                            <Building className="w-5 h-5" />
                            기본 정보
                        </h3>
                        <p className="section-description">
                            회사와 채용 포지션에 대한 기본 정보를 입력해주세요.
                        </p>
                    </div>

                    <div className="form-fields-container">
                        {basicInfoFields.map((input, index) => (
                            <div key={input.id} className="form-field-item">
                                <InputTag
                                    title={input.title}
                                    type="text"
                                    value={input.value}
                                    onChange={input.onChange}
                                    classMethod=""
                                    id={input.id}
                                    name={input.name}
                                />
                                {index < basicInfoFields.length - 1 && <div className="field-divider" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 직무 정보 섹션 */}
                <div className="form-section">
                    <div className="section-header">
                        <h3 className="section-title">
                            <User className="w-5 h-5" />
                            직무 상세 정보
                        </h3>
                        <p className="section-description">
                            담당할 업무와 필요한 자격 요건을 자세히 입력해주세요.
                        </p>
                    </div>

                    <div className="form-fields-container">
                        {jobInfoFields.map((input, index) => (
                            <div key={input.id} className="form-field-item">
                                <InputTag
                                    title={input.title}
                                    type="text"
                                    value={input.value}
                                    onChange={input.onChange}
                                    classMethod=""
                                    id={input.id}
                                    name={input.name}
                                />
                                {index < jobInfoFields.length - 1 && <div className="field-divider" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 혜택 및 지원 정보 섹션 */}
                <div className="form-section">
                    <div className="section-header">
                        <h3 className="section-title">
                            <Gift className="w-5 h-5" />
                            혜택 및 지원 정보
                        </h3>
                        <p className="section-description">
                            우대 사항, 복지 혜택, 지원 방법을 입력해주세요.
                        </p>
                    </div>

                    <div className="form-fields-container">
                        {benefitFields.map((input, index) => (
                            <div key={input.id} className="form-field-item">
                                <InputTag
                                    title={input.title}
                                    type="text"
                                    value={input.value}
                                    onChange={input.onChange}
                                    classMethod=""
                                    id={input.id}
                                    name={input.name}
                                />
                                {index < benefitFields.length - 1 && <div className="field-divider" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 추가 정보 섹션 */}
                <div className="form-section">
                    <div className="section-header">
                        <h3 className="section-title">
                            <BotMessageSquare className="w-5 h-5" />
                            AI에게 전하고 싶은 추가 정보
                        </h3>
                        <p className="section-description">
                            특별히 강조하고 싶은 내용이나 추가 요구사항을 자유롭게 작성해주세요.
                        </p>
                    </div>

                    <div className="textarea-full-container">
                        <textarea
                            value={textAreaValue}
                            onChange={(e) => setTextAreaValue(e.target.value)}
                            className="textarea-field-full"
                            id="details"
                            name="details"
                            cols={30}
                            rows={6}
                            placeholder="예: 스타트업 환경에서 빠른 성장을 원하는 분, 리모트 근무 가능, 주니어도 환영 등..."
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="btn-reset"
                    >
                        <RotateCcw className="w-4 h-4" />
                        초기화
                    </button>
                    <button
                        type="submit"
                        className="btn-submit"
                    >
                        <Send className="w-4 h-4" />
                        AI 공고 생성하기
                    </button>
                </div>
            </form>
        </div>
    )
}