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
          <IonItem @click="appVersionAlert">
            <IonButton>App Version</IonButton>
          </IonItem>

          <IonAlert
            :is-open = "isOpen"
            :message= "messageAlert"
            :buttons="alertBtn"
            @didDismiss="() => setOpen(false, messageAlert)"
        ></IonAlert>

        </IonList>
      </IonContent>
    </IonMenu>
  </template>
  
  <script setup lang="ts">
  import { IonAlert,IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
  import { useMenu } from '@/viewmodels/useMenu'; 
  import { useAlert } from '@/viewmodels/useAlert';

  const { navToAddTrip, appVersionAlert, navToSettings, navToTrip} = useMenu();
  const {isOpen ,setOpen, alertBtn, messageAlert} = useAlert()
  </script>
  
  <style scoped>
  </style>
  