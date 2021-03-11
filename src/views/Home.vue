<template>
  <classic-layout
    class="bg-background space-y-4 align-middle py-40 grid grid-cols-1 items-stretch p-10 mx-auto"
  >
    <h1 class="w-20 h-20 min-w-full bg-blueGray-700">LOGO</h1>
    <p class="mx-auto font-bold text-xl">NFC Soultions At Scale.</p>
    <common-button
      title="Redeem Your Tags"
      buttonStyle="py-3 w-9/12 bg-blueGray-600 text-xl font-bold text-white mx-auto"
      path="/login"
    />
    <common-button
      title="Create Account"
      buttonStyle="py-3 w-9/12 text-xl font-bold bg-blueGray-200 text-black mx-auto"
      path="/login"
    />

    <div class="flex-auto mb-10 justify-end">
      <div>Login here</div>
    </div>
  </classic-layout>
</template>

<script>
// @ is an alias to /src
import Haptic from "@/utils/Haptic";
import { mapMutations } from "vuex";
import CommonButton from "../components/Shared/CommonButton.vue";
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
    CommonButton
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
