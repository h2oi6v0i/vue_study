<template>
  <div>
    <user-data @set-data="setUserData" />
    <active-user :user-name="user.name" :user-age="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Jeon Gary",
        age: 14,
      },
    };
  },

  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

section {
  max-width: 40rem;
  padding: 1.6rem;
  margin: 2rem auto;
  border-radius: 12px;
  border: 1px solid #ccc;
}

h2,
h3 {
  margin: 0;
}
</style>
