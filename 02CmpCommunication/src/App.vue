<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>

    <new-friend @add-contact="addContact" />

    <ul>
      <!-- is-favorite="true" -->
      <!-- 이렇게 설정할 수 없다. 왜냐하면 저 자리엔 항상 텍스트가 와야 하기 때문이다. -->
      <!-- 설정하고 싶으면 v-bind 사용해서 :is-favorite="true" 이렇게 써줘야 한다. -->
      <friend-contact 
        v-for="friend in friends"
        :key="friend.id" 
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      />
    </ul> 
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],
    };
  },

  methods: {
    /**
     * toggleFavoriteStatus 메서드가 friendId를 전달받게 될 것이다.
     * 인수 이름은 무엇이든 상관없고, 커스텀 이벤트를 발생시킬 때 FriendContact에서 제공한 두 번째 인수를 얻는다.
     * toggleFavoriteStatus의 첫 번째 매개변수가 이 id인 것이다.
     */
    toggleFavoriteStatus( friendId ) {
      const identifiedFriend = this.friends.find( ( friend ) => friend.id === friendId );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },

    addContact( name, phone, email ) {
      // 기존의 데이터와 같은 구조로 만들기 하지만 : 뒤에 있는 이름은 같을 필요 없음
      const newFriendContact = {
        id: new Date().toISOString(), // Date를 ISOString(yyyy-mm-ddThh:mm:ss) 형식의 문자열로 변환해주는 함수
        name: name,
        phone: phone,
        email: email,
        isFavorite : false
      }
      this.friends.push( newFriendContact );
    },

    deleteContact( friendId ) {
      /**
       * 어떤 연락처를 삭제할 건지 식별해야 한다.
       * 일치하면 삭제해야 하기 때문에 일치하지 않는지 확인한다. -> id 일치하면 false 반환
       * friendId가 일치하는 친구를 삭제한 새 friends 배열을 생성하고 해당 배열을 friends 데이터에 저장한다.
       */
      this.friends = this.friends.filter( ( friend ) => friend.id !== friendId );
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
button + button {
  margin-left: 12px;
}
</style>
