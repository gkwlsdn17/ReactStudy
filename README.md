# ReactStudy<br/>
<br/>
학습기간: 2024-10-24~
<br/>
<br/>
<br/>
vite를 통한 react 프로젝트 생성법<br/>
1. npm create vite@latest <br/>
2. react 선택 <br/>
3. npm i <br/>
4. eslint.config.js에 ruls에 불필요한 옵션 제거 구문 추가 <br/>
      "no-unused-vars": "off", <br/>
      "react/prop-types": "off" <br/>
5. npm run dev 로 실행 <br/>
<br/>
<br/>
vercel을 통한 배포 방법<br/>
1. npm install로 vercel 설치 (global로 설치하는게 더 편함)<br/>
2. vercel --version으로 잘 설치 되었는지 확인<br/>
3. vercel login으로 login하기<br/>
4. 해당 프로젝트에서 vercel 치기<br/>
5. deploy 폴더가 맞는지, vercel project 선택, 기존 프로젝트에 링크할건지 여부, project name, located는 기본으로 그냥 바로 엔터<br/>
6. modify setting 물어보면 수정할거 없으면 no 하면됨 <br/>
7. 배포가 잘 되었으면 link가 나옴. link 타고 웹 잘 열리는지 확인<br/>