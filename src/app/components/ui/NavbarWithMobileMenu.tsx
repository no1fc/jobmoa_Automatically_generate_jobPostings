'use client';

import Link from 'next/link';
import {useState} from 'react';
import {BotMessageSquare, Home, Layers, Menu, Search, User, X} from 'lucide-react';
import Button from './ButtonComponentWithVariants';

interface NavItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

interface NavbarProps {
    brandName?: string,
    navItems?: NavItem[],
    showAuth?: boolean,
    className?: string,
    menuItems?: [{ label: string; href: string }, { label: string; href: string }],
}

const defaultNavItems: NavItem[] = [
    {label: '홈', href: '/', icon: <Home size={18}/>},
    {label: '컴포넌트', href: '/components', icon: <Layers size={18}/>},
    {label: '채용공고 생성', href: '/chatForm', icon: <BotMessageSquare size={18}/>},
];

export default function Navbar({
                                   brandName = 'ChatJobmoa',
                                   navItems = defaultNavItems,
                                   showAuth = true,
                                   className = '',
                               }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E1E1E1] ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="p-2 bg-[#EDF2FF] rounded-xl shadow-sm">
                            <BotMessageSquare className="w-6 h-6 text-[#5472ff]"/>
                        </div>
                        <span className="text-xl font-semibold text-[#333333]">{brandName}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2 text-sm font-medium text-[#333333] hover:text-[#5472ff] transition-colors duration-150"
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Section */}
                    {showAuth && (
                        <div className="hidden md:flex items-center gap-4">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Search size={16}/>
                                검색
                            </Button>
                            <Button variant="secondary" size="sm" className="gap-2">
                                <User size={16}/>
                                로그인
                            </Button>
                            <Button variant="primary" size="sm">
                                시작하기
                            </Button>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-[#333333] hover:text-[#5472ff] transition-colors"
                            aria-label="메뉴 토글"
                        >
                            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-[#E1E1E1] bg-white/95">
                        <div className="space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#333333] hover:text-[#5472ff] hover:bg-[#F8F9FF] rounded-xl transition-all"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}

                            {showAuth && (
                                <>
                                    <div className="border-t border-[#E1E1E1] mt-4 pt-4">
                                        <div className="space-y-3">
                                            <Button variant="outline" className="w-full gap-2" size="sm">
                                                <Search size={16}/>
                                                검색
                                            </Button>
                                            <Button variant="secondary" className="w-full gap-2" size="sm">
                                                <User size={16}/>
                                                로그인
                                            </Button>
                                            <Button variant="primary" className="w-full" size="sm">
                                                시작하기
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
