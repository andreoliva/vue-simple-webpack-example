<template>
  <header>
    <h1>Welcome to the {{env}} environment!</h1>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        env: ENVIRONMENT
      }
    }
  }
</script>
