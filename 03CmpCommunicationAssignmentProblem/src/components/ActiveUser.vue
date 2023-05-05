<template>
	<section>
		<h2>{{ userName }}</h2>
		<h3>{{ userAge }} years</h3>
	</section>
</template>

<script>

export default {
	props: {
		userName: {
			type: String,
			required: true,
		},
		userAge: {
			type: Number,
			required: true,
		}
	}
}

</script>

<style>

</style>