<template>
  <IonPage id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="end">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>My Trips</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonButton expand="full" @click="fetchTrips">Load Trips</IonButton>
      <!-- Display a list of trips -->
      <IonList v-if="trips.length">
        <IonItem v-for="(trip, index) in trips" :key="index">
          <IonLabel>
            <h2>{{ trip.pathName }}</h2>
            <p>Created at: {{ formatDate(trip.createdAt) }}</p>
            <p>Number of positions: {{ trip.positionsCount }}</p>
            <p>Owner: {{ trip.ownerName }}</p>
          </IonLabel>
        </IonItem>
      </IonList>

      <!-- Message when no trips are found -->
      <div v-else>
        <p>No trips available.</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonButton,IonList, IonItem, IonLabel, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useTrip } from '@/viewmodels/useTrip'; 

const { trips, fetchTrips, formatDate } = useTrip();



</script>

<style scoped>
h2 {
  font-size: 18px;
  font-weight: bold;
}

p {
  font-size: 14px;
  margin: 2px 0;
}
</style>
