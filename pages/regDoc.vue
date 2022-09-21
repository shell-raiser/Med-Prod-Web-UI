<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field id="name" v-model="name" :rules="nameRules" label="Name" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field id="id" :rules="patientRules" :counter="10" label="Doctor ID" required></v-text-field>
                </v-col>
            </v-row>


            <v-text-field id="phone" v-model="phoneNo" :rules="phoneRules" label="Doctor Phone Number" required>
            </v-text-field>
            <v-text-field v-model="email" id="email" :rules="emailRules" label="Doctor E-mail" required></v-text-field>


            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validateAndSubmit">
                Create Profile
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset
            </v-btn>
            <!-- <v-btn color="error" class="mr-4" @click="createDummy">
                create
            </v-btn> -->
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
        async validateAndSubmit() {
            this.$refs.form.validate()
            try {
                // await this.$fire.auth.createUserWithEmailAndPassword(
                await createUserWithEmailAndPassword(auth2, document.getElementById("email").value,
                    'testtesttest').then(function (firebaseUser) {
                        console.log("User " + firebaseUser + " created successfully!");
                    }
                    ).then(async data => {
                        await updateProfile(auth2.currentUser, { displayName: document.getElementById("name").value });
                        await this.$fire.database.ref(this.$fire.auth.currentUser.displayName + '/doctors/' + auth2.currentUser.displayName).set({
                            name: document.getElementById("name").value,
                            email: document.getElementById("email").value,
                            phone: document.getElementById("phone").value,
                            id: document.getElementById("id").value,
                        });
                        //I don't know if the next statement is necessary
                        auth2.signOut();
                    })
                    // .then(async data => { await auth2.setCustomUserClaims(auth2.currentUser.uid, { doctor: true }) })
                    .catch(error => {
                        console.log(error);
                    });
            } catch (e) {
                // console.log(document.getElementById("email").value)
                console.log(e)
                // handleError(e)
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        // async createDummy() {
        //     try {
        //         await this.$fire.database.ref('anHospital/doctors/' + 12345678).set({
        //             // username: name,
        //             name: document.getElementById("name").value,
        //             email: document.getElementById("email").value,
        //             phone: document.getElementById("phone").value,
        //             id: document.getElementById("id").value,
        //         });

        //     } catch (e) {
        //         // console.log(document.getElementById("email").value)
        //         console.log(e)
        //         // handleError(e)
        //     }

        // }


    },
}
</script>