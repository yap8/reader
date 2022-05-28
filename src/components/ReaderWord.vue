<template>
  <span class="inline-block relative">
    <ReaderTranslation v-if="active" :word="word" @click.stop />
    <button
      :class="[
        'relative py-px px-2 rounded transition hover:bg-slate-100',
        { 'bg-slate-100': active },
      ]"
      @click="handleWordClick"
    >
      {{ word }}
    </button>
  </span>
</template>

<script>
import ReaderTranslation from './ReaderTranslation';

export default {
  components: {
    ReaderTranslation,
  },
  props: {
    word: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleWordClick(e) {
      e.stopPropagation();

      this.active = !this.active;
    },
  },
  mounted() {
    document.addEventListener('click', () => (this.active = false));
  },
};
</script>
