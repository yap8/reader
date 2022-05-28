<template>
  <header class="bg-blue-500 shadow">
    <div class="container h-16 flex items-center justify-between">
      <!-- <h1 class="text-2xl text-white">Document_name</h1> -->
      <nav class="flex justify-end w-full">
        <router-link
          class="text-xl text-white p-2 mr-2 transition hover:underline"
          to="/"
          >Read</router-link
        >
        <router-link
          class="text-xl text-white p-2 mr-2 transition hover:underline"
          to="/import"
          >Import</router-link
        >
        <button class="text-xl text-white p-2 transition hover:underline">
          Export
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>
