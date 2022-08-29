const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()// trigger function on new user creation.
// when a new user is created this fucntion is triggered. When triggered a defualt
// data object is pushed to the roles collection, this object contains the user's role status
exports.AddUserRole = functions.auth.user().onCreate(async (authUser) => {
    if (authUser.email) {
        const customClaims = {
            admin: true,
        };
        try {
            var _ = await admin.auth().setCustomUserClaims(authUser.uid, customClaims)
            return db.collection("roles").doc(authUser.uid).set({
                email: authUser.email,
                role: customClaims
            })
        } catch (error) {
            console.log(error)
        }
    }
});