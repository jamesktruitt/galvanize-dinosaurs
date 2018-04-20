<template>
  <div id='input-form'>
    <label>Apply Here:</label>
    <form id='application-input'>
      <textarea id='application-text' cols="100" rows="8" v-model='applicationText'/>/<br>
      <section>
        <input id='submit' value='Submit' type="submit" @click.prevent='submitApplication'/>
      </section>
    </form>
    <p id='message'> {{ message }} </p>
  </div>
</template>

<script>
import Preview from './Preview'

export default {
  name: 'InputForm',
  props: ['getText'],
  components: {
    Preview
  },
  data() {
    return {
      applicationText: '',
      message: ''
    }
  },
  watch: {
    applicationText(newText) {
      this.getText(newText)
    }
  },
  methods: {
    submitApplication() {
      this.message = 'Your application was submitted!'
    },
  }
}
</script>

<style scoped>
#input-form {
  color: #1B997A;  
}
</style>