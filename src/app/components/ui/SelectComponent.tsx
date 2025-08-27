'use client';

import React, {useEffect, useRef, useState} from 'react';
import {Check, ChevronDown, Search} from 'lucide-react';

interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}

interface SelectProps {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    options?: Option[];
    onChange?: (value: string) => void;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    clearable?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline' | 'filled';
    multiple?: boolean;
    loading?: boolean;
    emptyMessage?: string;
}

export default function Select({
                                   id,
                                   label,
                                   placeholder = "선택해주세요",
                                   value,
                                   options = [],
                                   onChange,
                                   error,
                                   disabled = false,
                                   searchable = false,
                                   clearable = false,
                                   className = '',
                                   size = 'md',
                                   variant = 'default',
                                   multiple = false,
                                   loading = false,
                                   emptyMessage = "옵션이 없습니다"
                               }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedValues, setSelectedValues] = useState<string[]>(
        multiple ? (value ? value.split(',') : []) : (value ? [value] : [])
    );

    const selectRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 검색 입력에 포커스
    useEffect(() => {
        if (isOpen && searchable && searchInputRef.current) {
            setTimeout(() => searchInputRef.current?.focus(), 100);
        }
    }, [isOpen, searchable]);

    // 필터링된 옵션들
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 선택된 옵션 처리
    const handleOptionClick = (optionValue: string) => {
        if (multiple) {
            let newSelectedValues: string[];
            if (selectedValues.includes(optionValue)) {
                newSelectedValues = selectedValues.filter(v => v !== optionValue);
            } else {
                newSelectedValues = [...selectedValues, optionValue];
            }
            setSelectedValues(newSelectedValues);
            onChange?.(newSelectedValues.join(','));
        } else {
            setSelectedValues([optionValue]);
            onChange?.(optionValue);
            setIsOpen(false);
        }
        setSearchTerm('');
    };

    // 선택 해제
    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedValues([]);
        onChange?.(multiple ? '' : '');
    };

    // 선택된 옵션의 라벨 가져오기
    const getSelectedLabels = () => {
        return selectedValues
            .map(val => options.find(opt => opt.value === val)?.label)
            .filter(Boolean);
    };

    // 표시될 텍스트
    const getDisplayText = () => {
        const selectedLabels = getSelectedLabels();
        if (selectedLabels.length === 0) return placeholder;
        if (multiple) {
            if (selectedLabels.length === 1) return selectedLabels[0];
            return `${selectedLabels.length}개 선택됨`;
        }
        return selectedLabels[0];
    };

    // 크기별 클래스
    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-sm',
        lg: 'px-4 py-4 text-base'
    };

    // 변형별 클래스
    const variantClasses = {
        default: 'border-2 border-[#E1E1E1] bg-white',
        outline: 'border-2 border-[#E1E1E1] bg-transparent',
        filled: 'border-0 bg-[#F8F9FF]'
    };

    return (
        <div className={`relative w-full ${className}`}>
            {/* 라벨 */}
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-[#333333] mb-2"
                >
                    {label}
                </label>
            )}

            {/* Select 컨테이너 */}
            <div ref={selectRef} className="relative">
                {/* Select 버튼 */}
                <div
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    className={`
            w-full ${sizeClasses[size]} ${variantClasses[variant]}
            rounded-xl cursor-pointer transition-all duration-150 ease-out
            flex items-center justify-between
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#5472ff]'}
            ${isOpen ? 'border-[#5472ff] shadow-[0_0_0_3px_rgba(84,114,255,0.1)]' : ''}
            ${error ? 'border-[#FF4757]' : ''}
          `}
                >
          <span className={`flex-1 truncate ${selectedValues.length === 0 ? 'text-[#919191]' : 'text-[#333333]'}`}>
            {getDisplayText()}
          </span>

                    <div className="flex items-center gap-2">
                        {/* 지우기 버튼 */}
                        {clearable && selectedValues.length > 0 && (
                            <button
                                onClick={handleClear}
                                className="text-[#919191] hover:text-[#FF4757] transition-colors"
                                type="button"
                            >
                                ×
                            </button>
                        )}

                        {/* 로딩 스피너 또는 화살표 */}
                        {loading ? (
                            <div className="w-4 h-4 animate-spin rounded-full border-2 border-[#919191] border-t-transparent" />
                        ) : (
                            <ChevronDown
                                className={`w-4 h-4 text-[#919191] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            />
                        )}
                    </div>
                </div>

                {/* 드롭다운 메뉴 */}
                {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white border border-[#E1E1E1] rounded-xl shadow-lg max-h-60 overflow-hidden">
                        {/* 검색 입력 */}
                        {searchable && (
                            <div className="p-3 border-b border-[#E1E1E1]">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#919191]" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="검색..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 text-sm border border-[#E1E1E1] rounded-lg focus:border-[#5472ff] focus:outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        {/* 옵션 리스트 */}
                        <div className="max-h-48 overflow-y-auto">
                            {filteredOptions.length === 0 ? (
                                <div className="px-4 py-3 text-sm text-[#919191] text-center">
                                    {emptyMessage}
                                </div>
                            ) : (
                                filteredOptions.map((option) => {
                                    const isSelected = selectedValues.includes(option.value);

                                    return (
                                        <div
                                            key={option.value}
                                            onClick={() => !option.disabled && handleOptionClick(option.value)}
                                            className={`
                        px-4 py-3 text-sm cursor-pointer transition-colors duration-150
                        flex items-center justify-between
                        ${option.disabled
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'hover:bg-[#F8F9FF]'
                                            }
                        ${isSelected ? 'bg-[#F8F9FF] text-[#5472ff]' : 'text-[#333333]'}
                      `}
                                        >
                                            <span className="flex-1">{option.label}</span>
                                            {isSelected && <Check className="w-4 h-4" />}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* 에러 메시지 */}
            {error && (
                <p className="mt-1 text-xs text-[#FF4757]">{error}</p>
            )}

            {/* 다중 선택 시 선택된 항목 표시 */}
            {multiple && selectedValues.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {getSelectedLabels().map((label, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#F8F9FF] text-[#5472ff] text-xs rounded-full border border-[#5472ff]/20"
                        >
                            <span>{label}</span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const valueToRemove = selectedValues[index];
                                    handleOptionClick(valueToRemove);
                                }}
                                className="text-[#5472ff] hover:text-[#FF4757] transition-colors"
                                type="button"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// 사전 정의된 옵션 세트들
export const companyTypeOptions: Option[] = [
    { value: 'corporation', label: '주식회사' },
    { value: 'llc', label: '유한회사' },
    { value: 'partnership', label: '합자회사' },
    { value: 'individual', label: '개인사업자' },
    { value: 'public', label: '공공기관' },
    { value: 'nonprofit', label: '비영리단체' },
    { value: 'startup', label: '스타트업' },
    { value: 'sme', label: '중소기업' },
    { value: 'enterprise', label: '대기업' }
];

export const industryOptions: Option[] = [
    { value: 'it', label: 'IT/소프트웨어' },
    { value: 'finance', label: '금융/보험' },
    { value: 'manufacturing', label: '제조업' },
    { value: 'retail', label: '유통/소매' },
    { value: 'healthcare', label: '의료/헬스케어' },
    { value: 'education', label: '교육' },
    { value: 'construction', label: '건설/부동산' },
    { value: 'media', label: '미디어/광고' },
    { value: 'food', label: '식품/요식업' },
    { value: 'automotive', label: '자동차' },
    { value: 'logistics', label: '물류/운송' },
    { value: 'consulting', label: '컨설팅' },
    { value: 'other', label: '기타' }
];

export const companySizeOptions: Option[] = [
    { value: '1-10', label: '1-10명' },
    { value: '11-50', label: '11-50명' },
    { value: '51-100', label: '51-100명' },
    { value: '101-300', label: '101-300명' },
    { value: '301-500', label: '301-500명' },
    { value: '501-1000', label: '501-1,000명' },
    { value: '1000+', label: '1,000명 이상' }
];

export const experienceLevelOptions: Option[] = [
    { value: 'entry', label: '신입' },
    { value: 'junior', label: '1-3년차' },
    { value: 'mid', label: '4-7년차' },
    { value: 'senior', label: '8-12년차' },
    { value: 'lead', label: '13년차 이상' },
    { value: 'any', label: '경력무관' }
];

export const employmentTypeOptions: Option[] = [
    { value: 'full-time', label: '정규직' },
    { value: 'contract', label: '계약직' },
    { value: 'part-time', label: '파트타임' },
    { value: 'intern', label: '인턴' },
    { value: 'freelance', label: '프리랜서' },
    { value: 'temp', label: '임시직' }
];

export const salaryRangeOptions: Option[] = [
    { value: '2000-3000', label: '2,000만원 - 3,000만원' },
    { value: '3000-4000', label: '3,000만원 - 4,000만원' },
    { value: '4000-5000', label: '4,000만원 - 5,000만원' },
    { value: '5000-6000', label: '5,000만원 - 6,000만원' },
    { value: '6000-7000', label: '6,000만원 - 7,000만원' },
    { value: '7000-8000', label: '7,000만원 - 8,000만원' },
    { value: '8000+', label: '8,000만원 이상' },
    { value: 'negotiable', label: '협의' }
];