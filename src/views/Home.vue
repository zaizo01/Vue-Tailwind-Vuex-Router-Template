<template>
  <div class="home">
    <img src="../assets/logo.png">
   <tailwind-test />>
  </div>
</template>

<script>
// @ is an alias to /src
import TailwindTest from '@/components/TailwindTest.vue'

export default {
  name: 'home',
  components: {
    TailwindTest
  }
}
</script>
