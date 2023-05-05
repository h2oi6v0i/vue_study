<template>
  <!-- 연락처 목록 -->
  <li>
    <span>이름 : {{ friendName }}</span>
    <span>나이 : {{ friendAge }}</span>
  </li>
</template>

<script>
export default {
	props: {
		friendName: {
			type: String,
			required: true,
		},
		friendAge: {
			type: Number,
			required: true
		}
	}
};
</script>

<style>
</style>