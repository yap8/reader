<template>
  <button class="py-px px-2 rounded transition hover:bg-slate-100">
    {{ word }}
  </button>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
