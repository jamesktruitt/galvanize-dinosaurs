<template>
  <div>
    <form id='application-input'>
      <label>Apply Here:</label>
      <textarea id="application-text" cols="100" rows="8" v-model='applicationText'></textarea>
      <input id='submit' value='Submit' type="submit" @click.prevent.reset='submitApplication'/>
    </form>
    <p id='message'> {{ message }} </p>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    getText: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      applicationText: '',
      message: ''
    }
  },
  watch: {
    applicationText (newText) {
      this.getText(newText)
    }
  },
  methods: {
    submitApplication() {
      this.message = 'Your application was submitted!'
    }
  }
}
</script>

<style scoped>
#application-input {
  margin-left: 8em;
  color: #1B997A;
}

form  {
  display: block;
}
</style>