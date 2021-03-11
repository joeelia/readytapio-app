<template>
  <div class="h-full home">
    <nfc-scan />
  </div>
</template>

<script>
// @ is an alias to /src
import NfcScan from "@/components/NFC/Scan.vue";
import Haptic from "@/utils/Haptic";
import { mapMutations } from 'vuex';
export default {
  name: "Home",
  created() {
    if (this.isViberate === 0){
      //first launch check
       this.increment();
    } else {
       Haptic.impactHeavy();
    }
  },
  components: {
    NfcScan
  },
   methods: {
    ...mapMutations('global', ['increment']),
   },
  computed: {
      isViberate () {
        return this.$store.state.global.launched
      },
    }
};
</script>
