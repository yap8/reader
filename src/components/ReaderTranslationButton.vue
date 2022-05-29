<template>
  <button
    class="whitespace-nowrap py-1 px-2 text-base text-white bg-blue-500 rounded transition hover:bg-blue-600"
  >
    {{ translation }}
  </button>
</template>

<script>
export default {
  props: {
    translation: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
