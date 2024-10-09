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
            <IonList :inset="true" v-for="(position, index) in positions" :key="index">
                <IonItem>Longitude: {{ position[0].coords.longitude}}</IonItem>
                <IonItem>Latitude: {{ position[0].coords.latitude}}</IonItem>
                <IonItem>Address: {{ position[1]}}</IonItem>
            </IonList>
        </IonContent>
        <IonFooter>
            <IonButton color="tertiary" expand="full" @click="fetchCurrentPosition">Get Position</IonButton>
        </IonFooter>
    </IonPage>
</template>

<script setup lang="ts">
    import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { useGeolocation } from '@/viewmodels/useGeolocation';

    const {positions, fetchCurrentPosition} = useGeolocation();
</script>
