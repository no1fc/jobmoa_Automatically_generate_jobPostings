/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // 다크 모드 활성화
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '24px',
            screens: {
                '2xl': '1120px',
            },
        },
        extend: {
            colors: {
                border: 'var(--border)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: 'var(--card)',
                'foreground-muted': 'oklch(var(--foreground-muted-l) var(--foreground-muted-c) var(--foreground-muted-h))',
            },
            fontFamily: {
                sans: ['var(--font-sans)'],
                serif: ['var(--font-serif)'],
                mono: ['var(--font-mono)'],
            },
            fontSize: {
                'hero': ['clamp(2rem, 5vw, 2.75rem)', { lineHeight: '1.2', fontWeight: '700' }],
                'h1': ['1.75rem', { lineHeight: '1.6', fontWeight: '700' }],
                'h2': ['1.25rem', { lineHeight: '1.6', fontWeight: '600' }],
                'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
                'caption': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
            },
            borderRadius: {
                lg: 'var(--radius-lg)',
                md: 'var(--radius-md)',
                sm: 'var(--radius-sm)',
                full: 'var(--radius-full)',
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
            },
            spacing: {
                'unit': '8px',
                'section': 'calc(var(--unit) * 12)', // sectionGap
            },
        },
    },
    plugins: [],
};