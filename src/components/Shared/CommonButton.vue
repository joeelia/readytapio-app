<template>
  <router-link :to="path">
    <button
      type="submit"
      :class="buttonStyle"
      class="relative flex justify-center text-sm font-medium text-black bg-white border border-transparent rounded-md group hover:bg-blueGray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span class="truncate">
        {{ title }}
      </span>
    </button>
  </router-link>
</template>

<script>
export default {
  name: "CommonButton",
  props: {
    buttonStyle: String,
    path: String,
    title: String
  }
};
</script>
