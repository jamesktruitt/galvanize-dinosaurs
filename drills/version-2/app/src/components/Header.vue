<template>
  <div id='Header'>
    <img id='header-img' src='/g-dino.png' alt='Dinos Logo'/>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  #Header {
    grid-row: 1/ 2;
    display: grid;
    grid-template-columns: 25% 50% 15%;
    grid-template-rows: 50% 50%;
    padding-top: 10px;
  }

  #header-img {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    height: 100px;
    width: auto;
  }

</style>
