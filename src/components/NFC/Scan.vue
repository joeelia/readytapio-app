<template>
  <button
    @click="startScan()"
    type="button"
    class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Scan Tag
  </button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { NFC } from "@ionic-native/nfc";
import Haptic from "@/utils/Haptic";
export default {
  name: "NFCScan",
  data() {
    return {
      nfcSession: false
    };
  },
  created() {
    console.log(NFC);
  },
  methods: {
    startScan() {
      Haptic.impactHeavy();
      NFC.scanTag().then(
        tag => {
          console.log(JSON.stringify(tag));
          if (tag.id) {
            console.log(NFC.bytesToHexString(tag.id));
          }
        },
        err => console.log(err)
      );
      // var message = [
      //     ndef.textRecord("Hello, world")
      // ];
      // nfc.write(
      //     message,
      //     success => console.log('wrote data to tag' + success),
      //     error => console.log(error)
      // );
      this.nfcsession = true;
    }
  }
};
</script>
