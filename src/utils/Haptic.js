import { Plugins, HapticsImpactStyle } from "@capacitor/core";

const { Haptics } = Plugins;

export default {
  impactLight() {
    Haptics.impact({
      style: HapticsImpactStyle.Light
    });
  },
  impactMedium() {
    Haptics.impact({
      style: HapticsImpactStyle.Light
    });
  },
  impactHeavy() {
    Haptics.impact({
      style: HapticsImpactStyle.Light
    });
  }
};
