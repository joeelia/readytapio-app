<template>
  <classic-layout class="bg-background">
    <div class="h-full home">
      <h1 class="w-20 h-20 min-w-full bg-blueGray-700">LOGO</h1>
    </div>
  </classic-layout>
</template>

<script>
// @ is an alias to /src
import Haptic from "@/utils/Haptic";
import { mapMutations } from "vuex";
export default {
  name: "Home",
  created() {
    console.log(this.$route.meta.template);
    if (this.isViberate === 0) {
      //first launch check
      this.increment();
    } else {
      Haptic.impactHeavy();
    }
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
