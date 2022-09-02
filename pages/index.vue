<template>
	<v-row justify="center" align="center">
		<div v-if="currentUser">The Current user is {{ currentUser }}</div>
		<div>
			<br>
			WIP. The views (pages available on the left) will be adjusted according to the user account. For now all the pages are visible
		</div>
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
