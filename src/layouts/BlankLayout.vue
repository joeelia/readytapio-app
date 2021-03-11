<template>
  <div
    class="h-full max-h-screen overflow-y-hidden bg-transparent select-none no-scrollbar"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: "BlankLayout",
};
</script>
