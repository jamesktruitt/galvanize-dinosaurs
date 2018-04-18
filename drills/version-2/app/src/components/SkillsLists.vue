<template>
  <ul id='SkillsLists' class='skills-list'>
    <h4>Skills</h4>
    <li v-for='skill in skills' :key='skill'>{{ skill }}</li>
  </ul>
</template>

<script>
export default {
  name: 'SkillsLists',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  mounted () {
    // console.log(this.props.skills)
  }
}
</script>

<style scoped>
  .skills-list {
    list-style: none;
    margin-left: 10vw;
  }
</style>
