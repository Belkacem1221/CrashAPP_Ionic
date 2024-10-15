<template>
    <IonMenu side="end" content-id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem @click="navToTrip">
            <IonButton>My trips</IonButton>
          </IonItem>
          <IonItem @click="navToAddTrip">
            <IonButton>Add trip</IonButton>
          </IonItem>
          <IonItem @click="navToSettings">
            <IonButton>Settings</IonButton>
          </IonItem>
          <IonItem @click="navToAppVersion">
            <IonButton>App Version</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </template>
  
  <script setup lang="ts">
  import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
  import { useMenu } from '@/viewmodels/useMenu'; 
  
  const { navToAddTrip, navToAppVersion, navToSettings, navToTrip} = useMenu();
  </script>
  
  <style scoped>
  </style>
  