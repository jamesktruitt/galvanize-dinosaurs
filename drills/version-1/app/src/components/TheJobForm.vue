'use-strict'
<template>
  <aside id='side-bar'>
    <h3>Add a Job</h3>
    <form class='job-form' v-on:submit.prevent='submitForm'>
      <label for='title'>Title</label>
      <input v-model='job.title' name='title'>
      <label for='pay'>Compensation</label>
      <input v-model='job.pay' name='pay'>
      <label for='description'>Description</label>
      <textarea v-model='job.description' name='description' rows='8' cols='40'></textarea>
      <input type='submit' name='submit' value='Submit'/>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'TheJobForm',
  props: ['sendListing'],
  data() {
    return {
      job: {
        title: '',
        pay: '',
        description: '',
        interested: []
      }
    }
  },
  methods: {
    submitForm() {
      this.sendListing(this.job);
    }
  }
}
</script>

<style scoped>
#side-bar {
  grid-column: 4/5;
}

form {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
</style>