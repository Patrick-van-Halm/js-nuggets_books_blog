<template>
    <v-container>
        <v-row class="black--text white rounded height">
            <v-col cols="5" class="pa-0 height">
                <v-img
                :src="require(`@/assets/covers/${this.imageName}`)"
                class="rounded-l h-100"
                />
            </v-col>
            <v-col cols="7" class="height rounded-r" v-bind:class="{ 'border': border }">
                <div class="book-info d-flex flex-column h-100">
                    <h3 class="flex-grow-0 text-center">{{title}}</h3>
                    <hr>
                    <div class="flex-grow-1">
                        <p class="mb-0"><strong>Author:</strong><br>{{author}}</p>
                        <p class="mb-0"><strong>Genre:</strong><br>{{genre}}</p>
                        <p class="mb-0"><strong>Rating:</strong><br>{{age}}+</p>
                        <p class="mb-0" v-if="series"><strong>Series:</strong><br>{{series}} (Book {{seriesBookNum}})</p>
                    </div>
                    <v-rating
                        :value=rating
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        half-increments
                        readonly
                        :size="this.getRatingFontSize"
                        class="flex-grow-0 text-center"
                    />
                    <v-btn small class="flex-grow-0 bg-tertiary text-none" right ripple tile>Read review >></v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.h-100{
    height: 100%;
}

.border {
    border: 1px black solid;
    border-left-width: 0;
}

.height{
    max-height: 350px;
    min-height: 258px;
}

.v-rating .v-icon{
    padding: 0.25rem !important;
    font-size: 16px;
}
</style>

<script>
export default {
    props: {
        title: String,
        author: String,
        genre: String,
        age: Number,
        imageName: String,
        rating: Number,
        series: String,
        seriesBookNum: Number,
        border: Boolean,
    },
    computed: {
        getRatingFontSize(){
            if(this.$screen.width <= 320)
                return 16;
            else
                return 24;
        }
    }
}
</script>