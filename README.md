# React와 History API 사용하여 SPA Router 기능 구현하기

### 구조
- `components`
  - `Route.tsx` : 현재 경로에 맞는 컴포넌트틀 렌더링
  - `Router.tsx` : 현재 경로를 상태값에 저장해 자식 컴포넌트에 전달
- `hooks`
  - `useRouter.tsx` : 경로를 변경하는 메서드를 가진 훅
- `pages`
  - `About.tsx` : `/about` 경로 진입시 렌더링되는 페이지
  - `Root.tsx` : `/` 경로 진입시 렌더링되는 페이지
- `App.tsx` : Router 구성
- `main.tsx` : 진입점

### 구현 요구사항

- [x] 1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.
  - `/` → `root` 페이지
  - `/about` → `about` 페이지
- [x] 2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
- [x] 3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.
- [x] 4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.
