<template>
  <div class="search">
    <img class="bolt" src="download.png" />
    <h1>{{ msg }}</h1>
    <br />
    <p>
      Please enter any term below :
    </p>
    <br />
    <br />
   <form class="search-form" v-on:submit.prevent="searchTerm">
    <input class="term" type="text" v-model="search" placeholder="enter term here"/> 
    <button id="button" v-on:click="searchTerm()">Search</button>
  </form>
  <div class="tile-container">
      <div class="tile" v-for="data in bookResults" v-bind:key="data.title">
        <h3>
          {{ data.title }}
        </h3>
        <img class="book-image" :src="data.imageUrl"> 
        <p>By: {{ data.authorName}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import BookService from '../services/BookService.js';

export default {
  name: 'Search',
  props: {
    msg: String,
    list: Object,
  },
  data() {
    return {
      search: "", 
      bookResults: [],
    }
  },
  methods: {
    searchTerm() {
      BookService.getTerm(this.search).then((response) => {
        this.bookResults = response.data.list;
      });
    },
    
  },
};
</script>

<style scoped>
button:hover {
  font-style: italic;
  font-weight: bolder;
  color: #333;
  text-shadow: 2px 2px 1px #ffcccc;
}

#button {
  margin-left: 5px;
   border-block-width: medium;
}

p {
  color: black;
}

.tile-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.term {
  border-block-width: medium;
}

.tile {
  border: 3px solid #ffcccc;
  border-radius: 3px;
  box-shadow: 6px 6px 2px #dddddd;
  width: 300px;
  height: auto;
  margin: 20px;
  word-wrap: break-word;
}

.tile > h3 {
  display: flex;
  justify-content: center;
}

.tile > p {
  margin: 5px 10px;
}


</style>
