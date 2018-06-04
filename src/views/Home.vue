<template>
  <div class="home">
   <tailwind-test />
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
