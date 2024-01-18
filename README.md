[Install Tailwind CSS with Parcel](https://tailwindcss.com/docs/guides/parcel) 문서를 기반으로 설치했습니다.

# 실행 방법

1. `npm install` 명령어로 의존성을 설치해주세요.

2. `npx parcel src/index.html` 명령어 실행해주세요.

# 살펴보기

이제 /dist/index.css 코드를 확인해보세요:

- index.html에 `text-3xl` `font-bold` 클래스
- main.js에 `underline` 클래스
- 두 파일의 Tailwind 클래스가 모두 index.css에 포함됐습니다.

결론:
tailwiwnd.config.js의 content의 경로에 존재하는 파일을 읽으면서 Tailwind 클래스를 찾아 CSS 클래스를 선언했음을 알 수 있습니다.
