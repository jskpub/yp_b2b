# 모바일 웹/앱 디자인·코딩 표준 가이드라인

> 각 기준은 가능한 경우 공식 출처(WCAG, Apple HIG, Material Design, Web.dev/Core Web Vitals 등)를 함께 표기했습니다. 출처가 없는 항목은 업계 관행 기준의 권장값이며, 팀/프로젝트 상황에 맞게 조정해 사용하세요.

## 담당자별 빠른 참조
| 영역 | 주요 담당 |
|---|---|
| 1. 디자인 표준 | 디자이너 |
| 2. 코딩 표준 | 개발자 |
| 3. 공통 원칙 | 디자이너+개발자+QA |

---

## 1. 디자인 표준

### 1.1 반응형 디자인
- **Viewport 설정**: `width=device-width, initial-scale=1.0` 필수
- **기준 너비**:
  - 스마트폰: 360~430px 폭 기준 설계 (2024년 이후 iOS/Android 주력 기종 기준)
  - 태블릿: 768px 이상
  - *(출처가 있는 고정값이 아니라 실제 트래픽 통계로 재확인 권장 — Google Analytics 등)*
- **터치 타겟**: 
  - iOS 최소 44×44pt ([Apple HIG](https://developer.apple.com/design/human-interface-guidelines/accessibility))
  - Android 최소 48×48dp ([Material Design](https://m3.material.io/foundations/accessible-design/patterns))
- **간격(Spacing)**: 8px 기반 그리드 시스템 (4의 배수: 4, 8, 12, 16, 24, 32, 40px…)
- **텍스트 크기**:
  - iOS 본문(Body) 기준 17pt ([Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography))
  - Android 본문 기준 14~16sp ([Material Type Scale](https://m3.material.io/styles/typography/type-scale-tokens))
  - 웹 최소 12px, 본문 16px 이상 권장 (브라우저 자동 줌 방지: iOS Safari는 16px 미만 input에서 자동 확대됨)
- **줄 높이(Line height)**: 본문 기준 1.4~1.6배 ([WCAG 1.4.8](https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html))

### 1.2 네비게이션
- **Bottom Tab/Navigation Bar**: 3~5개 항목 권장 ([Material Design Navigation Bar](https://m3.material.io/components/navigation-bar))
- **Hamburger Menu**: 주요 기능은 하단 탭에, 부가 기능만 메뉴로 (발견성 저하 이슈 — Nielsen Norman Group 연구 다수)
- **뒤로 가기**: 네이티브 앱은 시스템 제스처/버튼 우선 활용, 웹은 브라우저 뒤로가기와 화면 내 버튼 동작 일치시키기
- **상태 표시**: 현재 페이지/탭 강조 (색상 대비 3:1 이상 + 아이콘/굵기 등 비색상 단서 동반)

### 1.3 레이아웃
- **단일 컬럼 우선**: 세로 스크롤 중심, 가로 스크롤은 캐러셀 등 명확한 의도가 있을 때만
- **안전 영역(Safe Area)**:
  - iOS: `env(safe-area-inset-*)` CSS 환경 변수 활용 ([WebKit Safe Area](https://webkit.org/blog/7929/designing-websites-for-iphone-x/))
  - Android: 시스템 바 높이는 기기마다 상이하므로 하드코딩 대신 `WindowInsets` API(네이티브) 또는 `env()` 대응
- **콘텐츠 우선순위**: 스크롤 없이 보이는 영역(above the fold)에 핵심 액션 배치

### 1.4 색상 및 명도
- **명도 대비**: [WCAG 2.1 AA 기준](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) 텍스트 4.5:1 이상, 큰 텍스트(18pt+/14pt bold+) 3:1 이상, UI 컴포넌트 3:1 이상
- **색상만으로 정보 전달 금지** ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)): 아이콘, 텍스트, 패턴 등 비색상 단서 병행
- **다크 모드 지원**: 순수 검정(#000) 대신 다크 그레이(#121212 내외, Material Design 권장) 사용 — OLED 잔상 및 눈부심 완화

### 1.5 타이포그래피
- **폰트 개수 제한**: 패밀리 1~2개 이내 (로딩 시간 및 일관성)
- **시스템 폰트 우선 고려**: 커스텀 폰트 로딩 지연(FOIT/FOUT) 방지 — `font-display: swap` 적용
- **가변 텍스트 대응**: 사용자 폰트 크기 설정(접근성 확대) 존중 — 고정 px 대신 rem/sp 단위 사용 권장

---

## 2. 코딩 표준

### 2.1 성능
- **Core Web Vitals 기준** ([web.dev](https://web.dev/articles/vitals)):
  - **LCP** (Largest Contentful Paint): 2.5초 이내 (Good)
  - **INP** (Interaction to Next Paint): 200ms 이내 (Good) — 2024년 3월부로 FID 대체
  - **CLS** (Cumulative Layout Shift): 0.1 이하 (Good)
- **번들/이미지 크기**: 절대 기준보다 위 지표(LCP 등) 달성 여부로 판단 — Lighthouse로 실측 확인
- **이미지 최적화**:
  - WebP/AVIF 우선, JPEG/PNG 폴백
  - `srcset`/`sizes`로 해상도별 제공
  - 뷰포트 밖 이미지는 `loading="lazy"` 적용
- **코드 분할**: 라우트/기능 단위 청크 분리, 초기 진입 경로만 우선 로드
- **캐싱 전략**: 정적 자산은 장기 캐시 + 콘텐츠 해시 파일명, API는 데이터 특성별 TTL 설정

### 2.2 폼(Form) 설계 — 모바일 필수 항목
- **입력 타입 지정**: `type="email"`, `type="tel"`, `type="number"`, `inputmode` 속성으로 상황별 키보드 노출
- **자동완성 지원**: `autocomplete="name"`, `"email"`, `"tel"`, `"one-time-code"` 등 표준 값 사용 ([WHATWG HTML autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill))
- **에러 표시**: 필드 바로 아래 인라인 표시, 제출 후가 아닌 입력 중/이탈 시점(blur) 검증 병행
- **레이블**: placeholder만으로 대체 금지 — 항상 `<label>` 연결 (접근성 및 입력 중 맥락 유지)

### 2.3 호환성
- **브라우저 지원 범위**: 고정 버전 명시 대신 [Can I Use](https://caniuse.com) + 프로젝트 실제 트래픽(Analytics) 기준으로 매 분기 재검토
- **제스처 인식**: `pointer` 이벤트로 통일 권장 (touch/mouse 이벤트 중복 처리 방지)
- **입력 방식**: 터치, 키보드, 음성(스크린 리더 포함) 모두 동일한 기능 접근 보장

### 2.4 접근성 (a11y)
- **기준**: [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/) 준수를 최소 목표로 설정
- **시맨틱 HTML**: `<button>`, `<nav>`, `<main>`, `<header>` 등 의미 있는 태그 우선 사용
- **ARIA**: 시맨틱 HTML로 해결 안 되는 경우에 한해 보완 사용 (과도한 ARIA는 오히려 방해 — [WAI-ARIA 제1원칙](https://www.w3.org/TR/using-aria/#rule1))
- **포커스 관리**: 논리적 Tab 순서, `:focus-visible`로 키보드 사용자에게만 포커스 스타일 노출
- **대체 텍스트**: 의미 있는 이미지는 설명 필수, 장식용은 `alt=""`
- **터치 타겟**: 1.1 기준과 동일하게 44×44pt/48×48dp 이상 확보

### 2.5 국제화(i18n) — 다국어 대응 시
- **텍스트 길이 가변성**: 한국어/영어 대비 독일어 등은 30~40% 길어질 수 있음 — 레이아웃에 여유 확보
- **날짜/숫자/통화**: `Intl` API(웹) 또는 플랫폼 로케일 API 사용, 하드코딩 지양
- **RTL 언어 고려 필요 여부**: 아랍어 등 지원 시 `dir="rtl"` 및 좌우 반전 아이콘 대응 필요

### 2.6 PWA(웹앱 홈 화면 추가) — 해당 시
- **manifest.json**: name, icons(다양한 해상도), theme_color, display 모드 정의
- **아이콘 규격**: 최소 192×192, 512×512px 제공 ([web.dev PWA 체크리스트](https://web.dev/articles/pwa-checklist))
- **Service Worker**: 오프라인 폴백 페이지 및 핵심 자산 캐싱

### 2.7 네트워크 처리
- **오프라인 대응**: Service Worker로 핵심 콘텐츠 캐싱, 오프라인 상태 명확히 안내
- **에러 처리**: 네트워크 실패/타임아웃 시 원인과 재시도 옵션 제공
- **요청 최적화**: 불필요한 폴링 대신 이벤트 기반(WebSocket, SSE) 또는 적절한 간격 폴링

### 2.8 보안
- **HTTPS 필수**: 모든 통신 암호화
- **CSP**: XSS 방지를 위한 Content-Security-Policy 설정
- **입력 검증**: 클라이언트+서버 이중 검증 (클라이언트 검증은 UX용, 서버 검증이 실제 보안선)
- **인증**: OAuth2/JWT 등 표준 방식, 토큰 만료·갱신 정책 명시
- **민감 데이터 저장**: localStorage에 토큰/개인정보 저장 지양 (XSS 취약) — httpOnly 쿠키 또는 메모리 저장 고려

### 2.9 유지보수성
- **코드 구조**: 컴포넌트/기능별 폴더 분리, 디자인 토큰(색상·간격·타이포) 중앙 관리 파일로 분리
- **디자인-코드 동기화**: Figma 등 디자인 툴의 토큰과 코드의 변수(색상, 스페이싱, 타이포)를 동일한 이름/체계로 매핑 — 디자인 시스템 변경 시 양쪽 동시 반영
- **네이밍 컨벤션**: 변수/함수 camelCase, 컴포넌트 PascalCase, CSS 클래스 kebab-case, 상수 UPPER_SNAKE_CASE
- **버전 관리**: [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH)

---

## 3. 공통 원칙

### 3.1 사용자 경험
- **피드백 즉시성**: 사용자 액션 후 100ms 이내 시각적 반응 시작 ([Nielsen 응답 시간 기준](https://www.nngroup.com/articles/response-times-3-important-limits/))
- **제스처 일관성**: 스와이프(좌우 이동), 핀치(줌), 롱탭(컨텍스트 메뉴) 등 플랫폼 관례 준수
- **에러 메시지**: 원인 + 해결 방법을 함께 제시 (예: "비밀번호가 틀렸습니다. 재설정하시겠어요?")

### 3.2 테스트 기준
- **디바이스 테스트**: 실제 기기 기준 iOS/Android 각 최소 1종 (에뮬레이터만으로는 터치/성능 특성 확인 한계)
- **네트워크 시뮬레이션**: Chrome DevTools 등으로 저속 환경(Slow 3G/4G) 테스트
- **접근성 테스트**: 스크린 리더(iOS VoiceOver, Android TalkBack) 실사용 테스트, 자동 검사 도구(axe, Lighthouse) 병행
- **자동화 도구**: Lighthouse CI로 성능/접근성 지표 회귀 방지

### 3.3 배포 및 모니터링
- **무중단 배포**: Blue-Green 또는 Canary 배포 전략
- **에러 모니터링**: Sentry 등으로 실사용 환경 오류 수집
- **핵심 지표 추적**: Core Web Vitals(실사용자 데이터, RUM), 주요 기능 전환율, 오류율
- **하위 호환성**: 구버전 앱 사용자도 최소 기능은 동작하도록 API 버전 관리

---

## 빠른 체크리스트

### 디자인 (디자이너)
- [ ] 터치 타겟이 iOS 44pt / Android 48dp 이상인가?
- [ ] 색상 대비가 WCAG AA(텍스트 4.5:1, UI 3:1)를 충족하는가?
- [ ] 색상 외 비색상 단서가 함께 있는가?
- [ ] 다크 모드를 고려했는가?
- [ ] Safe Area를 고려한 레이아웃인가?
- [ ] 폼 필드에 명확한 레이블이 있는가?

### 코딩 (개발자)
- [ ] Lighthouse로 LCP 2.5초, INP 200ms, CLS 0.1 이하를 확인했는가?
- [ ] 이미지에 WebP/AVIF + srcset + lazy loading을 적용했는가?
- [ ] 폼 input에 적절한 type/inputmode/autocomplete를 지정했는가?
- [ ] 시맨틱 HTML을 우선 사용했는가?
- [ ] 민감 데이터를 localStorage에 저장하지 않았는가?
- [ ] 디자인 토큰과 코드 변수가 동기화되어 있는가?

### 테스트 (QA)
- [ ] 실제 iOS/Android 기기에서 테스트했는가?
- [ ] 저속 네트워크 환경에서 테스트했는가?
- [ ] VoiceOver/TalkBack으로 테스트했는가?
- [ ] 다국어 사용 시 텍스트 길이 변화에 레이아웃이 깨지지 않는가?

---

## 참고 출처
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design 3](https://m3.material.io/)
- [web.dev — Core Web Vitals](https://web.dev/articles/vitals)
- [MDN — Autofill/autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
- [Nielsen Norman Group — Response Time Limits](https://www.nngroup.com/articles/response-times-3-important-limits/)
