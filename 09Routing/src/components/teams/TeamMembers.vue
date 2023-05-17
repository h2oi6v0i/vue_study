<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: [ 'teams', 'users' ],

  components: {
    UserItem
  },

  data() {
    return {
      teamName: '',
      members: [],
    }
  },

  created() {
    /** 1. teamId 가져와서 추가 상수에 저장하기 */
    const teamId = this.$route.params.teamId;

    /** 2. 주입(inject)된 teams 배열에서 teamId를 가지고 올바른 팀 찾기 */
    const selectedTeam = this.teams.find( team => team.id === teamId );

    /** 3. 팀을 찾은 후, 팀 소속 멤버 찾기 */
    const members = selectedTeam.members; 

    /** 4. 주입(inject)된 users 배열에서 해당하는 members의 전체 사용자 엔트리를 찾는다. */
    const selectedMembers = [];

    for ( const member of members ) {
      const selectedUser = this.users.find( user => user.id === member );
      selectedMembers.push( selectedUser );
    }

    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>