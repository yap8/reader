<template>
  <div
    class="container max-w-4xl text-xl bg-white my-10 p-10 shadow rounded-lg whitespace-pre-line"
  >
    <h1 class="font-semibold text-3xl text-center mb-4">{{ title }}</h1>
    <ReaderText :text="text" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ReaderText from '@/components/ReaderText.vue';

export default {
  name: 'HomePage',
  components: {
    ReaderText,
  },
  computed: {
    ...mapState(['title', 'text']),
  },
};
</script>
