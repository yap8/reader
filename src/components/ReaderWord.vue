<template>
  <span class="inline-block relative">
    <ReaderTranslation v-if="active" :word="word" />
    <button
      :class="[
        'relative py-px px-2 rounded hover:bg-slate-100',
        { 'bg-slate-100': active },
      ]"
      @click="handleWordClick"
    >
      {{ word }}
    </button>
  </span>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

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
  computed: {
    ...mapState(['wordSelected']),
  },
  methods: {
    ...mapMutations(['setWordSelected']),
    handleWordClick() {
      setTimeout(() => {
        this.setWordSelected(true);
        this.active = true;
      }, 0);
    },
  },
  mounted() {
    document.addEventListener('click', () => {
      this.setWordSelected(false);
      this.active = false;
    });
  },
};
</script>
