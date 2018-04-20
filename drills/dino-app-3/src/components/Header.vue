<template>
  <div id='header'>
    <img id='header-img' src="../assets/g-dino.png" alt='Dinosaur Logo'>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  grid-row: 1/ 2;
  display: grid;
  grid-template-columns: 25% 50% 15%;
  grid-template-rows: 50% 50%;
  margin-left: 22px;
}

#header-img {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  height: 100px;
  width: auto;
}
</style>