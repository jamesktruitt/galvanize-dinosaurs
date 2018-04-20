<template>
  <div id='app'>
      <TheHeader/> Component
      <main>
        <TheJobList v-bind:jobListData='listingData'/>
        <TheJobForm v-bind:sendListing='postListing'/>
      </main>
      <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheJobList from './components/TheJobList'
import TheJobForm from './components/TheJobForm'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
      TheHeader,
      TheJobList,
      TheJobForm,
      TheFooter
  },
  data() {
    return {
      apiURL: '../static/listings.json',
      listingData: []
    }
  },
  mounted() {
    this.getListings();
  },
  methods: {
    getListings() {
      fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.listingData = response
        })
    },
    postListing(listing) {
      this.listingData.unshift(listing)
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  margin: 0 30px 0 30px;
  padding: 0;
  font-family: sans-serif;
  color: #1B997A;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}

main {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 5% 42.5% 5% 42.5% 5%;
}
</style>
