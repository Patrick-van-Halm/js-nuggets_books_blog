<template>
    <div id="about" class="d-flex flex-column justify-center h-100">
        <h2 class="fs-4 dancing-script mb-2 mt-2 flex-grow-0 text-center">Contact me</h2>
        <v-container>
            <v-row>
                <v-col cols="12" md="10" offset-md="1" lg="6" offset-lg="3" offset-xl="3" xl="6" class="fs-1_2">
                    <v-divider  class="my-2"/>
                    <p>If you want to contact me you can do that through mail which is: [EMAIL HERE] <br>Or by clicking the button bellow to mail me instantly</p>
                    <div class="d-flex justify-center">
                        <v-btn tile class="px-2 my-1 mx-auto bg-tertiary" min-width="36" href="mailto:MAIL">Mail me now</v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="10" offset-md="1" lg="6" offset-lg="3" offset-xl="3" xl="6" class="fs-1_2">
                    <v-divider  class="my-2"/>
                    <h3 class="fs-2 dancing-script text-center mb-2">My social media</h3>
                    <div class="d-flex justify-space-around">
                        <v-btn tile class="px-2 my-1 mx-auto bg-tertiary" min-width="36" href="mailto:MAIL">Tiktok</v-btn>
                        <v-btn tile class="px-2 my-1 mx-auto bg-tertiary" min-width="36" href="mailto:MAIL">Instagram</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>