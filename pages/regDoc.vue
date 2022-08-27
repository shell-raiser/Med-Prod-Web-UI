<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="name" :rules="nameRules" label="Name" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field :rules="patientRules" :counter="10" label="Doctor ID" required></v-text-field>
                </v-col>
            </v-row>


            <v-text-field v-model="email" :rules="phoneRules" label="Doctor Phone Number" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="Doctor E-mail" required></v-text-field>

            <!-- <v-textarea v-model="email" :rules="emailRules" label="Patient Address" required></v-textarea> -->
            

            <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
            required></v-checkbox> -->

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                Create Profile
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset
            </v-btn>
        </v-form>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        valid: true,
        firstname: '',
        lastname: '',
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        patientRules: [
            v => !!v || 'Doctor ID is required',
            v => (v && v.length == 10) || 'Patient ID must be equal to 10 characters',
        ],
        phoneRules: [
            v => !!v || 'Phone No. is required',
            v => (v && v.length == 10) || 'Phone No. must be equal to 10 characters',
        ],

    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>