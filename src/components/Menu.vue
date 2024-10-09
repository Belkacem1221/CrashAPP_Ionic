<template>
    <IonMenu side="end" content-id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem @click="navToLogin">
            <IonLabel>Login</IonLabel>
          </IonItem>
          <IonItem @click="navToSignUp">
            <IonLabel>Sign Up</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  </template>
  
  <script setup lang="ts">
  import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
  import { useMenu } from '@/viewmodels/useMenu'; 
  
  const { navToLogin, navToSignUp} = useMenu();
  </script>
  
  <style scoped>
  </style>
  