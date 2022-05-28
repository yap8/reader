<template>
  <div class="absolute -top-2 px-4 py-2 bg-white rounded shadow z-30">
    <h4 class="mb-3">{{ word }}</h4>
    <div class="flex flex-col">
      <button
        class="whitespace-nowrap py-1 px-4 mb-1 text-base text-white bg-blue-500 rounded transition hover:bg-blue-600"
      >
        Translation 1
      </button>
      <button
        class="whitespace-nowrap py-1 px-4 text-base text-white bg-blue-500 rounded transition hover:bg-blue-600"
      >
        Translation 1
      </button>
    </div>
  </div>
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
