<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Sign-up</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardContent>
                    <form @submit.prevent="handleSignUp">
                            <IonInput type="text" v-model="firstName" class="ion-margin-bottom" label="First Name" label-placement="floating" fill="outline" placeholder="Enter First Name"></IonInput>
                            <IonInput type="text" v-model="lastName" class="ion-margin-bottom" label="Last Name" label-placement="floating" fill="outline" placeholder="Enter Last"></IonInput>
                            <IonInput type="email" v-model="email" class="ion-margin-bottom" label="Email" label-placement="floating" fill="outline" placeholder="Enter email"></IonInput>
                            <IonInput type="password" v-model="password" class="ion-margin-bottom" label="Password" label-placement="floating" fill="outline" placeholder="Enter password"></IonInput>
                            <IonButton type="submit" expand="block">Sumbit</IonButton>
                    </form>
                </IonCardContent>
            </IonCard>
        </IonContent>

        <IonAlert
            :is-open = "isOpen"
            header="Fill the fields properly"
            :message= "messageAlert"
            :buttons="alertBtn"
            @didDismiss="() => setOpen(false)"
        ></IonAlert>
    </IonPage>
</template>

<script setup lang="ts">
    import { IonAlert, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/vue';
    import { useSignUp } from '@/viewmodels/useSignUp';
    import { useAlert } from '@/viewmodels/useAlert';

    const {email, password, firstName, lastName, handleSignUp } = useSignUp()
    const {isOpen ,setOpen, alertBtn, messageAlert} = useAlert()

    
</script>
