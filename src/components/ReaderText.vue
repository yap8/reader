<template>
  <ReaderParagraph
    v-for="(paragraph, index) in paragraphs"
    :paragraph="paragraph"
    :paragraphIndex="index"
    :key="'paragraph-' + index"
  />
</template>

<script>
import ReaderParagraph from './ReaderParagraph.vue';

export default {
  components: {
    ReaderParagraph,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    paragraphs() {
      return this.text.split('\n').filter((paragraph) => paragraph.trim());
    },
  },
};
</script>

<style></style>
