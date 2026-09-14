# PC(데스크톱) 레이아웃 & 그리드 가이드

**Version:** 1.0
**Last Updated:** 2026-09-14
**전략:** 우선 PC(데스크톱) 화면만 제작, 추후 여력이 되면 반응형 확장
**기준 소스:** `dev/resources/ypbook.css`의 `.wrap`(L280) / `.inner`(L341) 컨테이너 규칙

> 컬러·타이포·간격·컴포넌트 토큰은 [디자인시스템*웹표준*가이드.md](./디자인시스템_웹표준_가이드.md)를 그대로 따릅니다. 이 문서는 **컨테이너 폭, 그리드, 브레이크포인트** 등 레이아웃 규칙만 다룹니다.

---

## 목차

1. [적용 전략](#적용-전략)
2. [컨테이너 & 그리드](#컨테이너--그리드)
3. [브레이크포인트](#브레이크포인트)
4. [반응형 전환 체크리스트 (추후용)](#반응형-전환-체크리스트-추후용)
5. [섹션 여백 가이드](#섹션-여백-가이드)

---

## 적용 전략

- 지금 단계는 **PC(데스크톱) 페이지만** 제작합니다. 뷰포트가 좁아져도 레이아웃이 깨지지 않도록 최소 폭을 고정하는 **desktop-first(고정폭 + max-width 다운시프트)** 전략을 그대로 유지합니다. 이는 기존 `ypbook.css`가 이미 이 방식(`@media (max-width: 1024px)`으로 `.only-mb` 전환)을 쓰고 있기 때문에, 나중에 반응형을 붙일 때도 코드 관행이 충돌하지 않습니다.
- 기존 `.wrap`(뷰포트 최소 폭 보장) / `.inner`(실제 콘텐츠 폭) 2단 컨테이너 구조를 이 프로젝트의 **표준 레이아웃 컨테이너**로 채택합니다.
- 반응형은 지금 구현하지 않되, 나중에 바로 확장할 수 있도록 브레이크포인트·전환 규칙을 이 문서에 미리 정의해 둡니다.

---

## 컨테이너 & 그리드

### 레이아웃 계층 구조

```
<body>
  <div class="wrap">           ← 뷰포트 최소 폭 보장 (min-width: 1280px)
    <header class="inner">...</header>
    <main>
      <section class="inner">...</section>
      <section class="section--wide">   ← 배경만 풀블리드
        <div class="inner">...</div>
      </section>
    </main>
    <footer class="inner">...</footer>
  </div>
</body>
```

### 기준값

`.wrap`(1280px)만 고정 기준으로 삼고, `.inner`는 **고정 폭(1060px)을 그대로 따르지 않고 유동(fluid)으로** 둡니다. 기존 `ypbook.css`의 1060px은 구 사이트의 특정 값일 뿐, 새 페이지에서 꼭 맞출 필요는 없습니다 — `max-width: 1280px` + 좌우 패딩 20px 규칙만 지키면 섹션마다 실제 콘텐츠 폭은 달라져도 됩니다.

| 요소               | 값            | 설명                                                                                      |
| ------------------ | ------------- | ----------------------------------------------------------------------------------------- |
| `.wrap` min-width  | **1280px**    | 뷰포트가 이보다 좁아져도 레이아웃이 깨지지 않도록 최소 폭 고정 (필요 시 가로 스크롤 허용) |
| `.inner` width     | `100%` (유동) | 고정 1060px을 강제하지 않음 — `max-width`로만 상한 제어                                   |
| `.inner` max-width | **1280px**    | 콘텐츠 상한 (필요 시 섹션별로 다른 값 사용 가능, 예: 1200px, 1120px)                      |
| `.inner` padding   | 0 20px        | 좌우 여백                                                                                 |

```css
:root {
  --layout-wrap-min-width: 1280px;
  --layout-inner-max-width: 1280px;
  --layout-inner-padding: 20px;
}

.wrap {
  position: relative;
  overflow: hidden;
  min-width: var(--layout-wrap-min-width);
}

.inner {
  width: 100%;
  max-width: var(--layout-inner-max-width);
  margin: 0 auto;
  padding: 0 var(--layout-inner-padding);
  box-sizing: border-box;
}
```

> `.wrap`은 기존 `ypbook.css` 값(min-width: 1280px)을 그대로 유지합니다. `.inner`는 `width: 1060px` 고정값 대신 `width: 100%` + `max-width: 1280px`로 바꿔, 섹션 성격에 따라 `max-width`만 오버라이드하면(`--layout-inner-max-width` 재정의 또는 인라인 값) 콘텐츠 폭을 유연하게 조정할 수 있게 했습니다.

### 와이드 섹션 (배너 등 풀블리드)

배경만 뷰포트 전체 폭으로 확장하고, 내부 콘텐츠는 `.inner`로 감싸 정렬을 유지합니다.

```css
.section--wide {
  width: 100%;
  background: var(--color-surface);
}
.section--wide > .inner {
  /* max-width만 유지, 콘텐츠 폭은 섹션에 맞게 조정 가능 */
}

/* 콘텐츠 폭을 더 넓게/좁게 써야 하는 섹션 예시 */
.inner--narrow {
  max-width: 960px;
}
.inner--full {
  max-width: 1280px;
  padding: 0; /* 배너 이미지 등 여백 없이 꽉 채울 때 */
}
```

### 12컬럼 그리드 (컴포넌트 내부 정렬용)

`.inner`(최대 1280px, 패딩 제외 시 콘텐츠 최대 1060px) 안에서 카드·컬럼 배치가 필요할 때 사용하는 유동 그리드입니다. 고정 px 컬럼 대신 `fr` 단위를 사용해 값이 딱 떨어지지 않는 폭에서도 깨지지 않게 합니다.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-lg); /* 24px */
}

/* 예: 4개 카드를 3컬럼씩 배치 */
.grid-12 > .col-span-4 {
  grid-column: span 4;
}
```

---

## 브레이크포인트

### 현재 단계 — PC 전용

지금은 아래 한 구간만 실제로 구현합니다.

| 구간                        | 뷰포트                     | 상태                                                       |
| --------------------------- | -------------------------- | ---------------------------------------------------------- |
| Desktop                     | 1280px 이상 (`.wrap` 기준) | ✅ 구현 대상                                               |
| 1024px 이하 (태블릿/모바일) | —                          | 🔜 추후 대응. 현재는 `.only-mb` 등 일부 토글 클래스만 존재 |

### 추후 반응형 확장 로드맵

반응형을 시작할 때는 desktop-first(`max-width` 다운시프트) 관행을 그대로 유지해 기존 `.only-mb` 로직과 충돌하지 않게 합니다. 값은 [디자인시스템*웹표준*가이드.md](./디자인시스템_웹표준_가이드.md)의 모바일 기준(375px, 컬러/타이포 토큰)과 맞춥니다.

| 브레이크포인트 | 미디어 쿼리                             | 전환 내용                                                                |
| -------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| Desktop (기본) | 없음 (기본 스타일)                      | `.wrap` min-width 1280px, `.inner` max-width 1280px(패딩 20px), 12컬럼   |
| Tablet         | `@media screen and (max-width: 1024px)` | `.wrap` min-width 해제, `.inner` max-width 100% + padding 24px, 12→8컬럼 |
| Mobile         | `@media screen and (max-width: 767px)`  | `.only-mb` 표시 전환, `.inner` padding 16px, 8→4컬럼(스택)               |

```css
/* 반응형 작업 시작 시 추가할 오버라이드 — 지금은 적용하지 않음 */
@media screen and (max-width: 1024px) {
  .wrap {
    min-width: 0;
  }
  .inner {
    width: 100%;
    max-width: 100%;
    padding: 0 24px;
  }
  .grid-12 {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media screen and (max-width: 767px) {
  .inner {
    padding: 0 16px;
  }
  .grid-12 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

> ⚠️ 지금은 PC 전용 제작 단계이므로 위 미디어쿼리를 실제 스타일시트에 넣지 않습니다. 반응형 작업을 시작할 때 이 섹션을 기준으로 확장하세요.

---

## 반응형 전환 체크리스트 (추후용)

- [ ] `.wrap` min-width 제거 여부 결정 (완전 유동 vs 특정 폭까지만 축소)
- [ ] `.inner` padding 단계별 축소 (20px → 24px → 16px)
- [ ] 12컬럼 그리드 → 8컬럼(태블릿) → 4컬럼(모바일) 대응
- [ ] PC 전용으로 설계된 hover 의존 인터랙션을 터치 환경(탭)에서도 쓸 수 있게 대체
- [ ] 모든 상호작용 요소 44×44px 이상 재검증 (PC는 마우스 기준이라 작게 설계되기 쉬움)
- [ ] `.only-mb` / `.only-pc` 형태의 노출 토글 클래스 정리
- [ ] 이미지/배너 등 고정 px 자산의 반응형 대체안(WebP, srcset) 준비

---

## 섹션 여백 가이드 (PC 기준)

기존 [디자인시스템*웹표준*가이드.md](./디자인시스템_웹표준_가이드.md)의 8px 스케일(`--spacing-xs`~`--spacing-xl`)에 PC 페이지에서 필요한 큰 간격 토큰을 추가합니다.

```css
:root {
  --spacing-2xl: 3rem; /* 48px — 섹션 내부 큰 구획 */
  --spacing-3xl: 4rem; /* 64px — 섹션과 섹션 사이 */
}
```

| 영역                 | 값                     | 비고                        |
| -------------------- | ---------------------- | --------------------------- |
| 섹션과 섹션 사이     | 64px (`--spacing-3xl`) | 페이지 내 주요 블록 구분    |
| 섹션 내부 패딩(상하) | 40px~48px              | 헤더/타이틀과 콘텐츠 사이   |
| 카드 그룹 간격       | 24px (`--spacing-lg`)  | 그리드 `gap`과 동일 값 사용 |
| `.inner` 좌우 여백   | 20px (고정)            | 컨테이너 규칙과 동일        |

---

## 버전 관리

| 버전 | 날짜       | 변경 사항                                                                                                      |
| ---- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| 1.0  | 2026-09-14 | `ypbook.css`의 `.wrap`(1280px)/`.inner`(1060px) 컨테이너를 표준화, PC 우선 전략과 추후 반응형 확장 로드맵 정의 |

---

## 참고 문서

- [디자인시스템*웹표준*가이드.md](./디자인시스템_웹표준_가이드.md) — 컬러·타이포·컴포넌트 토큰
- `dev/resources/ypbook.css` — `.wrap`(L280), `.inner`(L341), `.only-mb` 토글(L286–294) 원본
