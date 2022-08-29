<template>
	<v-row justify="center" align="center">
		<div>Home page {{ currentUser }}</div>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			currentUser: this.$store.state.user
		}
	},
	name: 'IndexPage',
}
</script>
