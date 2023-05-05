<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
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
    <button @click="$emit( 'delete', id )">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    emailAddress: {
      type: String,
      required: true,
    },

    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: [ 
    'toggle-favorite',
    'delete' 
  ],

  data() {
    return {
      detailsAreVisible : false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    /**
     * 컴포넌트 내부에서만 바뀌는 것은 의미가 없기 때문에 자식에서 바뀐 데이터를 부모로 다시 되돌려줘야 한다.
     * 컴포넌트가 부모에게 무언가 일어났음을 알리고자 한다면 컴포넌트는 부모가 수신할 이벤트를 발생시켜야 한다.
     * $emit 메서드는 부모 컴포넌트에서 수신할 수 있는 커스텀 이벤트를 발생시켜 준다.
     * - 최소한 하나의 인수인 커스텀 이벤트 이름을 적어줘야 한다.
     * - 이외의 모든 추가 인수는 이벤트와 함께 전달될 데이터이다.
     * - 케밥 케이스(케밥 케이스는 값을 전달할 때만 썼는데 이벤트도 마찬가지이다.)
     * 컴포넌트가 이 커스텀 이벤트를 발생시키면 컴포넌트를 사용하는 App.vue 파일에서 이를 수신해야 한다.
     */

    toggleFavorite() {
      this.$emit( 'toggle-favorite', this.id );
    },

    /**
    * friends 배열은 App.vue가 관리하기 때문에 친구 삭제 기능도 커스텀 이벤트 발생시켜야 한다.
    * 친구를 삭제하려면 v-for로 렌더링되는 배열에서 제거해야 한다.
    * 여기에서는 삭제 버튼을 클릭했단느 정보를 전다해주기만 하면 된다.
    * 하단의 코드처럼 작성해도 되고 template에서 바로 작성해도 된다.
    */
    // deleteFriend() {
    //   this.$emit( 'delete' );
    // }
  },
};
</script>
