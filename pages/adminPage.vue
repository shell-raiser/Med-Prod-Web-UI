<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field id="name" v-model="name" :rules="nameRules" label="Hospital Name" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field id="phone" v-model="phoneNo" :rules="phoneRules" label="Hospital Phone Number"
                        required>
                    </v-text-field>
                </v-col>
            </v-row>



            <v-text-field id="addr" v-model="addr" :rules="addrRules" label="Hospital Address" required>
            </v-text-field>

            <v-text-field v-model="email" id="email" :rules="emailRules" label="Hospital E-mail" required>
            </v-text-field>


            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validateAndSubmit">
                Create Account
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset
            </v-btn>

        </v-form>
    </v-container>
</template>
<script>
// const firebase = require('firebase')
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// const firebase = initializeApp(firebaseConfig);
var config = {
    apiKey: "AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w",
    authDomain: "hospicare-app22.firebaseapp.com",
    databaseURL: "https://hospicare-app22-default-rtdb.firebaseio.com"
};
var secondaryApp = initializeApp(config, "Secondary");
var auth2 = getAuth(secondaryApp);

export default {
    data: () => ({
        valid: true,
        firstname: '',
        lastname: '',
        name: '',
        phoneNo: '',
        addr: '',
        nameRules: [
            v => !!v || 'Name is required',
            // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],addrRules: [
            v => !!v || 'Address is required',
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
        async validateAndSubmit() {
            this.$refs.form.validate()
            try {
                // await this.$fire.auth.createUserWithEmailAndPassword(
                await createUserWithEmailAndPassword(auth2, document.getElementById("email").value,
                    'testtest').then(function (firebaseUser) {
                        console.log("User " + firebaseUser + " created successfully!");
                    }
                    ).then(async data => {
                        await updateProfile(auth2.currentUser, { displayName: document.getElementById("name").value });
                        await this.$fire.database.ref(auth2.currentUser.displayName).set({
                            name: document.getElementById("name").value,
                            email: document.getElementById("email").value,
                            phone: document.getElementById("phone").value,
                            address: document.getElementById("addr").value,
                        });

                        auth2.signOut();
                    })

                    .catch(error => {
                        console.log(error);
                    });
            } catch (e) {
                console.log(e)
            }
        },
        reset() {
            this.$refs.form.reset()
        },
    },
}
</script>