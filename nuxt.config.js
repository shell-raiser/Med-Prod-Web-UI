import colors from 'vuetify/es5/util/colors'
// import { createVuetify } from 'vuetify'
export default {
	// css: ['~/assets/main.css'],
	// pageTransition: 'page',
	// Global page headers: https://go.nuxtjs.dev/config-head
	target: 'server',
	head: {
		titleTemplate: '%s - medProd',
		title: 'medProd Web',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.jpeg' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: true,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	},
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'@nuxtjs/firebase'
	],

	firebase: {
		// options
		config: {
			databaseURL: "https://hospicare-app22-default-rtdb.firebaseio.com/",
			apiKey: "AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w",
			authDomain: "hospicare-app22.firebaseapp.com",
			projectId: "hospicare-app22",
			storageBucket: "hospicare-app22.appspot.com",
			messagingSenderId: "485352211339",
			appId: "1:485352211339:web:f3666f946f0d4fa38c658e",
			measurementId: "G-F8NXZ03XGP"
		},
		services: {
			auth: {
				persistence: 'local', // default
				initialize: {
					// onAuthStateChangedAction: 'onAuthStateChangedAction',
					onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
					// subscribeManually: false
				},
				ssr: false, // default
				// emulatorPort: 9099,
				// emulatorHost: 'http://localhost',
			},
			database: true
		}
	},

	// router: {
	// 	middleware: 'router-auth'
	// },
	
	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en',
		},
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
