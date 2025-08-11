import type {NextConfig} from "next";

const repoName = 'jobmoa_Automatically_generate_jobPostings';

const nextConfig: NextConfig = {
  /* config options here */
    /* TODO 변경하면서 사용 */
    // 1. basePath 추가: 저장소 이름을 값으로 설정
    // basePath: `/${repoName}`,

    /* TODO 변경하면서 사용 */
    // 2. output: 'export' 추가: 정적 사이트 빌드를 명시
    // output: 'export',

    images: {
        // 외부 이미지 호스트 허용 설정
        remotePatterns: [
            {
                protocol: 'https',        // HTTPS 프로토콜만 허용
                hostname: 'placehold.co', // 허용할 도메인 (placehold.co)
                port: '',                 // 포트 지정 (빈 문자열은 기본 포트)
                pathname: '/**',          // 모든 경로 패턴 허용 (/** = 모든 하위 경로)
                // search: '',            // URL 쿼리 파라미터 패턴 (주석 처리됨)
            },
        ],
        // 정적 이미지 최적화 비활성화 (import된 이미지도 최적화하지 않음)
        disableStaticImages: false,
        // SVG 이미지 허용
        dangerouslyAllowSVG: true,

    },
};

export default nextConfig;
