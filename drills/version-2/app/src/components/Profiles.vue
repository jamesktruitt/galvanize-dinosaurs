<template>
  <li id='dino-card'>
    <header class='dino-header' @click='skillsToggle = !skillsToggle'>
      <img class='dino-img' :src='dino.image'/>
      <h2>{{ dino.name }}</h2>
    </header>
    <section class='skills-container' :class='{ hidden : skillsToggle }'>
        <SkillsLists :skills='dino.skills'/>
    </section>
  </li>
</template>

<script>
import SkillsLists from './SkillsLists'

export default {
  name: 'Profiles',
  components: {
    SkillsLists
  },
  props: {
    dino: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      skillsToggle: true
    }
  }
}
</script>

<style scoped>
  #dino-card {
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    padding: 10px;
    width: 60%;
    margin-left: 15vw;
  }

  .dino-header {
    display: flex;
    flex-flow: row nowrap;
    margin: 10px
  }

  .dino-img {
    width: 100px;
    height: 100px;
    border: 1px solid darkgrey;
    margin: 0 10px 0 10px;
  }

  .hidden {
    display: none;
  }
</style>
