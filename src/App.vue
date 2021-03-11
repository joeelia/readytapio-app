<template>
  <div
    class="safe-top safe-left bg-blueGray-100 safe-right no-scrollbar safe-bottom"
  >
    <div
      class="h-full max-h-screen overflow-y-hidden bg-transparent select-none no-scrollbar "
    >
      <fixed-header />
      <router-view class="p-4" />
      <bottom-nav />
    </div>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import FixedHeader from "./components/Shared/FixedHeader.vue";
import BottomNav from "./components/Shared/BottomNav.vue";
import { Plugins, StatusBarStyle } from "@capacitor/core";
const { StatusBar, SplashScreen } = Plugins;
export default {
  name: "App",
  components: { FixedHeader, BottomNav },
  mounted() {
    console.log("ok");
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    });
    SplashScreen.hide();
    document.body.style.overflow = "hidden";
  }
};
</script>
<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
