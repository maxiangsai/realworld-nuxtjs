<template>
  <div>
    <m-header />
    <Nuxt />
    <m-footer />
  </div>
</template>
<script>
import MHeader from './Header.vue'
import MFooter from './Footer.vue'
export default {
  components: {
    MHeader,
    MFooter,
  },
}
</script>
