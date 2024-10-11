<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <form @submit.prevent= "handleLogin">
                            <IonInput v-model="email" class="ion-margin-bottom" label="Email" type="email" label-placement="floating" fill="outline" placeholder="Enter email"></IonInput>
                            <IonInput v-model="password" class="ion-margin-bottom" label="Password" type="password" label-placement="floating" fill="outline" placeholder="Enter password"></IonInput>
                            <IonButton type="submit" expand="block">Login</IonButton>
                            <IonButton expand="block" @click="navToSignUp">Create an account</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>

                <!--Appear is form false-->
                <IonAlert
                    :is-open = "isOpen"
                    header="Fill the fields properly"
                    :message= "messageAlert"
                    :buttons="alertBtn"
                    @didDismiss="() => setOpen(false)"
                ></IonAlert>
            </IonContent>
    </IonPage>
</template>

<script setup lang="ts">
    import { IonAlert, IonButton,IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { useLogin } from '@/viewmodels/useLogin';
    import { useAlert } from '@/viewmodels/useAlert';

    const {email, password, handleLogin, navToSignUp} = useLogin()
    const {isOpen ,setOpen, alertBtn, messageAlert} = useAlert()
</script>