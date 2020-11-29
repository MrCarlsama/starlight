<template>
  <Index />
</template>

<script>
import {defineAsyncComponent} from 'vue';

export default {
  name: 'App',
  components: {
    Index: defineAsyncComponent(() => import('./components/Index.vue')),
  },
};
</script>
