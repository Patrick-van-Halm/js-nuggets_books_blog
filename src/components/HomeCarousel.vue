<template>
    <carousel-3d :width="this.getWidth" :height="this.getHeight" :border="0" :inverseScaling="400" :space="this.space" :controlsVisible="!this.$screen.touch" :loop="true">
        <slide v-for="(book, key) in books" v-bind:key="key" :index="key">
          <router-link :to="{ name: 'Review', params: { id: book.id }}"><v-img :src="require(`@/assets/covers/${book.cover}`)" :height="getHeight" class="my-auto"/></router-link>
        </slide>
      </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    components: {
        Carousel3d,
        Slide
    },
    props: {
        books: Array
    },
    computed: {
        space(){
            if(this.$screen.lg){
                return 340;
            }
            else if(this.$screen.md){
                return 272;
            }
            else{
                return 227;
            }
        },

        getHeight(){
            if(this.$screen.lg){
                return 396;
            }
            else if(this.$screen.md){
                return 317;
            }
            else{
                return 264;
            }
        },

        getWidth(){
            if(this.$screen.lg){
                return 275;
            }
            else if(this.$screen.md){
                return 221;
            }
            else{
                return 184;
            }
        }
    }
}
</script>