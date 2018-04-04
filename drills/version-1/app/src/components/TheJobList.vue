<template>
  <section id='TheJobList'>
    <h2>Job Listings</h2>
    <ul id='job-listings'>
      <li
        v-for='listing in jobListData'>
        <h4>{{listing.title}}</h4>
        <small>{{listing.pay}}</small>
        <p>{{listing.description}}</p>
        <small>{{listing.interested.length}} dinos are interested in this job</small>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TheJobList',
  props: ['jobListData']
}
</script>

<style scoped>
#TheJobList {
  grid-column: 2/3;
}

h2 {
  margin: 0;
  color: #61CCB1;
}

ul {
  list-style: none;
}

li {
  display: flex;
  flex-flow: column;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  padding: 10px;
}

h4 {
  margin: 0;
}

small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}

p {
  font-size: .8rem;
}
</style>
