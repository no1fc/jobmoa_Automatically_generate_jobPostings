# 🎯 컴포넌트 사용 필수 가이드라인

## 📋 개요
이 프로젝트는 **Pinterest 테마 기반**의 일관된 디자인 시스템을 유지하기 위해 `src/app/components/ui/` 폴더의 컴포넌트들을 **필수적으로** 사용해야 합니다.

---

## ⚡ 필수 사용 컴포넌트 목록

### 1. UI 기본 컴포넌트
| 컴포넌트       | 파일 경로                                               | 사용 상황       | 금지 사항                    |
|------------|-----------------------------------------------------|-------------|--------------------------|
| `Button`   | `components/ui/ButtonComponentWithVariants.tsx`     | 모든 버튼 요소    | `<button>` 태그 직접 사용 금지   |
| `Input`    | `components/ui/InputComponentWithErrorHandling.tsx` | 모든 입력 필드    | `<input>` 태그 직접 사용 금지    |
| `TextArea` | `components/ui/TextAreaComponent.tsx`               | 모든 텍스트 영역   | `<textarea>` 태그 직접 사용 금지 |
| `Card`     | `components/ui/CardComponentWithVariants.tsx`       | 모든 카드형 레이아웃 | `div`로 카드 스타일 직접 구현 금지   |
| `Badge`    | `components/ui/BadgeComponent.tsx`                  | 상태 표시, 라벨   | 인라인 스타일로 배지 구현 금지        |

### 2. 레이아웃 컴포넌트
| 컴포넌트     | 파일 경로                                    | 사용 상황    | 금지 사항             |
|----------|------------------------------------------|----------|-------------------|
| `Grid`   | `components/ui/GridComponent.tsx`        | 그리드 레이아웃 | CSS Grid 직접 구현 금지 |
| `Navbar` | `components/ui/NavbarWithMobileMenu.tsx` | 모든 네비게이션 | 커스텀 네비게이션 바 구현 금지 |

### 3. 타이포그래피 컴포넌트
| 컴포넌트              | 파일 경로                                    | 사용 상황     | 금지 사항                      |
|-------------------|------------------------------------------|-----------|----------------------------|
| `H1, H2`          | `components/ui/TypographyComponents.tsx` | 모든 제목 요소  | `<h1>`, `<h2>` 태그 직접 사용 금지 |
| `Body, BodyMuted` | `components/ui/TypographyComponents.tsx` | 모든 본문 텍스트 | `<p>` 태그 직접 사용 금지          |

### 4. 네비게이션 컴포넌트
| 컴포넌트   | 파일 경로                                         | 사용 상황    | 금지 사항                   |
|--------|-----------------------------------------------|----------|-------------------------|
| `Link` | `components/ui/LinkComponentWithVariants.tsx` | 모든 링크 요소 | Next.js `Link` 직접 사용 금지 |


## 🚫 절대 금지 사항

### 1. 인라인 스타일링
```tsx
// ❌ 금지 - 인라인 스타일 사용
<div style={{ backgroundColor: '#5472ff', padding: '12px' }}>
  버튼
</div>

// ✅ 올바른 사용
<Button variant="primary">버튼</Button>
```
### 2. 직접 HTML 태그 사용
```tsx
// ❌ 금지 - 직접 HTML 태그 사용
<button className="bg-blue-500 text-white px-4 py-2">
클릭
</button>

// ✅ 올바른 사용
<Button variant="primary">클릭</Button>
```
### 3. 커스텀 컴포넌트 중복 개발
```tsx
// ❌ 금지 - 같은 기능의 커스텀 컴포넌트 개발
const MyCustomButton = ({ children }) => (
  <div className="custom-button-style">{children}</div>
);

// ✅ 올바른 사용 - 기존 컴포넌트 확장
<Button variant="primary" className="additional-custom-class">
버튼
</Button>
```
---

## 📐 컴포넌트 사용 원칙

