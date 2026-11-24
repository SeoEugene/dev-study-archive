# Dev Study Archive (2023 – 2024)

입사 전 교육 과정(공공 데이터를 활용한 Node.js 전문가, 2023.08 – 2024.02)에서 만든 연습 프로젝트를 **기술별로 한곳에 모은 저장소**입니다. 비슷한 연습이 여러 저장소에 흩어져 있던 것을 정리했습니다.

- 현재 포트폴리오: **https://seoeugene.github.io**
- 완성도 있는 대표 작업은 따로 둡니다: [Cinematic](https://github.com/SeoEugene/CinematicTable) · [Find English](https://github.com/SeoEugene/EnglishChannel_with_YOUTUBEAPI) · [Animation Portfolio](https://github.com/SeoEugene/vite-project) · [React Portfolio](https://github.com/SeoEugene/react-portfolio) · [수업 정리·Trend Device](https://github.com/SeoEugene/webs2024)

## 구성

### 01 · HTML / CSS
| 폴더 | 내용 | 시기 | 사이트 |
|---|---|---|---|
| [Eugene-PortFolio](01-html-css/Eugene-PortFolio) | 개발자로 성장해 온 과정을 보여 주는 포트폴리오 (Vite, GSAP) | 2023.12 | |
| [Eugene-Portfol](01-html-css/Eugene-Portfol) | 포트폴리오 리디자인 "Eugene and Joy" | 2023.12 | |
| [WebPortfolio_Eugene](01-html-css/WebPortfolio_Eugene) | 정적 웹 포트폴리오 | 2024.01 | [보기](https://web-portfolio-eugene.vercel.app) |

### 02 · React
| 폴더 | 내용 | 시기 | 사이트 |
|---|---|---|---|
| [react-webpage](02-react/react-webpage) | React로 만든 원페이지 사이트 | 2023.10 | [보기](https://react-onepagesite.netlify.app/) |
| [react-you](02-react/react-you) | 뮤직 사이트 (axios, Sass) | 2023.10 | |
| [react-project](02-react/react-project) | React 포트폴리오 연습 (GSAP, Sass) | 2023.11 | |
| [react-test](02-react/react-test) | React · TypeScript 문제 풀이 | 2024.01 | |

### 03 · Vue
| 폴더 | 내용 | 시기 | 사이트 |
|---|---|---|---|
| [vue-webpage](03-vue/vue-webpage) | Vue로 만든 간단한 웹 페이지 | 2023.10 | |
| [vue-project](03-vue/vue-project) | Vue 포트폴리오 (GSAP, Sass) | 2023.11 | [보기](https://vue-project-sable.vercel.app) |
| [movie-project](03-vue/movie-project) | TMDB API 영화 검색 (Cinematic의 첫 버전) | 2023.12 | |

### 04 · Next.js
| 폴더 | 내용 | 시기 | 사이트 |
|---|---|---|---|
| [next-project](04-nextjs/next-project) | Next.js 포트폴리오 (GSAP, Sass) | 2024.01 | [보기](https://next-project-weld-one.vercel.app) |
| [next-blog-test](04-nextjs/next-blog-test) | Next.js · TypeScript · Tailwind 블로그 연습 | 2024.01 | |
| [next-blog](04-nextjs/next-blog) | 소셜 로그인(next-auth) 코딩 기술 블로그 | 2024.02 | |
| [Next_Blog](04-nextjs/Next_Blog) | Next.js · TypeScript 블로그 | 2024.02 | |

### 05 · React + Node.js 풀스택 (게시판)
같은 주제(게시판)를 단계별로 다시 만든 기록입니다. Express, MongoDB(mongoose), 파일 업로드(multer), Firebase 로그인을 씁니다.

| 폴더 | 내용 | 시기 |
|---|---|---|
| [node-simple](05-react-node-fullstack/node-simple) | 기본 게시판 | 2023.12 |
| [simple200](05-react-node-fullstack/simple200) | 게시판 확장 | 2023.12 |
| [simple600](05-react-node-fullstack/simple600) | 게시판 확장 | 2023.12 |
| [Joy_Play](05-react-node-fullstack/Joy_Play) | 게시판 기반 서비스 (제작 중 중단) | 2024.01 |
| [port-test](05-react-node-fullstack/port-test) | React 포트폴리오 + Node 서버 배포 테스트 | 2024.01 |

## 실행할 때
- 각 폴더에서 `npm install` 뒤 `npm run dev` 또는 `npm start`
- API 키와 DB 주소는 저장소에 넣지 않습니다. 필요한 값은 각 폴더의 `.env.example`이나 `server/config/dev.js`(환경 변수 사용)를 보고 직접 채워 주세요.

## 정리 원칙 (2026)
- 원래 저장소의 마지막 상태를 그대로 옮겼고, 빌드 결과물과 `node_modules`는 뺐습니다.
- 공개 저장소에 올라가 있던 API 키와 DB 비밀번호는 지우고 환경 변수로 바꿨습니다.
- 원래 저장소의 커밋 기록은 각 원본 저장소(보관 처리)에 남아 있습니다.
