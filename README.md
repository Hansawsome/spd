# Suprema Partners Day 2025 - 행사 등록 마이크로페이지

Suprema Partners Day 2025 행사 참가자를 온라인으로 모집하고, 행사 정보를 효과적으로 전달할 수 있는 단일 마이크로페이지입니다.

## 🚀 주요 기능

- **Hero Section**: 행사 대표 이미지와 CTA 버튼
- **행사 소개**: 행사 취지, 목적, 장소, 일정 안내
- **아젠다/타임테이블**: 시간대별 세션 일정 표시
- **등록폼**: 참가자 정보 입력 및 유효성 검사
- **자동 이메일 발송**: 등록 완료 시 담당자 및 참가자에게 이메일 전송
- **Google Sheets 연동**: 등록 데이터 자동 저장
- **반응형 디자인**: PC, 태블릿, 모바일 최적화

## 🛠 기술 스택

### Frontend
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Noto Sans KR)
- 반응형 웹 디자인

### Backend
- Node.js + Express.js
- Nodemailer (이메일 전송)
- Google Sheets API
- Express Validator (입력 검증)
- Rate Limiting (보안)

## 📦 설치 및 실행

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 의존성 설치
npm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 `.env`로 복사하고 필요한 값들을 설정하세요:

```bash
cp .env.example .env
```

`.env` 파일 설정:
```env
# Server Configuration
PORT=3000

# Email Configuration (Gmail SMTP)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_KEY_FILE=path/to/service-account-key.json
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id

# Environment
NODE_ENV=development
```

### 3. Google Sheets API 설정

1. [Google Cloud Console](https://console.cloud.google.com/)에서 새 프로젝트 생성
2. Google Sheets API 활성화
3. 서비스 계정 생성 및 JSON 키 파일 다운로드
4. Google Sheets 문서 생성 및 서비스 계정에 편집 권한 부여
5. 스프레드시트 ID를 `.env` 파일에 설정

### 4. Gmail SMTP 설정

1. Gmail 계정에서 2단계 인증 활성화
2. 앱 비밀번호 생성
3. `.env` 파일에 이메일과 앱 비밀번호 설정

### 5. 이미지 파일 추가

`assets/images/` 폴더에 다음 이미지들을 추가하세요:
- `suprema-logo.png`: Suprema 회사 로고
- `hero-bg.jpg`: Hero 섹션 배경 이미지

### 6. 서버 실행

```bash
# 개발 모드 (nodemon 사용)
npm run dev

# 프로덕션 모드
npm start
```

서버가 실행되면 `http://localhost:3000`에서 웹사이트를 확인할 수 있습니다.

## 📁 프로젝트 구조

```
suprema-partners-day-2025/
├── assets/
│   └── images/
│       ├── suprema-logo.png
│       └── hero-bg.jpg
├── scripts/
│   └── main.js
├── styles/
│   └── main.css
├── index.html
├── server.js
├── package.json
├── .env.example
└── README.md
```

## 🔧 API 엔드포인트

### POST /api/register
참가자 등록 API

**Request Body:**
```json
{
  "name": "홍길동",
  "company": "회사명",
  "position": "직함",
  "email": "email@example.com",
  "phone": "010-1234-5678"
}
```

**Response:**
```json
{
  "success": true,
  "message": "등록이 완료되었습니다."
}
```

### GET /api/health
서버 상태 확인

## 🚀 배포

### GitHub Pages (정적 파일만)
```bash
# 정적 파일들을 GitHub Pages에 배포
# 주의: 백엔드 API는 별도 서버 필요
```

### Vercel (서버리스)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify (서버리스)
1. Netlify에 프로젝트 연결
2. 빌드 설정: `npm run build`
3. 환경 변수 설정
4. 배포

## 🔒 보안 기능

- Helmet.js를 통한 보안 헤더 설정
- Rate Limiting (15분당 5회 요청 제한)
- 입력 데이터 검증 및 정제
- CORS 설정
- XSS 방지

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🧪 테스트

```bash
# 테스트 실행
npm test

# 테스트 커버리지 확인
npm test -- --coverage
```

## 🎨 이미지 파일 준비

프로젝트를 완전히 실행하려면 다음 이미지 파일들을 준비해야 합니다:

1. **Suprema 로고** (`assets/images/suprema-logo.png`)
   - 권장 크기: 200px × 60px (또는 비례 크기)
   - 형식: PNG (투명 배경 권장)

2. **Hero 배경 이미지** (`assets/images/hero-bg.jpg`)
   - 권장 크기: 1920px × 1080px 이상
   - 형식: JPG
   - 내용: 기업 이벤트나 기술 관련 이미지

## 🚀 배포 가이드

### 1. Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 환경 변수 설정
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add GOOGLE_SERVICE_ACCOUNT_KEY
vercel env add GOOGLE_SPREADSHEET_ID
```

### 2. Netlify 배포

1. Netlify에 GitHub 저장소 연결
2. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `.`
3. 환경 변수 설정:
   - `EMAIL_USER`: Gmail 계정
   - `EMAIL_PASS`: Gmail 앱 비밀번호
   - `GOOGLE_SERVICE_ACCOUNT_KEY`: Google 서비스 계정 JSON (문자열)
   - `GOOGLE_SPREADSHEET_ID`: 스프레드시트 ID

### 3. GitHub Pages (정적 파일만)

```bash
# gh-pages 브랜치에 정적 파일 배포
npm install -g gh-pages

# 정적 파일 배포 (백엔드 기능 제외)
gh-pages -d .
```

**주의**: GitHub Pages는 정적 파일만 지원하므로 백엔드 API 기능이 작동하지 않습니다.

## 🔧 환경 변수 설정 가이드

### Gmail SMTP 설정

1. Gmail 계정에서 2단계 인증 활성화
2. Google 계정 설정 → 보안 → 앱 비밀번호 생성
3. `.env` 파일에 설정:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Google Sheets API 설정

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. Google Sheets API 활성화
4. 서비스 계정 생성:
   - IAM 및 관리자 → 서비스 계정
   - 서비스 계정 생성
   - JSON 키 파일 다운로드
5. Google Sheets 문서 생성:
   - 새 스프레드시트 생성
   - 서비스 계정 이메일에 편집 권한 부여
   - 스프레드시트 URL에서 ID 복사
6. `.env` 파일에 설정:
   ```env
   GOOGLE_SERVICE_ACCOUNT_KEY_FILE=path/to/service-account-key.json
   GOOGLE_SPREADSHEET_ID=your-spreadsheet-id
   ```

## 📱 모바일 최적화 기능

- **반응형 테이블**: 모바일에서 카드 형태로 변환
- **터치 친화적 버튼**: 충분한 터치 영역 확보
- **폰트 크기 자동 조정**: iOS Safari 줌 방지
- **스크롤 최적화**: 부드러운 스크롤링 지원

## 🔒 보안 기능

- **Rate Limiting**: 15분당 5회 요청 제한
- **입력 검증**: 서버/클라이언트 이중 검증
- **XSS 방지**: 입력 데이터 정제
- **CORS 설정**: 허용된 도메인만 접근
- **Helmet.js**: 보안 헤더 자동 설정

## 📞 문의

행사 관련 문의: shhan@suprema.co.kr

## 📄 라이선스

MIT License
