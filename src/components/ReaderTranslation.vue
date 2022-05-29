<template>
  <div class="absolute -top-2 -left-2 px-4 py-2 bg-white rounded shadow z-30">
    <h4 class="whitespace-nowrap font-semibold mb-2">{{ filteredWord }}</h4>
    <div class="flex flex-col" v-if="translations">
      <ReaderTranslationButton
        :class="{ 'mt-1': index }"
        v-for="(translation, index) in translations"
        :key="translation + index"
        >{{ translation }}</ReaderTranslationButton
      >
    </div>
    <AppSpinner v-else />
  </div>
</template>

<script>
import ReaderTranslationButton from './ReaderTranslationButton';
import AppSpinner from './AppSpinner';

export default {
  components: {
    ReaderTranslationButton,
    AppSpinner,
  },
  props: {
    word: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      translations: null,
    };
  },
  computed: {
    filteredWord() {
      return this.word.replace(/\.|,|;/g, '');
    },
  },
};
</script>
