<template>
    <div id="about">
        <v-container>
            <v-row>
                <v-col cols="6" offset="3" class="fs-1_2">
                    <h2 class="fs-4 dancing-script mb-2 mt-2 flex-grow-0 text-center">About me</h2>
                    <v-divider  class="my-2"/>
                    <p>
                        Hello! My name is Geneviève and welcome to my book blog.
                    </p>
                    <p>
                        This blog was made since I read a lot of books in my spare time and I thought why not share my thoughts on the books that I've read with everyone who is interested.
                    </p>
                    <p>
                        On this blog you can find all the books I've read. My main reading genres are Young Adult and Fantasy.
                    </p>
                    <p>
                        My native language is not English so I'm sorry for any spelling errors in my reviews.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" offset="3" class="fs-1_2">
                    <h2 class="fs-4 dancing-script mb-2 mt-2 flex-grow-0 text-center">About Geneviève</h2>
                    <v-divider  class="my-2"/>
                    <p>
                        My name is Geneviève Oudwater, I am {{Age}} years old and I live in a town called Rockanje in Zuid-Holland, The Netherlands.
                    </p>
                    <p>
                        I've spent my whole life reading books and my current boyfriend came actually up with the idea of starting a blog. My current boyfriend also likes making nicknames for me and one day he came up with the nickname Nugget. This nickname stuck with me hence this blog being called Nuggets Books Blog.
                    </p>
                    <p>
                        In my house live 2 cats with me, they're called Loes and Hayley sometimes they can be on my nerves but they also like cuddles.
                    </p>
                    <p>
                        This blog was actually built by my boyfriend and as a reward for him he gets many cuddles. And for the technical people out there this blog was build with Vue and using Vuetify.
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import moment from "moment"
export default {
    name: 'About',
    computed: {
        Age(){
            return moment().diff(moment("24 May 2002"), "years")
        }
    }
}
</script>