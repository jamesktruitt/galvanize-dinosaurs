<template>
  <div id="app">
    <Header/>
    <main>
      <JobDetails :jobDetails='jobDetails'/>
      <InputForm :getText='getText'/>
      <button id='preview-toggle' @click.self.prevent='togglePreview = !togglePreview'>Show Preview</button>
      <Preview class='application-preview' :applicationText='applicationText' :class='{ hidden : togglePreview }'/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import InputForm from './components/InputForm'
import JobDetails from './components/JobDetails'
import Preview from './components/Preview'
import Footer from './components/Footer'
  
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    JobDetails,
    InputForm,
    Preview
  },
  data() {
    return {
      togglePreview: true,
      applicationText: '',
      jobDetails: {}
    }
  },
  created() {
    fetch('/listing.json')
    .then(response => response.json())
    .then(response => {
      this.jobDetails = response
    })
  },
  methods: {
    getText(text) {
      this.applicationText = text
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: sans-serif;
  display: grid;
  grid-template-rows: 15% 75% 10%;
}

main {
  grid-row: 2 /3;
  width: 70%;
  margin-left: 8em;
}

.hidden {
  display: none;
}

</style>