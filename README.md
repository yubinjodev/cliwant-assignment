# 🏃 앱 실행

1. 레포지토리 클론

```
git clone https://github.com/yubinjodev/cliwant-assignment.git
```

2. 프로젝트 경로 접근

```
cd cliwant-assignment
```

3. 패키지 설치

```
npm i
```

4. 앱 실행

```
npm run dev
```

앱은 http://localhost:3000 주소에서 실행 됩니다 (브라우저)

# 🎨 디자인 패턴

## 컴포넌트 구조

- 함수형 컴포넌트를 사용하여 개발
- 컴포넌트를 모듈화 시키고 재사용

## 상태 관리

- 단순하고 로컬한 상태는 React useState 활용
- 복잡하고 여러 컴포넌트 사이에서 상태 공유 필요한 상태는 Zustand 활용

## 데이터 흐름과 props 관리

- React의 unidirectional 데이터 흐름 원칙 따름
- 과도한 prop drilling을 피하면서 props를 사용하여 자녀 컴포넌트에 데이터 전달

## 프로젝트 구조

참고 문서: https://github.com/alan2207/bulletproof-react

```
src
|
+-- app               # 앱 경로
|
+-- components        # 앱 전체에서 사용 가능한 컴포넌트
|
+-- features          # 기능 기반 모듈
|
+-- hooks             # 앱 전체에서 사용 가능한 훅
|
+-- stores            # 상태 모음
|
+-- types             # 타입 선언
|
+-- utils             # util 파일 모음
```

```
src/features/rfp-listing
|
+-- components       # 특정 기능 컴포넌트
|
+-- hooks            # 특정 기능 훅
|
+-- stores           # 특정 기능 상태 모음
|
+-- types            # 특정 기능 타입 선언
|
+-- utils            # 특정 기능 util 파일 모음
```

## 기술 스택

- React
- Next.js
- Zustand
- MUI
