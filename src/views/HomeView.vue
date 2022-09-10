<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <button @click="goToDaybook" type="button" class="btn btn-primary">Primary</button>
  <button @click="goToDaybook" type="button" class="btn btn-secondary">Secondary</button>
  <button @click="goToDaybook" type="button" class="btn btn-success">Success</button>
  <button @click="goToDaybook" type="button" class="btn btn-danger">Danger</button>
  <button @click="goToDaybook" type="button" class="btn btn-warning">Warning</button>
  <button @click="goToDaybook" type="button" class="btn btn-info">Info</button>
  <button @click="goToDaybook" type="button" class="btn btn-light">Light</button>
  <button @click="goToDaybook" type="button" class="btn btn-dark">Dark</button>
</template>

<script>
export default {
  methods:{
      goToDaybook(){
        console.log('ss')
          this.$router.push({ name:'no-entry' })
      }
  }
}
</script>
