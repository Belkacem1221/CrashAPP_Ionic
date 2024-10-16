<template>
  <IonPage id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="end">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>ADD TRIP</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Informations Route</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <IonInput v-model="pathName" class="ion-margin-bottom" label="Path name" type="text" label-placement="floating" fill="outline" placeholder="Enter Path name" required></IonInput>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>GPS</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton
            expand="block"
            :color="isTracking ? 'danger' : 'primary'"
            @click="toggleTracking"
          >
            {{ isTracking ? 'Arrêter' : 'Démarrer' }} l'enregistrement
          </IonButton>

          <IonButton
            v-if="!isTracking && recordedPositions.length"
            expand="block"
            color="success"
            @click="sendRoute"
          >
            Send Route
          </IonButton>
        </IonCardContent>
      </IonCard>

      <IonCard v-if="recordedPositions.length">
        <IonCardHeader>
          <IonCardTitle>Positions Saved</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem v-for="(position, index) in recordedPositions" :key="index">
              <IonLabel>
                <h2>Position {{ index + 1 }}</h2>
                <p>Lat: {{ position[0].coords.latitude }}, Lon: {{ position[0].coords.longitude }}</p>
                <p>Address: {{ position[1] }}</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>

        <!--Appear if form false-->
        <IonAlert
          :is-open = "isOpen"
          :message= "messageAlert"
          :buttons="alertBtn"
          @didDismiss="() => setOpen(false, messageAlert)"
        ></IonAlert>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonAlert,IonInput ,IonCardTitle,IonCardHeader,IonCardContent,IonCard,IonLabel,IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useGeolocation } from '@/viewmodels/useGeolocation';
import { useAlert } from '@/viewmodels/useAlert';



const { isTracking, recordedPositions, toggleTracking, sendRoute, pathName} = useGeolocation();

const {isOpen ,setOpen, alertBtn, messageAlert,} = useAlert()

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
