<template>
	<v-app dark>
		<v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" clipped fixed app permanent>
			<v-list>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar clipped-left fixed app>
			<!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
			<v-btn icon @click.stop="miniVariant = !miniVariant">
				<v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
			</v-btn>
			<!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
			<!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      > -->
			<!-- <v-icon>mdi-minus</v-icon>
      </v-btn> -->
			<img src="../static/logo.jpeg" height="100%">
			<!-- <v-app-bar-title v-text="title" /> -->
			<v-spacer />
			<v-btn depressed to="/sign" >
				<div v-if="!currentUser">Login</div> 
				<div v-if="currentUser">{{currentUser.displayName}}</div> 
			</v-btn>
			<!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
		</v-app-bar>
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>

		<!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	// mode: 'out-in',
	data() {
		return {
			// clipped: true,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'mdi-home',
					title: 'Home',
					to: '/',
				},
				{
					icon: 'mdi-account-plus',
					title: 'Register Patient',
					to: '/registerPatient',
				},
				{
					icon: 'mdi-list-box',
					title: 'Monitor Patients',
					to: '/monitorPatients',
				},
				{
					icon: 'mdi-doctor',
					title: 'Register a doctor',
					to: '/regDoc',
				},
				// {
				// 	icon: 'mdi-login',
				// 	title: 'Sign in',
				// 	to: '/sign',
				// },
			],
			miniVariant: false,
			// right: true,
			// rightDrawer: false,
			title: 'Med Prod Web',
		}
	},
	computed: {
    currentUser() {
      return this.$store.state.user
    },
  },
	
}
</script>
<style>
.page-enter,
.page-leave-active {
	transform: translateX(-20px);
	opacity: 0;
}

.page-enter-active {
	transition: all 0.2s ease-out;
	/* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
}

.page-leave-active {
	transition: all 0.2s cubic-bezier(1, 0.5, 0.8, -2);
}

.page-enter-from,
.page-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
