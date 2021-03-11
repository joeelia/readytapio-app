<template>
  <classic-layout>
    <div class="tags">
      <h1>This is an about page</h1>
      <nfc-scan />
    </div>
  </classic-layout>
</template>
<script>
// @ is an alias to /src
import Haptic from "@/utils/Haptic";
import NfcScan from "@/components/NFC/Scan.vue";
export default {
  name: "Tags",
  created() {
    Haptic.impactHeavy();
  },
  components: { NfcScan }
};
</script>
