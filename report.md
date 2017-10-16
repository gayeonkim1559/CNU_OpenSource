Redux는 Flux 아키텍처를 좀 더 편하게 사용할 수 있도록 해주는 라이브러리이다.
Store에서 모든 데이터를 담고 있고, 컴포넌트끼리는 직접 교류하지 않고 store 중간자를 통하여 교류한다. 해당 컴포넌트에서 store에 있는 특정 데이터의 변동을 주의하고 있다가 변동이 있을 시 바로 반영시키는 것을 가리킨다.

Redux를 사용할 땐 3가지 원칙이 적용된다.
첫째, Redex는 어플리케이션의 state를 위해 단 한 개의 store를 사용한다. 모든 state가 한 곳에 있기 때문에 single source of Truth라고 부른다.

둘째, State is read-only. 어플리케이션에서 state를 직접 변경 할 수 없다. state를 변경하기 위해서는 action이 dispatch되어야 한다. action은 어떤 변화가 일어나야 할 지 알려주는 객체이다.

셋째, 변화는 순수함수로 만들어져야 한다. action객체를 처리하는 함수를 reducer라고 부른다. action은 어떤 변화가 일어나야할 지 알려주는 객체라면, reducer는 그 정보를 받고 어플리케이션의 상태를 어떻게 바꿀지 정의한다 reducer는 순수함수로만 만들어져야 한다.
