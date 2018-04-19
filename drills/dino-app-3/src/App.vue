<template>
  <div id="app">
    <Header/>
    <main>
      <JobDetails/>
      <InputForm/>
    </main>
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
      JobDetails,
      InputForm
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

}

</style>