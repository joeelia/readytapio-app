<template>
  <div
    class="sticky top-0 md:flex md:items-center md:justify-between bg-blueGray-100"
  >
    <div class="flex-1 min-w-0">
      <h1
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
      >
        Back End Developer
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixedHeader",
  props: {
    title: String
  }
};
</script>
