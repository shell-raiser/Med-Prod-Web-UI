<template>
    <v-card to="/patientLogs" style="padding:20px;">
        <v-row class=" justify-space-around ">
            <span>NAME</span>
            <span>BP</span>
            <span>TEMP</span>
            <span>ECG</span>
            <span>SPO2</span>
        </v-row>
    </v-card>
</template>

<script >
export default ({
    methods: {
        consoleIt() {
            // console.log("clicked");

        }
    },
})
</script>
