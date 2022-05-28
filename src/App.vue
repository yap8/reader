<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
body {
  @apply bg-gray-100;
}
</style>
