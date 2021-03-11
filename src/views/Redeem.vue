<template>
  <classic-layout>
    <div class="redeem">
      <h1>redeem....</h1>
    </div>
  </classic-layout>
</template>
<script>
// @ is an alias to /src
import Haptic from "@/utils/Haptic";
export default {
  name: "Redeem",
  created() {
    Haptic.impactHeavy();
  },
  components: {}
};
</script>
