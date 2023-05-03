<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  /**
   * props는 가장 단순하게 배열을 받는다. (무슨 말이야?)
   * props로 정의한 것들은 data()와 마찬가지로 Vue 컴포넌트 전체에서 사용 가능하기 때문에 this 키워드로 참조 가능
   * 그래서 대시를 쓰지 않는다. 대시를 사용하면 유효하지 않은 JavaScript 프로퍼티명이 되기 때문에 당연히 유효하지 않은 코드가 됨
   * '카멜 케이스'로 정의된 프로퍼티를 Vue가 자동으로 해석해서 대시가 포함된 버전으로 바꿔준다.
   * 즉, HTML 코드에서는 프로퍼티에 '케밥 케이스'를 사용하는 반면 컴포넌트가 받는 프로퍼티를 정의할 때는 '카멜 케이스'를 사용한다.
   * props로 정의한 이름을 data나 computed에 쓸 수 없음
   * 
   * - props는 불변한다.
   */
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],

  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
