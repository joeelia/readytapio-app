<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title> {{ title }} </ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
export default {
  name: "IonicHeader",
  components: { IonHeader, IonToolbar, IonTitle },
  props: {
    title: String
  }
};
</script>
