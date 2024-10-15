<template>
    <IonPage id="main-content">
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="end">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Settings</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel position="stacked">First Name</IonLabel>
                    <IonInput v-model="userInfo.firstName" readonly></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Last Name</IonLabel>
                    <IonInput v-model="userInfo.lastName" readonly></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput v-model="userInfo.email" readonly></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">New Password</IonLabel>
                    <IonInput type="password" v-model="newPassword"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Old Password</IonLabel>
                    <IonInput type="password" v-model="oldPassword"></IonInput>
                </IonItem>
            </IonList>
            <IonButton expand="full" @click="changePassword">Change Password</IonButton>
            <IonButton expand="full" color="danger" @click="logout">Log Out</IonButton>
        </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
import { IonInput, IonLabel, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useSettings } from '@/viewmodels/useSettings';

const { userInfo, changePassword, oldPassword, newPassword, logout } = useSettings();
</script>
