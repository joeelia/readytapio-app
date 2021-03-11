<template>
    <div class="h-full home">
      <fixed-header>
        FSFSDFDS
</fixed-header>
      <h1
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
      >
        Back End Developer
      </h1>
      <nfc-scan />
    </div>
</template>

<script>
// @ is an alias to /src
import NfcScan from "@/components/NFC/Scan.vue";
import Haptic from "@/utils/Haptic";
import { mapMutations } from "vuex";
import FixedHeader from '../components/Shared/FixedHeader.vue';
export default {
  name: "Home",
  created() {
    if (this.isViberate === 0) {
      //first launch check
      this.increment();
    } else {
      Haptic.impactHeavy();
    }
  },
  components: {
    NfcScan,
    FixedHeader
  },
  methods: {
    ...mapMutations("global", ["increment"])
  },
  computed: {
    isViberate() {
      return this.$store.state.global.launched;
    }
  }
};
</script>
