<template>
  <div class="reviews">
    <v-container fluid>
      <v-row class="mx-2">
        <v-col>
          <h2 class="fs-2 dancing-script">All my reviews</h2>
        </v-col>
      </v-row>
      <v-row >
        <v-col class="d-flex justify-content-center flex-column pl-0" cols="1">
          <v-btn v-for="letter in alphabet" v-bind:key="letter" tile class="px-0" :class="{ active: (selected_letter == letter || selected_letter == '' && letter == 'all') }" min-width="36" @click="setLetterFilter(letter)">{{letter}}</v-btn>
        </v-col>
        <v-col>
          <v-list flat class="py-0" v-if="!selected_letter && !selected_author">
            <v-subheader class="pa-0 black--text fs-1_5">All books</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(book, i) in books"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title>{{book.title}} - {{book.author}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-list flat class="py-0" v-else-if="selected_letter && !selected_author">
            <v-subheader class="pa-0 black--text fs-1_5">Authors starting with letter:<span class="ml-1 text-uppercase">{{selected_letter}}</span></v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(author, i) in filteredAuthors"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="author" @click="setAuthorFilter(author)"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-list flat class="py-0" v-else-if="selected_author">
            <v-subheader class="pa-0 black--text fs-1_5">Books by: {{selected_author}}</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(book, i) in filteredBooks"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="book.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
  .active{
    font-weight: 800;
    background-color: #cdcaca !important;
  }
</style>

<script>
export default {
  name: 'Reviews',
  data() {return {
    alphabet: ['all', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    selected_letter: '',
    selected_author: '',
    books: [
      {title: "Test", author: "James"}
    ],
    filteredAuthors: [],
    filteredBooks: []
  }},
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
    }
  },
  computed: {
    getBooks(){
      return this.books.filter(book => book.Author[0] == this.selected_letter);
    }
  }
}
</script>
