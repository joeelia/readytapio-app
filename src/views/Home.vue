<template>
  <div class="home h-full">
    <nfc-scan />
  </div>
</template>

<script>
// @ is an alias to /src
import NfcScan from "@/components/NFC/Scan.vue";

export default {
  name: "Home",
  components: {
    NfcScan
  }
};
</script>
