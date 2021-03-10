<template v-slot:bottom>
  <ion-tabs
    @ionTabsWillChange="beforeTabChange"
    @ionTabsDidChange="afterTabChange"
  >
    <ion-tab-bar>
      <ion-tab-button tab="schedule" href="/tabs/schedule">
        <!-- <ion-icon :icon="calendar"></ion-icon> -->
        <ion-label>Schedule</ion-label>
        <ion-badge>6</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <!-- <ion-icon :icon="personCircle"></ion-icon> -->
        <ion-label>Speakers</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import { IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/vue";
export default {
  name: "IonicNav",
  components: { IonLabel, IonTabBar, IonTabButton, IonTabs },
  props: {
    title: String
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      beforeTabChange,
      afterTabChange
    };
  }
};
</script>
