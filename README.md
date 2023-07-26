# React와 History API 사용하여 SPA Router 기능 구현하기

### :: 구현 포인트
- `window.history.pushState`
  - 현재 페이지를 다시 로드하거나 이동하지 않고도 브라우저의 URL을 변경
- `window.addEventListener("popstate", callback)`
  - popstate 이벤트에 바인딩된 이벤트 핸들러로 popstate 이벤트는 사용자가 브라우저의 '뒤로' 또는 '앞으로' 버튼을 클릭하거나, javascript로 history.back(), history.forward(), history.go()등을 호출하여 세션 기록 내에서 이동할 때 발생
  - 이 이벤트의 발생과 react state를 동기화하기 위해서 setState 실행 -> 리렌더링(=화면 갱신)
    - URL은 바뀌지만 화면이 변하지 않는 문제의 원인

### :: Context API 
- render란 화면에 대한 새로운 버전(스냅샷)을 갱신하는 행위
  - view = render(state)
  - 인자인 state가 변한다 -> 새로운 결과(view)가 나온다 -> 새로운 view는 render의ㅣ 실행 값
  - 즉, state가 변경될 때마다 render가 일어나야 새로운 화면을 볼 수 있다
  - react에서 렌더링이 일어나는 조건 -> props가 바뀌거나 setState가 호출되거나
    - 화면이 안바뀐다면 이 두가지에 변화가 없었던 것
  
### :: react-router-dom
- Browser / Server / App 등 다양한 환경에서 사용되어야 하므로 다양한 레벨에서 모듈화 되어있음
- `<Router />` -> `<Routes />` -> `<Route />`
- `<Router />` : 리액트 외부의 상태를 리액트 렌더링 사이클과 연동한다. (feat.Context API)
- `<Routes />` : 현재경로와 일치하는 path를 가진 Route의 component를 렌더링한다.
- `<Route />` : path와 component 데이터를 갖는다.

### :: 구현 요구사항

- [x] 1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.
  - `/` → `root` 페이지
  - `/about` → `about` 페이지
- [x] 2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
- [x] 3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.
- [x] 4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.
