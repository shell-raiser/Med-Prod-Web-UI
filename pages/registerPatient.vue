<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="firstname" :rules="nameRules" label="First name" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field v-model="lastname" :rules="nameRules" label="Last name" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field :rules="patientRules" :counter="10" label="Patient ID" required></v-text-field>
                </v-col>
            </v-row>

            <v-text-field :counter="10" :rules="deviceRules" label="Device ID" required></v-text-field>
            <v-text-field v-model="email" :rules="phoneRules" label="Patient Phone Number" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="Patient E-mail" required></v-text-field>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field v-model="firstname" :rules="emailRules" label="Emergency Contact 1" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field v-model="lastname" :rules="emailRules" label="Emergency Contact 2" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field :rules="emailRules" label="Emergency Contact 3" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <!-- <v-textarea v-model="email" :rules="emailRules" label="Patient Address" required></v-textarea> -->
            <v-select v-model="select" :items="doctors" :rules="[v => !!v || 'Item is required']" label="Doctors"
                required>
            </v-select>

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
        deviceRules: [
            v => !!v || 'Device ID is required',
            v => (v && v.length == 10) || 'Device ID must be equal to 10 characters',
        ],
        patientRules: [
            v => !!v || 'Patient ID is required',
            v => (v && v.length == 10) || 'Patient ID must be equal to 10 characters',
        ],
        phoneRules: [
            v => !!v || 'Phone No. is required',
            v => (v && v.length == 10) || 'Phone No. must be equal to 10 characters',
        ],
        select: null,
        doctors: [
            'Doctor 1',
            'Doctor 2',
            'Doctor 3',
            'Doctor 4',
        ],
        checkbox: false,
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