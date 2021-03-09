<template>
  <div class="reviews">
    <v-container>
      <v-row class="mx-2">
        <v-col class="text-center">
          <h2 class="fs-3 dancing-script">Reviews</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center pb-0">
          <h4>Filter on published date</h4> 
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="text-center py-0 my-2" cols="auto">
          <v-btn v-for="month in months" v-bind:key="month" tile class="px-2 my-1 ml-1 bg-tertiary" :class="{ active: (selected_month == month) }" min-width="36" @click="setMonthFilter(month)">{{month}}</v-btn>
        </v-col>
        <v-col cols="auto" class="pa-0">
          <v-select
            :items="years"
            label="Year"
            v-model="selected_year"
            attach
            @change="setYearFilter()"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center pb-0">
          <h4>Filter on author</h4> 
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col class="text-center pt-0">
          <v-btn v-for="letter in alphabet" v-bind:key="letter" tile class="px-2 my-1 ml-1 bg-tertiary" :class="{ active: (selected_letter == letter || selected_letter == '' && letter == 'all') }" min-width="36" @click="setLetterFilter(letter)">{{letter}}</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-container v-if="!selected_letter && !selected_author">
            <v-row>
              <v-col class="d-flex flex-column justify-center">
                <h3>All authors</h3>
              </v-col>
              <v-col cols="auto">
                <v-text-field label="Search title or author" v-model="filterValue" @input="onFilterChange()"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="(book, i) in books" :key="i">
                <BookCard :title="book.title" imageName="from_blood_and_ash.jpeg" text="Book review 1" :rating=2 :author="book.author" genre="Fantasy/Romance" :age=18 :border=true series="From Blood and Ash" :seriesBookNum=1 />
              </v-col>
            </v-row>
          </v-container>
          <v-container v-else-if="selected_letter && !selected_author">
            <v-row>
              <v-col class="d-flex flex-column justify-center">
                <h3>Authors starting with letter:<span class="ml-1 text-uppercase">{{selected_letter}}</span></h3>
              </v-col>
              <v-col cols="auto">
                <v-text-field label="Search author" v-model="filterValue" @input="onFilterChange()"/>
              </v-col>
            </v-row>
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
          <v-container v-else-if="selected_letter && selected_author">
            <v-row>
              <v-col class="d-flex flex-column justify-center">
                <h3>Books by: {{selected_author}}</h3>
              </v-col>
              <v-col cols="auto">
                <v-text-field label="Search title" v-model="filterValue" @input="onFilterChange()"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" lg="4"  v-for="(book, i) in books" :key="i">
                <BookCard :title="book.title" imageName="from_blood_and_ash.jpeg" text="Book review 1" :rating=2 :author="book.author" genre="Fantasy/Romance" :age=18 series="From Blood and Ash" :border=true />
              </v-col>
            </v-row>
          </v-container>
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
import moment from "moment";
export default {
  name: 'Reviews',
  components: {
    BookCard
  },
  data() {return {
    alphabet: ['all', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    years: ['All', '2021'],
    months: [],
    selected_year: 'All',
    selected_month: 'All',
    selected_letter: '',
    selected_author: '',
    allBooks: [
      {title: "Test", author: "James", date: "20-01-2021"},
      {title: "Test2", author: "James", date: "21-01-2021"},
      {title: "Test3", author: "James", date: "22-01-2021"},
      {title: "John's dish", author: "John", date: "23-01-2021"},
    ],
    filteredAuthors: [],
    books: [],
    filterValue: ''
  }},
  created() {
    this.updateMonthButtons();
    this.onFilterChange();
  },
  methods: {
    setYearFilter(){
      this.updateMonthButtons();
      this.selected_month = 'All';
      this.onFilterChange();
    },

    updateMonthButtons(){
      let today = moment();
      this.months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      if(this.selected_year != 'All' && today.year() == this.selected_year){
        this.months = this.months.slice(0, today.month() + 2);
      }
    },

    setMonthFilter(month){
      this.selected_month = month;
      this.onFilterChange();
    },

    setLetterFilter(letter){
      if(letter == 'all'){
        this.selected_letter = '';
        this.selected_author = '';
        this.filteredAuthors = [];
        this.books = this.allBooks;
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
      this.books = [];
      this.allBooks.forEach(book => {
        let author = book.author;
        if(author[0].toLowerCase() == this.selected_letter && !this.filteredAuthors.includes(author))
          this.filteredAuthors.push(author);
      })
    },
    updateFilteredBooks(){
      this.books = [];
      this.allBooks.forEach(book => {
        let author = book.author;
        if(author == this.selected_author)
          this.books.push(book);
      })
    },
    onFilterChange(){
      this.books = [];
      this.filteredAuthors = [];
      this.allBooks.forEach(book => {
        let isAdded = false;
        let bookAllowedToBeAdded = true;
        let reviewDate = moment(book.date, "DD-MM-YYYY");
        if(this.selected_author && book.author != this.selected_author)
          bookAllowedToBeAdded = false;

        if(this.selected_year != "All" && reviewDate.year() != this.selected_year)
          bookAllowedToBeAdded = false;

        if(this.selected_month != "All" && reviewDate.month() != this.months.indexOf(this.selected_month) - 1)
          bookAllowedToBeAdded = false;

        if(bookAllowedToBeAdded){
          if(book.title.toLowerCase().includes(this.filterValue.toLowerCase()) && !isAdded){
            this.books.push(book);
            isAdded = true;
          }
  
          if(book.author.toLowerCase().includes(this.filterValue.toLowerCase()) && !isAdded){
            this.books.push(book);
            isAdded = true;
          }
        }
      })

      this.books.forEach(book => {
        let author = book.author;
        if(author.toLowerCase().includes(this.filterValue.toLowerCase()) && !this.filteredAuthors.includes(author))
          this.filteredAuthors.push(author);
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
