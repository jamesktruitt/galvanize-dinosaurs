<template>
  <div id="app">
    <Header/>
    <main id='dino-container'>
      <h2>Profiles</h2>
    </main>
    <ul id='dino-list'>
      <Profiles v-for='(dino, index) in dinos' :dino='dino' :key='index'/>
    </ul>
    <TheFooter/>
  </div>
</template>

<script>
import Header from './components/Header'
import TheFooter from './components/TheFooter'
import Profiles from './components/Profiles'
import SkillsLists from './components/SkillsLists'

export default {
  name: 'app',
  components: {
    Header,
    TheFooter,
    Profiles,
    SkillsLists
  },
  data () {
    return {
      dinos: []
    }
  },

  mounted () {
    const url = './dinosaurs.json'
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.dinos = response
      })
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    margin: 0 30px 0 30px;
    padding: 0;
    font-family: sans-serif;
    color: #1B997A;
    grid-template-rows: 15% 75% 10%;
}

main h2 {
  margin-left: 15vw;
}

#dino-list {
  padding: 0 20px 0 20px;
  grid-template-columns: repeat(auto-fit, x100%);
  grid-gap: 10px;
  margin: 0 auto;
}
</style>
