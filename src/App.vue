<template>
  <div
    class="safe-top safe-left bg-blueGray-100 safe-right no-scrollbar safe-bottom"
  >
    <router-view />
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import { Plugins, StatusBarStyle } from "@capacitor/core";
const { StatusBar, SplashScreen } = Plugins;
export default {
  name: "App",
  mounted() {
    console.log("ok");
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    });
    SplashScreen.hide();
    // document.body.style.overflow = "hidden";
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
