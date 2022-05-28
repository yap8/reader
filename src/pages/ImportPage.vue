<template>
  <div
    class="container max-w-4xl text-xl bg-white my-10 p-10 shadow rounded-lg whitespace-pre-line"
  >
    <form>
      <input
        class="w-full px-4 py-2 text mb-2 rounded border"
        placeholder="Enter the title..."
        required
      />
      <textarea
        class="p-4 w-full resize-y rounded mb-2 border h-48"
        placeholder="Enter the text you want to read (make sure it's formatted properly)..."
        required
      ></textarea>
      <button
        class="px-4 py-2 bg-blue-500 rounded text-white transition hover:bg-blue-600"
      >
        Import
      </button>
    </form>
  </div>
</template>
