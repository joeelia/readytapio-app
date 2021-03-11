<template>
  <div
    class="h-full max-h-screen overflow-y-hidden bg-transparent select-none no-scrollbar "
  >
    <slot />
    <bottom-nav />
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import BottomNav from "@/components/Shared/BottomNav.vue";
export default {
  name: "ClassicLayout",
  components: { BottomNav },
};
</script>