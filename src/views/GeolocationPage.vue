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
            <h1>Hello</h1>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
