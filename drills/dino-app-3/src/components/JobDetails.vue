<template>
    <section id='job-details'>
      <h2>Job Details</h2>
      <h4>{{ jobDetails.title }}</h4>
      <p>{{ jobDetails.description }}</p>
    </section>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['jobDetails']
}
</script>

<style scoped>
#job-details {
  color: #1B997A;
  padding:
}

</style>