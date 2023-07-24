# React와 History API 사용하여 SPA Router 기능 구현하기

### 실행 순서

1. `Router`에 현재경로 `state`와 `setState`메서드를 context로 구성
2. 버튼 클릭시 `history.pushState` 메서드로 path 변경
3. `pushState` 메서드 실행하며 `window.onpopstate` 이벤트 발생시킴
4. `Route`에서 현재경로와 props으로 받은 경로를 비교하여 일치할 때 component 리턴

### 구현 요구사항

- [x] 1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.
  - `/` → `root` 페이지
  - `/about` → `about` 페이지
- [x] 2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
- [x] 3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.
- [x] 4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.
