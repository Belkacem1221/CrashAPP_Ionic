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
            <IonTitle class="ion-margin-top ion-text-center">ADDRESS</IonTitle>
            <IonList :inset="true" v-for="(position, index) in positions" :key="index">
                <IonItem class="position-details">{{ position[1]}}
                    <IonButton  @click="toggleDetails(index)">
                        {{ detailsText[index] || 'Show Details'}}
                    </IonButton>
                </IonItem>
                <IonItem v-if="showDetails[index]" class="position-title">Longitude:  <div class="position-details"> {{ position[0].coords.longitude}}</div></IonItem>
                <IonItem v-if="showDetails[index]" class="position-title">Latitude: <div class="position-details">{{ position[0].coords.latitude}}</div></IonItem>
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
    import { useShowDetails } from '@/viewmodels/useShowDetails';

    const {positions, fetchCurrentPosition} = useGeolocation();
    const {showDetails, detailsText, toggleDetails} = useShowDetails()
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