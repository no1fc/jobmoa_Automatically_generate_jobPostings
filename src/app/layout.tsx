import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata = {
    title: 'AutoJD - AI 채용 공고 생성기',
    description: 'AI 챗봇으로 몇 분 만에 매력적인 채용 공고를 완성하세요.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ko" className={inter.variable}>
        <body>
        {children}
        </body>
        </html>
    );
}