<template>
  <button
    class="whitespace-nowrap py-1 px-2 text-base text-white bg-blue-500 rounded transition hover:bg-blue-600"
    @click="handleClick"
  >
    {{ translation }}
  </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    translation: {
      type: String,
      required: true,
    },
    word: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['addTranslation']),
    handleClick() {
      this.addTranslation([this.word, this.translation]);
    },
  },
};
</script>

<style></style>
