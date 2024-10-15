<template>
    <IonPage id="main-content">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="end">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Geolocation</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList>
                <IonItemDivider>
                    <IonLabel>My trips</IonLabel>
                </IonItemDivider>

                <IonList v-if="userTrips.length">
                    <IonItem v-for="trip in userTrips" :key="trip.id" @click="goToTripDetails(trip)">
                    <IonLabel>
                        <h2>{{ trip.name }}</h2>
                        <p>Positions enregistrées : {{ trip.positionCount }}</p>
                        <p>Date de création : {{ formatDate(trip.createdAt) }}</p>
                    </IonLabel>
                        <IonButton slot="end" @click.stop="deleteTrip(trip.id)">Supprimer</IonButton>
                    </IonItem>
                </IonList>

                <IonItemDivider>
                    <IonLabel>Shared trips</IonLabel>
                </IonItemDivider>

                <IonList v-if="sharedTrips.length">
                    <IonItem v-for="trip in sharedTrips" :key="trip.id" @click="goToTripDetails(trip)">
                    <IonLabel>
                        <h2>{{ trip.name }}</h2>
                        <p>Positions enregistrées : {{ trip.positionCount }}</p>
                        <p>Date de création : {{ formatDate(trip.createdAt) }}</p>
                        <p v-if="trip.owner !== currentUserId">Propriétaire : {{ trip.owner }}</p>
                    </IonLabel>
                        <IonButton slot="end" @click.stop="shareTrip(trip.id)">Partager</IonButton>
                    </IonItem>
                </IonList>
            </IonList>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
    import {IonLabel, IonButton, IonItemDivider, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';


</script>


<style scoped>
    .position-title {
        font-family: 'Courier New', monospace;
        font-size: 16px;
        color: #161616;
    }
    .position-details {
        font-family: 'Courier New', monospace;
        font-size: 14px;
        color: #333;
    }
</style>