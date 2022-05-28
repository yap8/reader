<template>
  <p class="mb-4">
    <ReaderWord
      v-for="(word, index) in words"
      :word="word"
      :key="'word-' + paragraphIndex + '-' + index"
    />
  </p>
</template>

<script>
import ReaderWord from './ReaderWord.vue';

export default {
  components: { ReaderWord },
  props: {
    paragraph: {
      type: String,
      required: true,
    },
    paragraphIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    words() {
      return this.paragraph.split(' ');
    },
  },
};
</script>

<style></style>
