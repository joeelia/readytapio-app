<template>
  <div class="tags">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import Haptic from "@/utils/Haptic";
export default {
  name: "Tags",
  created() {
    Haptic.impactHeavy();
  },
  components: {}
};
</script>
