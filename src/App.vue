<template>
  <IonApp>
    <Menu/>
    <IonRouterOutlet id="main-content" />
  </IonApp>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet} from '@ionic/vue';
import Menu from './components/Menu.vue';

</script>
