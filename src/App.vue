<template>
  <IonApp>
    <IonMenu side="end" content-id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Hello from the Menu!</p>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet id="main-content" />
  </IonApp>
</template>

<script setup lang="ts">
import { IonApp, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/vue';
</script>
