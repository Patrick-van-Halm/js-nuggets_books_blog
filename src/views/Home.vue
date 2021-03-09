<template>
  <div class="home">
    <section class="bg-secondary py-3 px-5 elevate-3" id="month-books">
      <h2 class="my-2 text-center dancing-script">Books I've read this month</h2>
      <Carousel :books="books" />
    </section>

    <section id="content">
      <v-container fluid>
        <v-row class="bg-tertiary">
          <v-col>
            <h2 class="text-center dancing-script">The last 3 books I've read</h2>
            <v-container>
              <v-row>
                <v-col cols="12" md="6" xl="4" class="my-auto">
                  <BookCard title="From Blood and Ash" imageName="from_blood_and_ash.jpeg" text="Book review 1" :rating=2 author="Jennifer L. Armentrout" genre="Fantasy/Romance" :age=18 />
                </v-col>
                <v-col cols="12" md="6" xl="4" class="my-auto">
                  <BookCard title="Kingdom of Flesh and Fire" imageName="kingdom_of_flesh_and_fire.jpeg" text="Book review 2" :rating=4 author="Jennifer L. Armentrout" genre="Fantasy/Romance" :age=18 />
                </v-col>
                <v-col cols="12" offset="0" md="6" offset-md="3" offset-xl="0" xl="4" class="my-auto">
                  <BookCard title="Balance" imageName="balance.jpeg" text="Book review 3" :rating=3.5 author="Lucia Franco" genre="Romance/Erotic" :age=18 />
                </v-col>
              </v-row>  
            </v-container>
          </v-col>
        </v-row>
        <v-row class="bg-secondary">
          <v-col>
            <h2 class="text-center dancing-script">Who am I?</h2>
            <div class="introduction pa-4">
              <p class="text-center indie-flower fs-1_5">Hello my name is Geneviève</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import Carousel from "@/components/HomeCarousel.vue";
import BookCard from "@/components/BookCard.vue";
export default {
  name: 'Home',
  data() {
    return {
      books: [
        {
          id: "51beea90-c1c6-4c37-afc5-d233bd6b0e21",
          cover: "from_blood_and_ash.jpeg",
        },
        {
          id: "d19de252-b43d-4217-9eb8-8a358101982c",
          cover: "kingdom_of_flesh_and_fire.jpeg",
        },
        {
          id: "d09e6abb-c8d9-4518-8d61-d0cc1c38f001",
          cover: "balance.jpeg",
        },
      ]
    }
  },
  components: {
    Carousel,
    BookCard
  }
}
</script>
