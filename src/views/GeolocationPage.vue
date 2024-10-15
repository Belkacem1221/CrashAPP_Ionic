<template>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Trips</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
  
      <IonContent>
        <!-- Button to trigger fetch trips -->
        <IonButton @click="fetchTrips">Show My Trips</IonButton>
  
        <IonList>
          <IonListHeader>
            <IonLabel>Your Trips</IonLabel>
          </IonListHeader>
          <!-- List of Trips -->
          <IonItemSliding v-for="trip in trips" :key="trip.id">
            <IonItem @click="viewTripDetails(trip.id)">
              <IonLabel>
                <h2>{{ trip.name }}</h2>
                <p>Created: {{ formatDate(trip.createdAt) }}</p>
                <p>Positions: {{ trip.positionsCount }}</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger" @click="deleteTrip(trip.id)">
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
  
          <IonListHeader>
            <IonLabel>Shared Trips</IonLabel>
          </IonListHeader>
          <!-- Shared Trips -->
          <IonItemSliding v-for="trip in sharedTrips" :key="trip.id">
            <IonItem @click="viewTripDetails(trip.id)">
              <IonLabel>
                <h2>{{ trip.name }}</h2>
                <p>Created: {{ formatDate(trip.createdAt) }}</p>
                <p>Positions: {{ trip.positionsCount }}</p>
                <p v-if="trip.ownerName">Owner: {{ trip.ownerName }}</p>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger" @click="deleteTrip(trip.id)">
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  </template>
  
  <script setup lang="ts" >
    import { IonMenuButton,IonButtons,IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonButton } from '@ionic/vue';
    import { useTrip } from '@/viewmodels/useTrip';  
    
    const { trips, sharedTrips, fetchTrips, deleteTrip, formatDate, viewTripDetails } = useTrip();

  </script>
  
  <style scoped>
  /* Add any specific styles here if needed */
  </style>
  