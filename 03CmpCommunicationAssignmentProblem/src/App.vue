<template>
  <section>
    <!-- 연락처 추가 input -->
    <user-data @add-contact="addContact" />

    <ul>
      <!-- 연락처 목록 -->
      <active-user 
        v-for="(friend, index) in friends" :key="index"
        :friend-name="friend.name"
        :friend-age="friend.age"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [],
    };
  },

  methods: {
    addContact( name, age ) {
      const newFriend = {
        name: name,
        age: age
      }
      this.friends.push( newFriend )
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

section {
  width: 400px;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

li {
  display: flex;
  flex-direction: column;
}

li + li {
  margin-top: 12px;
}

span + span {
  margin-top: 8px;
}
</style>