### 1. Import 규칙
```tsx
// ✅ 올바른 Import 방식
import Button from '@/app/components/ui/Button';
import { H1, Body } from '@/app/components/ui/Typography';
import Card from '@/app/components/ui/Card';
```
### 2. Props 활용 원칙
```tsx
// ✅ variant를 통한 스타일링
<Button variant="primary" size="lg">기본 버튼</Button>
<Button variant="secondary" size="md">보조 버튼</Button>
<Button variant="outline" size="sm">외곽선 버튼</Button>

// ✅ className을 통한 추가 스타일링 (필요시에만)
<Card variant="hover" className="mb-4">
추가적인 마진이 필요한 카드
</Card>
```
### 3. 컴포넌트 조합 원칙
```tsx
// ✅ 올바른 컴포넌트 조합
<Card variant="hover">
<H2>제목</H2>
<Body>내용입니다.</Body>
<Button variant="primary">액션 버튼</Button>
</Card>
```
---

## 🔧 확장 및 커스터마이징 가이드

### 1. 기존 컴포넌트 확장
기존 컴포넌트가 요구사항을 완전히 충족하지 못할 경우:
```tsx
// ✅ 올바른 확장 방식
const CustomButton = ({ children, ...props }) => (
<Button
{...props}
className="custom-additional-style"
>
    {children}
  </Button>
);
```
### 2. 새로운 variant 추가
기존 컴포넌트에 새로운 스타일이 필요한 경우:

1. 해당 컴포넌트 파일을 수정
2. 새로운 variant 추가
3. TypeScript 타입 업데이트
```tsx
// Button.tsx에서 variant 추가 예시
const variantClasses = {
  primary: "bg-[#5472ff] text-white ...",
  secondary: "bg-[#E5E7FF] text-[#5472ff] ...",
  // ✅ 새로운 variant 추가
  danger: "bg-[#FF4757] text-white ..."
};
```
---

## 📝 코드 리뷰 체크리스트

### PR 제출 전 필수 확인 사항

- [ ] 모든 버튼이 `Button` 컴포넌트를 사용하는가?
- [ ] 모든 입력 필드가 `Input` 또는 `TextArea` 컴포넌트를 사용하는가?
- [ ] 모든 제목이 `H1`, `H2` 컴포넌트를 사용하는가?
- [ ] 모든 본문 텍스트가 `Body`, `BodyMuted` 컴포넌트를 사용하는가?
- [ ] 카드형 레이아웃이 모두 `Card` 컴포넌트를 사용하는가?
- [ ] 그리드 레이아웃이 `Grid` 컴포넌트를 사용하는가?
- [ ] 인라인 스타일을 사용하지 않았는가?
- [ ] Pinterest 테마 컬러 (#5472ff 등)를 직접 하드코딩하지 않았는가?

---

## 🎨 Pinterest 테마 준수 사항

### 필수 색상 사용
- **Primary**: #5472ff (브랜드 컬러)
- **Secondary**: #8299ff, #3b5bdb
- **Background**: #F8F9FF, #FFFFFF
- **Text**: #333333, #919191

### 필수 디자인 요소
- **Border Radius**: 16px (기본), 12px (작은 요소)
- **Shadow**: Pinterest 스타일 그림자 효과
- **Hover Effects**: -1px translateY, 적절한 그림자 증가

---

## ⚠️ 위반 시 조치사항

### 1차 위반
- 코드 리뷰에서 수정 요청
- 가이드라인 재숙지 요구

### 2차 위반
- 1:1 멘토링 진행
- 컴포넌트 사용법 재교육

### 3차 위반
- 개발팀 전체 가이드라인 리뷰 미팅
- 프로젝트 일관성 점검

---

## 📚 추가 학습 자료

### 컴포넌트 사용 예시 페이지
- **URL**: `/components`
- **용도**: 모든 컴포넌트의 사용법과 예시 확인

### Pinterest 테마 가이드
- **색상 팔레트**: `/components` 페이지 하단 참고
- **디자인 시스템**: `globals.css`의 CSS 변수 활용

---

## 🚀 효율적인 개발을 위한 팁

### 1. VS Code 스니펫 활용
```json
// .vscode/snippets.json에 추가
{
  "Pinterest Button": {
    "prefix": "pbtn",
    "body": [
      "<Button variant='primary' size='md'>",
      1,
      "</Button>"
    ]
  }
}
```
### 2. 자주 사용하는 패턴
```tsx
// 카드 + 제목 + 내용 + 버튼 패턴
<Card variant="hover">
  <H2>$TITLE</H2>
  <Body>$CONTENT</Body>
  <Button variant="primary">$ACTION</Button>
</Card>
```
### 3. 컴포넌트 Import 최적화
```tsx
// 한 번에 여러 컴포넌트 import
import { Button, Card, Input } from '@/app/components/ui';
```