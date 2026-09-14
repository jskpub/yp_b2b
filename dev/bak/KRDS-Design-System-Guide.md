# KRDS 디자인 시스템 가이드

**Version:** 1.1
**Last Updated:** 2026-09-08
**Status:** 운영 버전
**Accessibility Level:** WCAG 2.1 Level AA
**Primary Typeface:** Pretendard GOV

> ⚠️ **참고**: 본 문서는 [KRDS 공식 사이트](https://www.krds.go.kr/)와 [Pretendard GOV 저장소](https://github.com/orioncactus/pretendard/tree/main/packages/pretendard-gov)를 참고해 재구성한 실무용 가이드입니다. 실제 프로젝트에 적용 전 KRDS 공식 사이트의 최신 토큰 값을 다시 한번 대조해주세요.

---

## 📋 목차

1. [개요](#개요)
2. [기본 원칙](#기본-원칙)
3. [타이포그래피](#타이포그래피)
4. [컬러 시스템](#컬러-시스템)
5. [레이아웃 & 반응형](#레이아웃--반응형)
6. [컴포넌트](#컴포넌트)
7. [인터액션 & 애니메이션](#인터액션--애니메이션)
8. [접근성 (Accessibility)](#접근성-accessibility)
9. [웹 표준](#웹-표준)
10. [앱 표준](#앱-표준)
11. [개발자 가이드](#개발자-가이드)
12. [PM 체크리스트](#pm-체크리스트)
13. [리소스 & 도구](#리소스--도구)

---

## 개요

### KRDS란?
**대한민국 정부 디자인 시스템(Korea Republic Design System, KRDS)**은 행정안전부가 주도해 만든 디지털 정부 서비스 공통 디자인 시스템입니다. 부처·기관마다 제각각이던 UI를 통일하고, 노년층·저시력자를 포함한 모든 국민이 불편 없이 이용할 수 있도록 접근성을 최우선 원칙으로 설계되었습니다.

이 문서는 KRDS의 핵심 원칙을 실무(웹·앱 프로덕트)에 적용할 수 있도록 재구성한 가이드입니다.

### 목표
- 디자이너, 개발자, PM 간 명확한 커뮤니케이션
- 노안·저시력자를 포함한 전 국민 접근성 확보
- WCAG 2.1 Level AA 접근성 표준 준수
- 일관되고 효율적인 개발 프로세스

### 대상
- **디자이너:** UI/UX 디자인 기준 및 컴포넌트 규격
- **개발자:** 프론트엔드 구현 가이드 및 코드 예제
- **PM:** 기획 단계의 표준 적용 및 검수 항목

---

## 기본 원칙

### 1. 단순성과 명확성
- 불필요한 시각적 요소 제거
- 계층 구조가 명확한 정보 구성
- 사용자의 의도를 방해하지 않는 디자인

### 2. 포용성 (Inclusive by default)
- 노안·저시력 사용자를 "우선 고려 대상"으로 설계 (본문 기본 크기를 크게 잡는 이유)
- 색상만으로 정보 전달 금지
- 충분한 색상 대비율 확보 (최소 4.5:1)

### 3. 반응형 설계
- 모바일 우선 (Mobile First) 접근
- 모든 디바이스에서 일관된 경험
- 유동적인 레이아웃

### 4. 한글 최적화
- 한글 가독성을 고려한 행간과 자간 (자간은 기본 0, Display만 예외적으로 적용)
- Pretendard GOV로 통일된 한글 웹폰트
- 제목과 본문의 명확한 시각적 구분

---

## 타이포그래피

### 폰트 패밀리 — Pretendard GOV

**Pretendard GOV**는 [Pretendard](https://github.com/orioncactus/pretendard) 프로젝트에서 파생된 대한민국 공공서비스 전용 서체입니다. 오픈소스(OFL-1.1)로 배포되며, 한글·영문·숫자·기호를 하나의 서체로 자연스럽게 조합할 수 있도록 설계되었습니다.

#### 왜 Pretendard GOV인가
- 공공기관 웹/앱에 최적화된 자형 (가독성 중심 설계)
- 시스템 폰트(Apple SD Gothic Neo, Malgun Gothic, Noto Sans 등)와 자연스럽게 대체 가능한 system-ui 대안
- 9단계의 세밀한 웨이트로 정보 위계 표현이 용이
- 무료 상업적 사용 가능 (OFL-1.1 라이선스)

#### 웨이트(Font-weight) 전체 목록

| 웨이트명 | font-weight 값 | 주요 사용처 |
|---------|----------------|------------|
| Thin | 100 | 거의 사용하지 않음 (초대형 디스플레이 텍스트 한정) |
| ExtraLight | 200 | 장식적 텍스트, 특수 용도 |
| Light | 300 | 서브텍스트, 부가 설명 |
| Regular | 400 | 본문 기본 (가장 많이 사용) |
| Medium | 500 | 라벨, 강조가 필요한 본문 |
| SemiBold | 600 | 소제목, 버튼 텍스트, 강조 본문 |
| Bold | 700 | 제목(H1~H3), 강한 강조 |
| ExtraBold | 800 | 대형 헤드라인, 임팩트 강조 |
| Black | 900 | 특수 프로모션 문구 (본문/UI에는 미사용 권장) |

> 💡 **실무 팁**: UI 컴포넌트(버튼, 배지, 폼)에는 400 / 500 / 600 / 700 네 가지 웨이트만 사용해도 충분합니다. 웨이트 종류가 많을수록 폰트 로딩 비용이 커지므로, 서비스 성격에 맞게 서브셋을 구성하세요.

#### CSS 적용 방법

**방법 1) CDN (cdnjs) — Variable Font 권장**
```html
<link rel="stylesheet" as="style" crossorigin
  href="https://cdnjs.cloudflare.com/ajax/libs/pretendard-gov/1.3.9/variable/pretendardvariable-gov.min.css" />
```

```css
body {
    font-family: 'PretendardGOVVariable', 'Pretendard GOV', -apple-system,
        BlinkMacSystemFont, system-ui, Roboto, 'Malgun Gothic', sans-serif;
}
```

**방법 2) npm 설치**
```bash
npm install pretendard-gov --save
```

```css
@import 'pretendard-gov/dist/web/variable/pretendardvariable-gov.css';

body {
    font-family: 'PretendardGOVVariable', sans-serif;
}
```

**방법 3) 웨이트별 정적 파일 (Variable Font 미지원 환경)**
```css
@font-face {
    font-family: 'Pretendard GOV';
    font-weight: 400;
    font-display: swap;
    src: url('https://cdnjs.cloudflare.com/ajax/libs/pretendard-gov/1.3.9/static/woff2-subset/PretendardGOV-Regular.subset.woff2') format('woff2');
}
@font-face {
    font-family: 'Pretendard GOV';
    font-weight: 700;
    font-display: swap;
    src: url('https://cdnjs.cloudflare.com/ajax/libs/pretendard-gov/1.3.9/static/woff2-subset/PretendardGOV-Bold.subset.woff2') format('woff2');
}
```

#### 폴백(fallback) 스택
```css
--font-family-base:
    'Pretendard GOV', 'PretendardGOVVariable',
    -apple-system, BlinkMacSystemFont,
    'Apple SD Gothic Neo', 'Malgun Gothic',
    system-ui, Roboto, sans-serif;
```

> ⚠️ 영문/숫자 전용 별도 폰트를 지정하지 않습니다. Pretendard GOV는 라틴 문자도 함께 포함하고 있어, 한/영 혼용 시에도 굵기·크기가 어긋나지 않습니다.

---

### 폰트 크기 스케일

KRDS는 노안·저시력 사용자를 우선 고려해 **본문 기본 크기를 17px**로 크게 잡는 것이 특징입니다. 일반 서비스보다 한 단계 큰 스케일임을 유의하세요.

| 레벨 | 크기 (px/rem, base 16px) | 웨이트 | 행간(line-height) | 자간 | 사용처 |
|------|--------------------------|--------|-------------------|------|--------|
| Display | 40px / 2.5rem | 700 (Bold) | 1.3 (52px) | 1px | 랜딩/히어로 대형 타이틀 |
| Heading 1 | 32px / 2rem | 700 (Bold) | 1.35 (43px) | 0 | 페이지 타이틀 |
| Heading 2 | 26px / 1.625rem | 700 (Bold) | 1.4 (36px) | 0 | 섹션 제목 |
| Heading 3 | 22px / 1.375rem | 600 (SemiBold) | 1.4 (31px) | 0 | 소섹션 제목 |
| Heading 4 | 19px / 1.1875rem | 600 (SemiBold) | 1.45 (28px) | 0 | 카드/블록 제목 |
| Body Large | 17px / 1.0625rem | 400 (Regular) | 1.5 (26px) | 0 | **본문 기본** |
| Body Medium | 15px / 0.9375rem | 400 (Regular) | 1.5 (23px) | 0 | 일반 텍스트, UI 라벨 |
| Body Small | 13px / 0.8125rem | 400 (Regular) | 1.5 (20px) | 0 | 부가 정보, 헬퍼 텍스트 |
| Caption | 12px / 0.75rem | 400 (Regular) | 1.4 (17px) | 0 | 최소 크기 — 저작권, 각주 |

> 🚫 **12px 미만 사용 금지**: WCAG 및 KRDS 접근성 원칙상 12px 미만의 텍스트는 어떤 용도로도 사용하지 않습니다.

#### CSS 토큰 예시
```css
:root {
    /* Font size */
    --font-size-display: 2.5rem;    /* 40px */
    --font-size-h1: 2rem;           /* 32px */
    --font-size-h2: 1.625rem;       /* 26px */
    --font-size-h3: 1.375rem;       /* 22px */
    --font-size-h4: 1.1875rem;      /* 19px */
    --font-size-body-lg: 1.0625rem; /* 17px — 기본 본문 */
    --font-size-body-md: 0.9375rem; /* 15px */
    --font-size-body-sm: 0.8125rem; /* 13px */
    --font-size-caption: 0.75rem;   /* 12px */

    /* Line height */
    --line-height-display: 1.3;
    --line-height-heading: 1.4;
    --line-height-body: 1.5;
    --line-height-caption: 1.4;

    /* Letter spacing */
    --letter-spacing-display: 0.0625rem; /* 1px, Display 전용 */
    --letter-spacing-default: 0;
}
```

### 행간(Line-height) 상세 규칙

한글은 라틴 문자보다 자형이 조밀하고 획이 많아, 서구권 타이포그래피 기준(1.2~1.3)보다 넉넉한 행간이 필요합니다.

| 텍스트 유형 | 권장 행간 | 근거 |
|------------|----------|------|
| 대형 제목 (26px 이상) | 1.3–1.4 | 큰 글자는 상대적으로 좁은 행간도 가독 가능 |
| 중소형 제목 (19px–22px) | 1.4–1.45 | 균형점 |
| 본문 (13px–17px) | **1.5 이상** | 장문 읽기 가독성의 핵심 — KRDS 최소 기준 |
| 캡션/각주 (12px) | 1.4 | 짧은 텍스트라 상대적으로 여유 확보 |

```
❌ 잘못된 예: 본문 17px에 line-height 1.2 (21px) → 줄 간 붙어서 가독성 저하
✅ 올바른 예: 본문 17px에 line-height 1.5 (26px) → 충분한 여백으로 편안하게 읽힘
```

### 자간(Letter-spacing) 상세 규칙

Pretendard GOV는 기본 자형 자체가 한글에 최적화되어 있어, **원칙적으로 자간을 건드리지 않습니다.**

| 상황 | Letter Spacing | 비고 |
|------|----------------|------|
| 본문, 제목 전체 (기본) | **0** | 한글은 자간 조정이 오히려 가독성을 해침 |
| Display 초대형 타이틀만 | 1px (0.0625rem) | 큰 글자의 시각적 여백 보정 목적 |
| 버튼/라벨 대문자 영문 표기 시 | 0.5px | 영문 대문자 전용, 매우 제한적으로만 사용 |

```css
/* ❌ 지양 */
.body-text { letter-spacing: -0.5px; } /* 한글 자간을 좁히면 글자가 뭉개져 보임 */

/* ✅ 권장 */
.body-text { letter-spacing: 0; }
.display-text { letter-spacing: 0.0625rem; } /* Display 레벨에서만 */
```

---

## 컬러 시스템

KRDS는 "순백 배경 위에 거의 검정에 가까운 본문 텍스트, 신뢰감을 주는 정부 블루"를 기본 축으로 하는 절제된 팔레트를 사용합니다.

### 핵심 컬러 토큰

```
Primary (정부 블루)  : #256EF4  — 주요 액션, 링크, 강조
Foreground (본문)    : #1E2124  — 기본 텍스트 (거의 검정)
Canvas (배경)        : #FFFFFF  — 기본 배경
```

### 시맨틱 컬러

```
Success (성공)  : #228738
Warning (경고)  : #FFBB11
Danger (위험)   : #DE3412
Info (정보)     : #0B78CB
```

### 보조 컬러

```
Border Strong (강한 보더)  : #58616A
Muted (뮤티드 텍스트)      : #6D7882
Hairline (얇은 구분선)     : #B1B8BE
```

### 확장 팔레트 (프로덕트 적용용)

공식 KRDS 토큰을 기준으로 프로덕트에서 활용하기 쉽도록 톤 단계를 확장했습니다.

#### Primary (Blue) 스케일
```
Primary 50   : #EAF1FE (배경, 약한 강조)
Primary 100  : #C7DBFC
Primary 200  : #9FC3FA
Primary 300  : #6FA4F7
Primary 400  : #3E85F5
Primary 500  : #256EF4 ⭐ 기본 Primary (공식 정부 블루)
Primary 600  : #1857C9
Primary 700  : #12409E
```

#### Neutral 스케일
```
Neutral 0    : #FFFFFF (Canvas, 기본 배경)
Neutral 50   : #F7F8F9
Neutral 100  : #EEF0F2 (약한 배경)
Neutral 200  : #E2E5E8
Neutral 300  : #B1B8BE (Hairline)
Neutral 400  : #6D7882 (Muted)
Neutral 500  : #58616A (Border Strong)
Neutral 800  : #33383D
Neutral 900  : #1E2124 (Foreground, 기본 텍스트)
```

### 색상 대비율 (Contrast Ratio)

**WCAG 2.1 Level AA 준수:**

| 대상 | 최소 대비율 | 예시 |
|------|-----------|------|
| 일반 텍스트 (17px, 400) | 4.5:1 이상 | Foreground(#1E2124) on Canvas(#FFFFFF) → 약 16:1 ✓ |
| 큰 텍스트 (19px 이상 Bold, 또는 24px 이상) | 3:1 이상 | Primary 500 on Neutral 50 |
| UI 컴포넌트 경계선 | 3:1 이상 | 버튼 보더, 폼 필드 보더 |

> ✅ **검증 방법**: 새 색상 조합을 추가할 때는 반드시 [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) 등으로 대비율을 계산하고 통과 여부를 기록하세요.

### 다크 모드 팔레트 (선택 적용)

```
배경           : Neutral 900 (#1E2124)
서페이스       : Neutral 800 (#33383D)
기본 텍스트    : Neutral 0 (#FFFFFF)
보조 텍스트    : Neutral 300 (#B1B8BE)
Primary (다크) : Primary 300 (#6FA4F7) — 어두운 배경에서 대비 확보용으로 밝게 조정
```

---

## 레이아웃 & 반응형

### 그리드 시스템

12-컬럼 그리드 기반 (Flexible Grid):

```
데스크톱 (1440px)  : 12 columns × 88px + 11 gutters × 24px, margin 40px
태블릿 (768px)     : 8 columns  × 78px + 7 gutters × 16px, margin 24px
모바일 (375px)     : 4 columns  × 79.5px + 3 gutters × 16px, margin 16px
```

### 브레이크포인트

| 디바이스 | 너비 | 주요 특징 |
|---------|------|----------|
| 모바일 | 320px–767px | 스택 레이아웃, 풀 너비 컴포넌트 |
| 태블릿 | 768px–1023px | 2–3 컬럼 레이아웃 |
| 데스크톱 | 1024px+ | 풀 12-컬럼 레이아웃 |

```css
/* 권장 CSS 미디어 쿼리 (모바일 우선) */
/* 기본: 모바일 */
@media (min-width: 768px)  { /* 태블릿 */ }
@media (min-width: 1024px) { /* 데스크톱 */ }
```

### 간격 (Spacing)

8px(=0.5rem) 기반 스케일:

```
xs   : 4px   (0.25rem) — 매우 좁은 간격, 아이콘-텍스트 사이
sm   : 8px   (0.5rem)  — 좁은 간격, 요소 내부
md   : 16px  (1rem)    — 기본 간격
lg   : 24px  (1.5rem)  — 넓은 간격, 컴포넌트 사이
xl   : 32px  (2rem)    — 매우 넓은 간격, 섹션 내부
2xl  : 48px  (3rem)    — 섹션 간격
3xl  : 64px  (4rem)    — 큰 구분, 페이지 블록 사이
```

### 마진 및 패딩 규칙

| 영역 | 패딩 |
|------|------|
| 모바일 콘텐츠 영역 | 16px 수평 |
| 태블릿 콘텐츠 영역 | 24px 수평 |
| 데스크톱 콘텐츠 영역 | 40px 수평 |
| 카드, 박스 | 16px–24px |
| 버튼 (수평) | 16px–24px |
| 버튼 (수직) | 10px–14px |

---

## 컴포넌트

### 버튼 (Button)

#### 타입별 스타일

| 타입 | 배경 | 텍스트 | 보더 | 용도 |
|------|------|--------|------|------|
| Primary (Filled) | Primary 500 | White | 없음 | 주요 액션 |
| Secondary | Neutral 50 | Neutral 900 | Neutral 300 | 보조 액션 |
| Tertiary | Transparent | Primary 500 | 없음 | 텍스트 버튼, 보조 |
| Danger | Danger (#DE3412) | White | 없음 | 삭제, 위험한 액션 |
| Disabled | Neutral 100 | Neutral 400 | 없음 | 비활성화 상태 |

#### 크기

```
Small   : 36px height | 15px / 500 text | 모바일 보조 액션
Default : 44px height | 15px / 600 text | 기본 사용 (최소 탭 영역 44px 충족)
Large   : 52px height | 17px / 600 text | 주요 액션, CTA
```

#### 상태
```
Default → Hover → Active → Focus → Disabled
```

### 입력 필드 (Input Field)

#### 구성 요소

```
Label (필수 표시 * 포함)
↓
Input Box [placeholder text]
↓
Helper Text / Error Message
```

#### 상태별 스타일

| 상태 | 보더 색 | 배경 | 아이콘 |
|------|--------|------|--------|
| Default | Neutral 300 | White | - |
| Focus | Primary 500 (2px) | White | Primary 500 포커스 링 |
| Filled | Neutral 300 | White | - |
| Error | Danger | #FDEDEA | Error 아이콘 |
| Disabled | Neutral 200 | Neutral 50 | Neutral 400 텍스트 |

#### 패딩 및 보더
```
Height: 44px 이상 (최소 탭 영역 확보)
Padding: 12px 수평
Border: 1px solid (Focus 시 2px)
Border Radius: 6px
Font: Body Medium (15px / 400)
```

### 네비게이션

#### 탑 네비게이션
```
[Logo] [Nav Items] [User Menu]
```
- 데스크톱: 고정 높이 64px, 로고 + 메뉴 + 우측 아이콘
- 모바일: 56px, 햄버거 메뉴 포함

#### 탭 네비게이션
```
| Tab 1 | Tab 2 | Tab 3 |
━━━━━━━━━━━━━━━━━
```
- 활성 탭: Primary 500 하단 보더(3px) + SemiBold
- 비활성 탭: Neutral 500(Muted) 텍스트 + Regular
- Padding: 16px 수평, 12px 수직

#### 사이드 네비게이션 (데스크톱)
```
[Logo]
[Nav Item 1] ← Active (배경: Primary 50)
[Nav Item 2]
[Nav Item 3]
```
- 너비: 260px
- 각 아이템: 16px 좌측 padding, 12px 수직 padding, 최소 높이 44px

### 카드 (Card)

#### 구성
```
┌─────────────────────┐
│ [Header/Image]      │
├─────────────────────┤
│ Title (H4)           │
│ Description (Body)  │
├─────────────────────┤
│ [Action Buttons]    │
└─────────────────────┘
```

#### 스타일
- 보더: 1px Neutral 200 (Hairline)
- 배경: White
- 패딩: 20px–24px
- 보더 반지름: 8px
- 그림자: `box-shadow: 0 1px 3px rgba(30,33,36,0.08)`

### 모달 (Modal)

#### 구조
```
[배경 오버레이 (rgba(30,33,36,0.5))]
    ┌──────────────────┐
    │ [Header + Close] │
    ├──────────────────┤
    │ [Content]        │
    ├──────────────────┤
    │ [Actions]        │
    └──────────────────┘
```

#### 규격
- 너비: 90vw (최대 560px)
- 그림자: `0 8px 24px rgba(30,33,36,0.2)`
- 보더 반지름: 12px
- 포커스 트랩: 모달 오픈 시 첫 포커스 가능 요소로 자동 이동, 닫히면 트리거 버튼으로 복귀

---

## 인터액션 & 애니메이션

### 애니메이션 값

#### 기본 타이밍
```
빠른 동작 (ui)    : 150ms–200ms (버튼 클릭, 토글)
일반 동작         : 250ms–300ms (페이드, 슬라이드)
느린 동작         : 400ms+ (페이지 전환, 큰 변화)
```

#### Easing 함수
```
ease-in-out    : cubic-bezier(0.4, 0, 0.2, 1) [기본]
ease-out       : cubic-bezier(0, 0, 0.2, 1) [엔트리]
ease-in        : cubic-bezier(0.4, 0, 1, 1) [엑시트]
```

### 호버 상태

| 컴포넌트 | 호버 효과 | 적용 |
|---------|---------|------|
| 버튼 | 배경색 한 단계 어둡게 (예: Primary 500 → 600) | 모든 버튼 |
| 링크 | 언더라인 추가 | 텍스트 링크 |
| 카드 | 약한 그림자 추가 | 클릭 가능한 카드 |
| 아이콘 버튼 | 배경 원형 하이라이트 (Neutral 100) | 44px 원형 배경 |

### 포커스 상태 (Keyboard Navigation)

```css
/* 모든 포커스 가능 요소에 필수 */
:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
}
```

> ⚠️ `outline: none`으로 포커스 표시를 제거하는 것은 KRDS 접근성 원칙 위반입니다. 커스텀 포커스 스타일을 적용하더라도 시각적으로 명확히 구분되어야 합니다.

### `prefers-reduced-motion` 대응

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 접근성 (Accessibility)

### WCAG 2.1 Level AA 준수 항목

#### 1. 색상 (Color)
- ✅ 색상만으로 정보 전달 금지 (아이콘, 텍스트로 강화)
- ✅ 최소 4.5:1 대비율 (일반 텍스트)
- ✅ 최소 3:1 대비율 (큰 텍스트, UI 컴포넌트)
- ✅ 색약 사용자를 고려한 팔레트 검증 (예: Sim Daltonism 등으로 시뮬레이션)

#### 2. 텍스트 (Text)
```
❌ 폰트 크기 12px 미만 금지 (어떤 용도로도 사용 안 함)
❌ 좁은 행간 (본문 1.5 미만)
❌ 한글 본문에 자간(음수) 적용 금지
❌ 모두 대문자 텍스트 (제목 제외, 브랜드 로고 등 예외)
✅ 권장: 본문 최소 17px, 행간 1.5 이상 (KRDS 기준 — 노안 사용자 우선 고려)
✅ 권장: 최대 66~80자/줄 (가독성)
✅ 사용자 브라우저 확대(200%) 시에도 콘텐츠 손실 없이 리플로우
```

#### 3. 키보드 네비게이션
```
✅ 모든 상호작용 요소 탭 순서 정의
✅ 포커스 표시 명확 (outline 2px 이상, 대비율 3:1 이상)
✅ 탭 순서: 좌→우, 상→하 (직관적, DOM 순서와 시각 순서 일치)
✅ Esc 키로 모달/드롭다운 닫기
✅ 스킵 링크 제공 ("본문 바로가기")
```

#### 4. 시맨틱 HTML
```html
<!-- ✅ 올바른 사용 -->
<a href="#main-content" class="skip-link">본문 바로가기</a>

<button>클릭하기</button>
<nav aria-label="메인 네비게이션">
  <ul>
    <li><a href="#">메뉴</a></li>
  </ul>
</nav>
<form>
  <label for="email">이메일 <span aria-hidden="true">*</span></label>
  <input id="email" type="email" required aria-required="true" />
</form>

<!-- ❌ 피해야 할 패턴 -->
<div onclick="...">클릭하기</div>
<a onclick="...">클릭</a>
<input placeholder="이메일" /> <!-- label 없음 -->
```

#### 5. ARIA 사용

| 속성 | 용도 | 예시 |
|------|------|------|
| `aria-label` | 요소 설명 | `<button aria-label="메뉴 닫기">×</button>` |
| `aria-describedby` | 상세 설명 | `<input aria-describedby="hint-1" />` |
| `aria-live` | 동적 업데이트 | `<div aria-live="polite">로딩 중...</div>` |
| `aria-hidden` | 스크린 리더에서 숨김 | `<span aria-hidden="true">→</span>` |
| `aria-invalid` | 유효성 오류 표시 | `<input aria-invalid="true" />` |
| `role` | 역할 명시 | `<div role="alert">오류 메시지</div>` |

#### 6. 이미지 & 아이콘
```html
<!-- ✅ 올바른 alt text -->
<img src="logo.svg" alt="회사명 로고" />

<!-- ❌ 피해야 할 alt text -->
<img src="logo.svg" alt="이미지" />
<img src="icon.svg" alt="" /> <!-- 중요한 정보인데 alt 없음 -->

<!-- 아이콘만 있는 버튼 -->
<button aria-label="검색하기">
  <svg aria-hidden="true"><!-- 검색 아이콘 --></svg>
</button>
```

#### 7. 폼 접근성
```
✅ 모든 입력 필드에 <label> 연결 (for/id 매칭)
✅ 필수 항목 시각적 + 프로그래밍적 표시 (aria-required)
✅ 오류 메시지는 필드와 aria-describedby로 연결
✅ 오류 발생 시 포커스를 첫 오류 필드로 자동 이동
```

#### 8. 스크린 리더 테스트
```
권장 테스트 조합:
• NVDA (Windows) + Chrome/Firefox — 무료, 가장 널리 사용
• 음성 안내 (Windows 내장) — 보조 확인용
• VoiceOver (macOS) + Safari
• 모바일: TalkBack (Android) / VoiceOver (iOS)
```

---

## 웹 표준

### HTML 기본

#### 문서 구조
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="페이지 설명">
    <title>페이지 제목</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <a href="#main-content" class="skip-link">본문 바로가기</a>

    <header role="banner">
        <nav aria-label="메인 네비게이션">
            <!-- 네비게이션 -->
        </nav>
    </header>

    <main id="main-content">
        <h1>페이지 제목</h1>
        <!-- 콘텐츠 -->
    </main>

    <footer role="contentinfo">
        <!-- 푸터 -->
    </footer>
</body>
</html>
```

### CSS 베스트 프랙티스

#### 변수 (CSS Custom Properties)
```css
:root {
    /* 색상 */
    --color-primary-500: #256EF4;
    --color-foreground: #1E2124;
    --color-canvas: #FFFFFF;

    /* 타이포그래피 */
    --font-family-base: 'Pretendard GOV', 'PretendardGOVVariable',
        -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    --font-size-body-lg: 1.0625rem; /* 17px */
    --line-height-body: 1.5;
    --letter-spacing-default: 0;

    /* 간격 */
    --spacing-xs: 0.25rem; /* 4px */
    --spacing-md: 1rem;    /* 16px */

    /* 전환 */
    --transition-fast: 150ms ease-out;
}

body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-body-lg);
    line-height: var(--line-height-body);
    letter-spacing: var(--letter-spacing-default);
    color: var(--color-foreground);
    background: var(--color-canvas);
}
```

#### 반응형 예제
```css
/* 모바일 우선 */
.container {
    width: 100%;
    padding: 16px;
}

@media (min-width: 768px) {
    .container {
        width: 90%;
        padding: 24px;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
    }
}
```

### 성능 고려사항

```
✅ 웹폰트 최적화
   - Pretendard GOV Variable Font 활용 (웨이트별 개별 파일보다 총 용량 절감)
   - WOFF2 포맷 사용, Dynamic Subset 옵션 적극 활용 (필요한 글자만 로드)
   - font-display: swap 필수 적용
   - 필요한 웨이트만 로드 (일반적으로 400 / 600 / 700)

✅ 이미지 최적화
   - WebP/AVIF 포맷 + fallback
   - 반응형 이미지 (srcset)
   - lazy loading 적용

✅ 번들 크기
   - CSS: 80KB 이하 권장
   - JS: 200KB 이하 권장 (gzipped)
```

---

## 앱 표준

### iOS 가이드

#### 레이아웃
```
상태바: 20px (투명) or 44px (opaque)
네비게이션바: 44px (iPhone), 50px (iPad)
탭바: 49px (bottom safe area 포함)
안전 영역: 모든 콘텐츠는 safe area 내에 배치
```

#### 인터액션 & 타이포그래피
```
탭 영역: 최소 44×44pt
버튼 간 간격: 최소 8pt
본문 폰트: Pretendard GOV Regular 17pt (Dynamic Type 대응)
```

### Android 가이드

#### 레이아웃
```
상태바: 24dp (light) or 25dp (dark)
앱바: 56dp (기본)
플로팅 액션 버튼 (FAB): 56dp 원형
```

#### 인터액션 & 타이포그래피
```
탭 영역: 최소 48×48dp
머테리얼 리플: 선택적 (KRDS에서는 subtle 권장)
본문 폰트: Pretendard GOV Regular 17sp (기기 폰트 크기 설정 대응)
```

### 플랫폼 간 일관성

| 요소 | iOS | Android | 웹 |
|------|-----|---------|-----|
| 네비게이션 | 상단 + 하단 탭 | 상단 앱바 | 상단 또는 좌측 |
| 버튼 높이 | 44pt | 48dp | 44px |
| 최소 탭 영역 | 44×44pt | 48×48dp | 44×44px |
| 본문 폰트 크기 | 17pt | 17sp | 17px |
| 폰트 | Pretendard GOV | Pretendard GOV | Pretendard GOV |

> 📱 **접근성 참고**: iOS Dynamic Type, Android 폰트 크기 설정처럼 사용자가 시스템에서 글자 크기를 키운 경우 앱/웹 모두 레이아웃이 깨지지 않고 유동적으로 대응해야 합니다(rem/sp 단위 사용 권장, px/dp 고정 금지).

---

## 개발자 가이드

### 프론트엔드 구현

#### CSS 아키텍처

권장 구조: **SMACSS (Scalable and Modular Architecture for CSS)**

```
styles/
├── base/
│   ├── variables.css (--color-, --spacing-, --font- 등)
│   ├── reset.css (normalize)
│   ├── fonts.css (Pretendard GOV @font-face / CDN import)
│   └── typography.css
├── layout/
│   ├── header.css
│   ├── footer.css
│   ├── grid.css
│   └── responsive.css
├── components/
│   ├── button.css
│   ├── input.css
│   ├── card.css
│   ├── modal.css
│   └── navigation.css
├── utilities/
│   └── helpers.css (margin, padding 등)
└── main.css (import all)
```

#### 예제: Button 컴포넌트
```html
<!-- HTML -->
<button class="btn btn--primary btn--lg" aria-label="제출하기">
    제출하기
</button>

<button class="btn btn--secondary" disabled>
    비활성화
</button>
```

```css
/* CSS */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-base);
    font-size: 0.9375rem; /* 15px */
    font-weight: 600; /* SemiBold */
    line-height: 1.5;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 150ms ease-out;

    /* 접근성 */
    &:focus-visible {
        outline: 2px solid var(--color-primary-500);
        outline-offset: 2px;
    }
}

.btn--primary {
    background-color: var(--color-primary-500);
    color: white;

    &:hover:not(:disabled) {
        background-color: #1857C9; /* Primary 600 */
    }

    &:disabled {
        background-color: #EEF0F2; /* Neutral 100 */
        color: #6D7882; /* Neutral 400/Muted */
        cursor: not-allowed;
    }
}

.btn--lg {
    height: 52px;
    padding: 0 24px;
    font-size: 1.0625rem; /* 17px */
}
```

### JavaScript 가이드

#### 상호작용 요소
```javascript
// ✅ 올바른 이벤트 핸들링
document.querySelector('.btn').addEventListener('click', (e) => {
    // 처리 로직
});

// ✅ 키보드 이벤트 (Enter, Space, Esc)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === 'Enter') {
        submitForm();
    }
});

// ❌ 피해야 할 패턴
div.onclick = function() { }; // onclick 속성 사용 금지
```

#### 동적 콘텐츠 (ARIA Live)
```javascript
const notification = document.querySelector('[aria-live="polite"]');

function showNotification(message) {
    notification.textContent = message;
    notification.setAttribute('role', 'status');
}
```

### 테스트 체크리스트

```
□ 자동 테스트
  ✓ axe DevTools 접근성 감사
  ✓ WAVE 웹 접근성 평가
  ✓ Lighthouse 점수 90+ (성능, 접근성, SEO)

□ 수동 테스트
  ✓ 키보드 네비게이션 (Tab, Shift+Tab, Enter, Esc)
  ✓ 스크린 리더 (NVDA, VoiceOver)
  ✓ 반응형 (320px, 768px, 1024px, 1440px)
  ✓ 색상 대비 (Chrome DevTools / WebAIM Contrast Checker)
  ✓ 브라우저 200% 확대 시 레이아웃 확인
  ✓ 다크 모드 (배경색 전환 테스트, 적용 시)

□ 성능 테스트
  ✓ 페이지 로드 시간 < 3초
  ✓ First Contentful Paint (FCP) < 1.8초
  ✓ Largest Contentful Paint (LCP) < 2.5초
  ✓ 웹폰트 로딩으로 인한 CLS(레이아웃 밀림) < 0.1
```

---

## PM 체크리스트

### 기획 단계

- [ ] **디자인 시스템 준수 확인**
  - [ ] 타이포그래피 규격 적용 (Pretendard GOV, 본문 17px 기준)
  - [ ] 컬러 팔레트 사용
  - [ ] 간격(spacing) 스케일 적용
  - [ ] 컴포넌트 재사용 가능성

- [ ] **접근성 계획**
  - [ ] WCAG 2.1 Level AA 목표 설정
  - [ ] 키보드 네비게이션 플로우 정의
  - [ ] 이미지/아이콘 alt text 계획
  - [ ] 색상만으로 정보 전달 금지
  - [ ] 노안·저시력 사용자 시나리오 포함

- [ ] **반응형 전략**
  - [ ] 모바일 우선 설계
  - [ ] 주요 브레이크포인트 (320px, 768px, 1024px) 정의
  - [ ] 각 화면별 레이아웃 검증

### 디자인 검수

- [ ] **시각적 일관성**
  - [ ] 모든 텍스트가 정의된 타이포그래피 규격 사용 (12px 미만 없음)
  - [ ] 행간이 본문 기준 1.5 이상
  - [ ] 자간이 한글 본문에 임의로 적용되지 않음
  - [ ] 색상이 승인된 팔레트에서만 선택
  - [ ] 간격이 8px 기반 스케일 준수
  - [ ] 컴포넌트 상태 (default, hover, active, focus, disabled) 모두 정의

- [ ] **접근성 검토**
  - [ ] 색상 대비율 4.5:1 이상 (일반 텍스트)
  - [ ] 버튼/입력 필드 최소 크기 44×44px 이상
  - [ ] 포커스 표시 명확
  - [ ] 색상만으로 정보 전달 안 함

### 개발 단계

- [ ] **구현 검증**
  - [ ] 픽셀 완벽도 검증 (allowance ±2px)
  - [ ] 애니메이션 타이밍 확인 (150ms, 300ms 등)
  - [ ] 반응형 동작 테스트
  - [ ] Pretendard GOV 폰트 정상 로드 확인 (fallback 미노출)

- [ ] **접근성 검사**
  - [ ] Lighthouse 90+ 점수
  - [ ] 자동 접근성 감사 (axe, WAVE) 통과
  - [ ] 키보드 네비게이션 전체 경로 테스트
  - [ ] 스크린 리더 호환성 테스트

- [ ] **성능 확인**
  - [ ] 페이지 로드 시간 < 3초
  - [ ] 웹폰트 로딩 최적화 (subset, font-display: swap)
  - [ ] 이미지 최적화 (WebP, lazy loading)
  - [ ] 번들 크기 최적화

### 출시 전 최종 체크

- [ ] SEO 메타 태그 (title, description, og:image)
- [ ] 모든 링크 정상 작동
- [ ] 폼 제출 로직 테스트
- [ ] 에러 메시지 명확
- [ ] 로딩 상태 표시
- [ ] 오프라인 상태 처리

---

## 리소스 & 도구

### 디자인 도구

| 도구 | 용도 | 링크 |
|------|------|------|
| Figma | UI 디자인, 프로토타입 | figma.com |
| Adobe XD | 대안 디자인 도구 | adobe.com/xd |

### 개발 도구

| 도구 | 용도 |
|------|------|
| Chrome DevTools | 반응형, 성능, 접근성 검사 |
| axe DevTools | 자동 접근성 감사 |
| Lighthouse | 성능, 접근성, SEO 평가 |
| WAVE | 웹 접근성 평가 |
| NVDA | 스크린 리더 (Windows, 무료) |
| WebAIM Contrast Checker | 색상 대비 검사 |

### 리소스

- **KRDS 공식 사이트:** [krds.go.kr](https://www.krds.go.kr/)
- **KRDS 디자인 스타일 가이드:** [krds.go.kr/html/site/style/style_01.html](https://www.krds.go.kr/html/site/style/style_01.html)
- **Pretendard GOV 저장소:** [github.com/orioncactus/pretendard/tree/main/packages/pretendard-gov](https://github.com/orioncactus/pretendard/tree/main/packages/pretendard-gov)
- **Pretendard GOV npm:** [npmjs.com/package/pretendard-gov](https://www.npmjs.com/package/pretendard-gov)
- **Pretendard GOV CDN (cdnjs):** [cdnjs.com/libraries/pretendard-gov](https://cdnjs.com/libraries/pretendard-gov)
- **접근성:** [WCAG 2.1 가이드](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 버전 관리

| 버전 | 날짜 | 변경 사항 |
|------|------|---------|
| 1.0 | 2026-09-08 | 초판 발행 |
| 1.1 | 2026-09-08 | 폰트를 Pretendard GOV로 변경, KRDS 공식 컬러/타이포 토큰 반영, 행간·자간 규칙 세분화 |

### 업데이트 주기
- 분기별 리뷰 및 피드백 수집
- 상반기, 하반기 메이저 버전 업데이트
- 긴급 이슈 시 패치 버전 즉시 배포

---

## 문의 및 피드백

**디자인 시스템 담당:** [팀/개인 정보]
**이메일:** [design-system@company.com]
**슬랙:** #design-system
**이슈 트래킹:** [GitHub/Jira 링크]

---

**© 2026 KRDS 실무 가이드. 원본 KRDS 저작권은 대한민국 정부(행정안전부)에 있습니다.**
