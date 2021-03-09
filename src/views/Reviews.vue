<template>
  <div class="reviews">
    <v-container fluid>
      <v-row class="mx-2">
        <v-col>
          <h2 class="fs-2 dancing-script">All my reviews</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <v-btn v-for="letter in alphabet" v-bind:key="letter" tile class="px-2 my-1 ml-1 bg-tertiary" :class="{ active: (selected_letter == letter || selected_letter == '' && letter == 'all') }" min-width="36" @click="setLetterFilter(letter)">{{letter}}</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list flat class="py-0" v-if="!selected_letter && !selected_author">
            <v-subheader class="pa-0">
              <v-container>
                <v-row>
                  <v-col class="d-flex flex-column justify-center">
                    <h3 class="black--text fs-1_5">All books</h3>
                  </v-col>
                  <v-col cols="5" md="4" lg="3">
                    <v-text-field label="Search" v-model="filterValue" @input="OnFilterChange()"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-subheader>
            <v-container>
              <v-row>
                <v-col cols="12" md="6" lg="4" v-for="(book, i) in books" :key="i">
                  <BookCard :title="book.title" imageName="from_blood_and_ash.jpeg" text="Book review 1" :rating=2 :author="book.author" genre="Fantasy/Romance" :age=18 :border=true series="From Blood and Ash" :seriesBookNum=1 />
                </v-col>
              </v-row>
            </v-container>
          </v-list>
          <v-list flat class="py-0" v-else-if="selected_letter && !selected_author">
            <v-subheader class="pa-0"><h3 class="black--text fs-1_5">Authors starting with letter:<span class="ml-1 text-uppercase">{{selected_letter}}</span></h3></v-subheader>
            <v-container>
              <v-row class="flex-column" v-for="(author, i) in filteredAuthors" :key="i">
                <v-col cols="12" offset="0" md="4" offset-md="4" class="pa-1">
                  <v-btn
                    block
                    @click="setAuthorFilter(author)"
                    class="bg-tertiary"
                  >
                  {{author}}
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-list>
          <v-list flat class="py-0" v-else-if="selected_author">
            <v-subheader class="pa-0 black--text fs-1_5"><h3 class="black--text fs-1_5">Books by: {{selected_author}}</h3></v-subheader>
            <v-container>
              <v-row>
                <v-col cols="12" md="6" lg="4"  v-for="(book, i) in filteredBooks" :key="i">
                  <BookCard :title="book.title" imageName="from_blood_and_ash.jpeg" text="Book review 1" :rating=2 :author="book.author" genre="Fantasy/Romance" :age=18 series="From Blood and Ash" :border=true />
                </v-col>
              </v-row>
            </v-container>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
  .active{
    font-weight: 800;
    background-color: #6e98ae !important;
  }
</style>

<script>
import BookCard from "../components/BookCard.vue";
export default {
  name: 'Reviews',
  components: {
    BookCard
  },
  data() {return {
    alphabet: ['all', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    selected_letter: '',
    selected_author: '',
    allBooks: [
      {title: "Test", author: "James"},
      {title: "Test2", author: "James"},
      {title: "Test3", author: "James"},
      {title: "John's dish", author: "John"},
    ],
    books: [],
    filteredAuthors: [],
    filteredBooks: [],
    filterValue: ''
  }},
  created() {
    this.books = this.allBooks
  },
  methods: {
    setLetterFilter(letter){
      if(letter == 'all'){
        this.selected_letter = '';
        this.selected_author = '';
      }
      else{
        this.selected_letter = letter;
        this.updateFilteredAuthors();
      }
    },
    setAuthorFilter(author){
      this.selected_author = author;
      this.updateFilteredBooks();
    },
    updateFilteredAuthors(){
      this.filteredAuthors = [];
      this.selected_author = '';
      this.filteredBooks = [];
      this.books.forEach(book => {
        let author = book.author;
        if(author[0].toLowerCase() == this.selected_letter && !this.filteredAuthors.includes(author))
          this.filteredAuthors.push(author);
      })
    },
    updateFilteredBooks(){
      this.filteredBooks = [];
      this.books.forEach(book => {
        let author = book.author;
        if(author == this.selected_author)
          this.filteredBooks.push(book);
      })
    },
    OnFilterChange(){
      this.books = [];
      this.allBooks.forEach(book => {
        let isAdded = false;
        if(book.title.includes(this.filterValue) && !isAdded){
          this.books.push(book);
          isAdded = true;
        }

        if(book.author.includes(this.filterValue) && !isAdded){
          this.books.push(book);
          isAdded = true;
        }
      })
    }
  },
  computed: {
    getBooks(){
      return this.books.filter(book => book.Author[0] == this.selected_letter);
    }
  }
}
</script>
