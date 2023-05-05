<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
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
      console.log( identifiedFriend );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
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
#app li {
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
</style>
