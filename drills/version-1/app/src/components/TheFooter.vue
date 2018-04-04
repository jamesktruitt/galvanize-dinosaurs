<template>
  <div id='footer'>
    <small>&copy; 2018</small>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  padding: 5px;
}

footer small {
  margin: 0 auto;
}

small {
  color: black;
  font-size: .5rem;
  margin-left: 10px;
}
</style>